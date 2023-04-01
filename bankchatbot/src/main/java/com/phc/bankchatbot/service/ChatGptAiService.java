package com.phc.bankchatbot.service;

import com.phc.bankchatbot.records.Question;
import io.github.flashvayne.chatgpt.service.ChatgptService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

@Service
public class ChatGptAiService {

    @Autowired
    private ChatgptService chatgptService;

    final private String HDFC = "HDFC ";
    final private String LIST ="";
    final private List<String> WORDS_OF_LIST = Arrays.asList("offer","loan");

    public String getGptResponse(String query) {
        String responseMessage = chatgptService.sendMessage(HDFC + query + LIST);
        return responseMessage;
    }

    public List<Question> getQuestions(String query, String id) {
        String responseMessage = getGptResponse(query);
        responseMessage.replace("HDFC", "RJFC");
        List<String> questions = responseMessage.lines().collect(Collectors.toList());
        questions.removeAll(Collections.singleton(""));
        questions.removeAll(Collections.singleton(null));
        return createQuestions(questions, id);
    }

    private List<Question> createQuestions(List<String> questions, String id) {
        List<Question> questionList = new ArrayList<>();
        if(questions.size() == 1){
            questionList.add(new Question(null, questions.get(0), StringUtils.isBlank(id) ? "0" : id , false, true, null));
        }
        questions.subList(1, questions.size()).forEach(q -> {
            questionList.add(new Question(null, q.replaceFirst("^[^a-zA-Z]+(?!$)", ""), StringUtils.isBlank(id) ? "0" : id , false, true, null));
        });
        return questionList;
    }
}
