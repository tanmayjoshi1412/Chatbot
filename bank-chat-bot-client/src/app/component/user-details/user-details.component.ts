import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../service/user.service";
import {Message} from "../../model/Message";
import {QuestionService} from "../../service/question.service";
import {Question} from "../../model/Question";
import {AppConstants} from "../../app-constants";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  loggedinUser: User;
  test: any;
  showChatBox;
  false;
  messages: Message[] = [];
  value: string;
  userInput: string;
  USER = 'USER';
  BOT = 'BOT';
  readonly LABEL = AppConstants;

  constructor(private userService: UserService,
              private questionService: QuestionService,
              private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.loggedinUser = this.userService.getLoggedinUserData();
  }

  messageFromUser(previousQuestion: Question) {
    debugger;
    if (this.LABEL.MAIN_MENU === previousQuestion.parentId) {
      this.getQuestions(this.BOT, "0", true, previousQuestion.messageForNextMenu);

    } else if (this.LABEL.CLOSE_CHAT_WINDOW === previousQuestion.parentId) {
      this.closeChatwindowAndClearData();
    } else {
      var question = new Question();
      var questions = [];
      question.message = previousQuestion.message;
      questions.push(question);
      this.createMessage(this.USER, questions, previousQuestion.messageForNextMenu);
      this.getQuestions(this.BOT, previousQuestion.id, true, previousQuestion.messageForNextMenu);
    }

  }

  createMessage(from: string, questions: Question[], headerMessage: string) {
    this.enableDisableQuestions(false);
    this.messages.push(new Message(from, questions, headerMessage));
  }

  toggleChat(showChatBox: boolean) {
    if(!showChatBox)
      this.messages = []
    if (this.messages.length == 0) {
      this.getQuestions(this.BOT, "0", true, "");
    }
    this.showChatBox = showChatBox;
  }

  // @ts-ignore
  getQuestions(from: string, id: string, active: boolean, headerMessage: string): Question {
    this.spinnerService.show();

    if (id === '0') {
      headerMessage = this.LABEL.FIRST_HEADER_MESSAGE;
    }

    this.questionService.getQuestions(id, active).subscribe(resp => {
        this.enableDisableQuestions(false);
        var respQuestions = resp["response"];

        respQuestions.forEach(q => {
          q.enable = true;
        });

        this.messages.push(new Message(from, respQuestions, headerMessage));
        if (respQuestions.length == 0) {
          this.continueOrClose();
        }
      this.spinnerService.hide();
      }, error => {
        console.log("error while fetching data for id : " + id, error)
        return [];
      this.spinnerService.hide();
      }, () => {
      this.spinnerService.hide();
      }
    )
  }

  onUserInput() {
    var question = new Question();
    var questions = [];
    question.message = this.userInput;
    questions.push(question);
    this.createMessage(this.USER, questions, "");
    this.userInput = '';

    this.questionService.getResponseOnUserInput(question);
    this.questionService.getResponseOnUserInput(question).subscribe(resp => {
        this.enableDisableQuestions(false);
        var respQuestions = resp["response"];

        respQuestions.forEach(q => {
          q.enable = true;
        });

        this.messages.push(new Message(this.BOT, respQuestions, ''));
        if (respQuestions.length == 0) {
          this.continueOrClose();
        }
      }, error => {
        console.log("error while fetching data for id : " , error)
        return [];
      }, () => {
      }
    )

    //this.createBotClosingMessage();

  }

  createBotClosingMessage() {
    var question = new Question();
    var questions = [];
    question.message = this.LABEL.CLOSING_THANKS_MSG;
    question.enable = false
    questions.push(question);
    this.createMessage(this.BOT, questions, "");
    this.continueOrClose();
  }

  enableDisableQuestions(enable: boolean) {
    this.messages.forEach(msg => {
      msg.questions.forEach(quest => {
        quest.enable = enable;
      });
    });
  }

  continueOrClose() {
    var question = new Question();
    var questions = [];
    question.message = "Yes";
    question.enable = true;
    question.parentId = this.LABEL.MAIN_MENU;
    questions.push(question);

    question = new Question();
    question.message = "No";
    question.enable = true;
    question.parentId = this.LABEL.CLOSE_CHAT_WINDOW;
    questions.push(question);
    this.createMessage(this.BOT, questions, "Do you wish to continue with other services?");
  }

  closeChatwindowAndClearData() {
    debugger;
    this.toggleChat(false);
    this, this.messages = [];
  }


}
