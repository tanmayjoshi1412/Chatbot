export class Question{
  message : string;
  id : string;
  parentId : string;
  messageForNextMenu : string;
  isInputRequired : boolean;
  active : boolean;
  enable : boolean = true;
}
