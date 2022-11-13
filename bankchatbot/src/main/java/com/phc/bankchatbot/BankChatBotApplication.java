package com.phc.bankchatbot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackages = { "com.phc.bankchatbot.Repository" })
public class BankChatBotApplication {

	public static void main(String[] args) {
		SpringApplication.run(BankChatBotApplication.class, args);
	}

}
