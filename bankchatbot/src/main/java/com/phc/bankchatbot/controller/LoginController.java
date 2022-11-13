package com.phc.bankchatbot.controller;

import com.phc.bankchatbot.records.User;
import com.phc.bankchatbot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {

    @Autowired
    private UserService userService;


    @GetMapping("getUserData")
    public User getUserData(@RequestParam String userName) throws Exception {
        User user = userService.loadUserByUsername(userName);
        return user;
    }

    @PostMapping("login")
    public User login(@RequestBody User user) throws Exception {
        User response = userService.login(user);
        return response;
    }

}
