package com.phc.bankchatbot;

public class Response<E> {
    private String sucesseMessage;
    private String errorMessage;
    private E response;

    public Response(String sucesseMessage, String errorMessage, E response) {
        this.sucesseMessage = sucesseMessage;
        this.errorMessage = errorMessage;
        this.response = response;
    }

    public String getSucesseMessage() {
        return sucesseMessage;
    }

    public void setSucesseMessage(String sucesseMessage) {
        this.sucesseMessage = sucesseMessage;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public E getResponse() {
        return response;
    }

    public void setResponse(E response) {
        this.response = response;
    }
}
