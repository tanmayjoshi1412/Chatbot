package com.phc.bankchatbot.records;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "question")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Question {

    @Id
    String id;
    String message;
    String parentId;
    boolean isInputRequired;
    boolean active;
    String messageForNextMenu;

    public Question(String id, String message, String parentId, boolean isInputRequired, boolean active, String messageForNextMenu) {
        this.id = id;
        this.message = message;
        this.parentId = parentId;
        this.isInputRequired = isInputRequired;
        this.active = active;
        this.messageForNextMenu = messageForNextMenu;
    }

    public Question() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    public boolean isInputRequired() {
        return isInputRequired;
    }

    public void setInputRequired(boolean inputRequired) {
        isInputRequired = inputRequired;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getMessageForNextMenu() {
        return messageForNextMenu;
    }

    public void setMessageForNextMenu(String messageForNextMenu) {
        this.messageForNextMenu = messageForNextMenu;
    }
}
