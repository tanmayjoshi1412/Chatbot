package com.phc.bankchatbot.service;

import com.phc.bankchatbot.Repository.QuestionsRepository;
import com.phc.bankchatbot.Response;
import com.phc.bankchatbot.records.Question;
import io.github.flashvayne.chatgpt.service.ChatgptService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class QuestionsService {

    private QuestionsRepository questionsRepository;

    @Autowired
    private ChatGptAiService chatGptAiService;

    private final String HDFC ="HDFC ";

    public QuestionsService(QuestionsRepository questionsRepository){
        this.questionsRepository=questionsRepository;
    }

    public Response saveQuestions(Question question) {
        if(null == question)
            return new Response("","Please enter Values to save question", null);

        if(StringUtils.isBlank(question.getParentId())){
            question.setParentId("0");
        }
        Question response = questionsRepository.save(question);
        return new Response("Question Saved Sucessfully....","", response);
    }

    public Response getQuestionsById(String parentId, boolean active) {
        List<Question> quetions = questionsRepository.findByParentIdAndActive(parentId, active);
        return getResponseFromQuestions(quetions, false, parentId);
    }

    private Response getResponseFromQuestions(List<Question> quetions, boolean isUserInput, String parentId){
        if(CollectionUtils.isEmpty(questionsRepository.findAll())){
            quetions = getFirstDefaultMenu();
        }else if(CollectionUtils.isEmpty(quetions) ){
            Optional<Question> ques = questionsRepository.findById(parentId);
            quetions = getChatGptResponse(ques.get());
        }
        return new Response("Questions fetched : "+ quetions.size(),"", quetions);
    }

    private List<Question> getFirstDefaultMenu(){
        List<Question> ques = questionsRepository.findByParentIdAndActive("0", true);
        if(!CollectionUtils.isEmpty(ques))
            return ques;
        List<Question> questions =chatGptAiService.getQuestions(HDFC + " chat bot loading options and offers list without welcome message", null);
        return questionsRepository.saveAll(questions);
    }

    private List<Question> getChatGptResponse(Question question){
        List<Question> questions =chatGptAiService.getQuestions(HDFC + question.getMessage(), question.getId());
        return questionsRepository.saveAll(questions);
    }


    public Response getQuestionByUserInput(Question question) {

        List<Question> newQuestion = questionsRepository.findByMessage(question.getMessage().toUpperCase());
        if (0 == newQuestion.size()){
            question.setMessage(question.getMessage().toUpperCase());
            question  = questionsRepository.save(question);
        }else{
            question = newQuestion.get(0);
        }

        List<Question> questions = questionsRepository.findByParentIdAndActive(question.getId(), true);
        return getResponseFromQuestions(questions, true, question.getId());
    }
}
