package com.phc.bankchatbot.Repository;

import com.phc.bankchatbot.records.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface QuestionsRepository  extends MongoRepository<Question, String> {
    List<Question> findByParentIdAndActive(String parentId, boolean active);
}
