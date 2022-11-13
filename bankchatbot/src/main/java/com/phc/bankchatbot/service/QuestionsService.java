package com.phc.bankchatbot.service;

import com.phc.bankchatbot.Repository.QuestionsRepository;
import com.phc.bankchatbot.Response;
import com.phc.bankchatbot.records.Question;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionsService {

    private QuestionsRepository questionsRepository;

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
        return new Response("Questions fetched : "+ quetions.size(),"", quetions);
    }
}
