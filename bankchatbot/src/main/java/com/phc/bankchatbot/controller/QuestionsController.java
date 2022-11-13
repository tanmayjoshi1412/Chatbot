package com.phc.bankchatbot.controller;

import com.phc.bankchatbot.Response;
import com.phc.bankchatbot.records.Question;
import com.phc.bankchatbot.service.QuestionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuestionsController {
    @Autowired
    private QuestionsService questionsService;

    @PostMapping("saveQuestions")
    public Response saveQuestions(@RequestBody Question question) throws Exception {
        return questionsService.saveQuestions(question);
    }

    @GetMapping("getQuestions")
    public Response getQuestionsById(String id, boolean active){
        return  questionsService.getQuestionsById(id, active);
    }
}
