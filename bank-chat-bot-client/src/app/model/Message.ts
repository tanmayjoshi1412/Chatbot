import {Question} from "./Question";

export class Message{
  author : string;
  questions : Question[];
  headerMessage: string;

  // @ts-ignore
  constructor(public author: string, public questions: Question[], public headerMessage: string) {}
}
