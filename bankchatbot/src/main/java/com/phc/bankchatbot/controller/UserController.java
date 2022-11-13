package com.phc.bankchatbot.controller;

import com.phc.bankchatbot.Response;
import com.phc.bankchatbot.records.User;
import com.phc.bankchatbot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("saveUser")
    public Response saveUser(@RequestBody User user) throws Exception {
        return userService.saveUser(user);
    }
}
