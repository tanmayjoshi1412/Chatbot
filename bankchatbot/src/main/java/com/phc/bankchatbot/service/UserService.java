package com.phc.bankchatbot.service;

import com.phc.bankchatbot.Repository.UsersRepository;
import com.phc.bankchatbot.Response;
import com.phc.bankchatbot.records.User;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.util.Locale;

@Service
public class UserService {

    private UsersRepository usersRepository;

    public UserService(UsersRepository usersRepository){
        this.usersRepository=usersRepository;
    }

    public User loadUserByUsername(String userName) throws Exception {
        User user = usersRepository.findByUserName(userName);
        if (user == null) {
            throw new Exception("User not found with username: " + userName);
        }
        return user;

    }

    public Response<User> saveUser(User user) {
        User response = usersRepository.findFirstByEmailId(user.getEmailId());
        if(null != response)
           return new Response<User>("","User Already Exists",null);
        usersRepository.save(user);
        return new Response<User>("","",user);
    }

    public User login(User user) {

        if(null == user || StringUtils.isBlank(user.getEmailId()))
            return null;
        User response = usersRepository.findFirstByEmailId(user.getEmailId());
        if(null != response && response.getAccessKey().equals(user.getAccessKey())){
            return  response;
        }else{
            return null;
        }
    }
}
