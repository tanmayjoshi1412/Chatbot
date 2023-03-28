package com.phc.bankchatbot.service;

import io.github.flashvayne.chatgpt.service.ChatgptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatGptAiService {

    @Autowired
    private ChatgptService chatgptService;

    final private String bankSuffix = " HDFC bank";

    public String getGptResponse (String query){
        String responseMessage = chatgptService.sendMessage(query + bankSuffix);
        return responseMessage;
    }
}
