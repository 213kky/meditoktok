package com.meditoktok.meditoktok.repository;

import com.meditoktok.meditoktok.domain.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void create() {
        User user = new User();

//        user.setAccount("ASDd");
        user.setName("asds");
//        user.seteMail("kkkk");
        user.setPw("sad");
        user.setPhoneNumber("010101");
        user.setBirth("97972");
//        user.setAdmin(true);
        user.setGender(1);
        user.setMailAgree(true);



        User newUser = userRepository.save(user);
    }
}