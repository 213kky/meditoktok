package com.meditoktok.meditoktok.controller;

import com.meditoktok.meditoktok.domain.Admin;
import com.meditoktok.meditoktok.domain.Member;
import com.meditoktok.meditoktok.domain.User;
import com.meditoktok.meditoktok.repository.UserRepository;
import com.meditoktok.meditoktok.service.AdminService;
import com.meditoktok.meditoktok.service.MemberService;
import com.meditoktok.meditoktok.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @Autowired
    private MemberService memberService;
    @Autowired
    private AdminService adminService;

//    @PostMapping("/login")
//    public Member login(@RequestBody UserLoginRequest loginRequest) {
//        if (!memberService.isAdmin(loginRequest)) {
//            try {
//                 User user = userService.login(loginRequest.getAccount(), loginRequest.getPw());
//                return user;
//            } catch (Exception e) {
//                throw new RuntimeException(e.getMessage());
//            }
//        } else {
//            try {
//                Admin admin = adminService.login(loginRequest.getAccount(), loginRequest.getPw());
//                return admin;
//            } catch (Exception e) {
//                throw new RuntimeException(e.getMessage());
//            }
//        }
//    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginRequest loginRequest) {
        try {
            Member member;
            if (!memberService.isAdmin(loginRequest)) {
                member = userService.login(loginRequest.getAccount(), loginRequest.getPw());
            } else {
                member = adminService.login(loginRequest.getAccount(), loginRequest.getPw());
            }

            return ResponseEntity.ok(member);
        } catch (Exception e) {
            String errorMessage = e.getMessage();
            ErrorDto errorDto = new ErrorDto(errorMessage);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorDto);
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
    public String findAccount(@RequestBody UserFindAccount userFindAccount) {
        try {
            User user = userService.findAccount(userFindAccount.getName(), userFindAccount.getBirth(), userFindAccount.getEmail());
            return user.getAccount() + "입니다.";
        } catch (Exception e) {
            return e.getMessage();
        }
    }


}
