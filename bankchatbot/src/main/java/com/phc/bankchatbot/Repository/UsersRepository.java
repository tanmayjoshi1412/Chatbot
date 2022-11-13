package com.phc.bankchatbot.Repository;

import com.phc.bankchatbot.records.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UsersRepository extends MongoRepository<User, String> {

   /* List<User> findByUserIdAndPasswordAnd(String userId, String password);*/

    User findByUserId(String userId);
    User findByUserName(String userName);
    User findByEmailId(String emailId);
}
