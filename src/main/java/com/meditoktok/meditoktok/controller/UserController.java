package com.meditoktok.meditoktok.controller;

import com.meditoktok.meditoktok.domain.User;
import com.meditoktok.meditoktok.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/index")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/join")
    public String join(@RequestBody User user) {

        User newUser = userRepository.save(user);

        return user.getName() + "님의 회원가입을 축하드립니다.";
    }
}
