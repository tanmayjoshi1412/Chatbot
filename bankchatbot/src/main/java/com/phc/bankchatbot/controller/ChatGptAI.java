package com.phc.bankchatbot.controller;

import com.phc.bankchatbot.service.ChatGptAiService;
import io.github.flashvayne.chatgpt.service.ChatgptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatGptAI {

    @Autowired
    private ChatGptAiService chatGptAiService;

    @GetMapping("getGptResponse")
    public String getGptResponse (@RequestParam String query){
        return chatGptAiService.getGptResponse(query);
    }
}
