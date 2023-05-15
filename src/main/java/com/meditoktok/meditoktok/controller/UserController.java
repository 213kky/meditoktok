package com.meditoktok.meditoktok.controller;

import com.meditoktok.meditoktok.domain.User;
import com.meditoktok.meditoktok.repository.UserRepository;
import com.meditoktok.meditoktok.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
//@RequestMapping("/index")
public class UserController {
    /**
     * 회원가입
     */
//    @Autowired
//    private UserRepository userRepository;
//
//    @PostMapping("/join")
//    public String join(@RequestBody User user) {
//
//        User newUser = userRepository.save(user);
//
//        return user.getName() + "님의 회원가입을 축하드립니다.";
//    }



    /**
     * 로그인
     */
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody UserLoginRequest loginRequest) {
        try {
            User user = userService.login(loginRequest.getAccount(), loginRequest.getPw());
            return user.getName() + "님 환영합니다.";
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    @PostMapping("/signup/user")
    public String signup(@RequestBody User user) {
        try {
            userService.signup(user);
            return "회원가입이 완료되었습니다.";
        } catch (Exception e) {
            return e.getMessage();
        }
    }

    @PostMapping("/findAccount")
    public String findAccount(@RequestBody UserFindAccount userFindAccount){
        try{
            User user = userService.findAccount(userFindAccount.getName(), userFindAccount.getBirth(), userFindAccount.getEmail());
            return user.getAccount() + "입니다.";
        } catch (Exception e){
            return e.getMessage();
        }
    }


}
