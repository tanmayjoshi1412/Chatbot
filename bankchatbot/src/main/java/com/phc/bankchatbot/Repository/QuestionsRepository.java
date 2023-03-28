package com.phc.bankchatbot.Repository;

import com.phc.bankchatbot.records.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface QuestionsRepository  extends MongoRepository<Question, String> {
    List<Question> findByParentIdAndActive(String parentId, boolean active);
    Optional<Question> findById(String id);
}
