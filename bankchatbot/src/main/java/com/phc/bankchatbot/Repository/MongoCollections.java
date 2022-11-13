package com.phc.bankchatbot.Repository;

public enum MongoCollections {

    USER("user"),
    QUESTIONS("questions");

    private final String collectionName;

    MongoCollections(String collectionName) {
        this.collectionName = collectionName;
    }


    public String getValue() {
        return collectionName;
    }

}
