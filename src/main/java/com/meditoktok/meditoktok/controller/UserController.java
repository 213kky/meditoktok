package com.meditoktok.meditoktok.controller;

import com.meditoktok.meditoktok.domain.User;
import com.meditoktok.meditoktok.repository.UserRepository;
import com.meditoktok.meditoktok.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/index")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/join")
    public String join(@RequestBody User user) {

        User newUser = userRepository.save(user);

        return user.getName() + "님의 회원가입을 축하드립니다.";
    }

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestParam String account, @RequestParam String pw) {
        try {
            User user = userService.login(account, pw);
            return user.getName() + "님 환영합니다.";
        } catch (Exception e) {
            return e.getMessage();
        }
    }

}
