package com.meditoktok.meditoktok.service;

import com.meditoktok.meditoktok.domain.User;
import com.meditoktok.meditoktok.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.NoHandlerFoundException;

import java.util.Optional;

@Service
public class UserService {
    /**
     * 로그인
     */
    @Autowired
    private UserRepository userRepository;

    public User login(String account, String pw) {
        Optional<User> userOptional = Optional.ofNullable(userRepository.findByAccountAndPw(account, pw));
        if (userOptional.isPresent()) {
            return userOptional.get();
        } else {
            throw new RuntimeException("아이디 또는 비밀번호가 일치하지 않습니다.");
        }
    }

    /**
     * 회원가입
     */

    public User signup(User user) {
        String account = user.getAccount();
        Optional<User> userOptional = Optional.ofNullable(userRepository.findByAccount(account));
        if (userOptional.isPresent()) {
            throw new RuntimeException("이미 사용중인 아이디입니다.");
        }
        return userRepository.save(user);
    }

    public User findAccount(String name, String birth, String email) {
        Optional<User> userOptional = Optional.ofNullable(userRepository.findByNameAndBirthAndEmail(name, birth, email));
        if (userOptional.isPresent()) {
            return userOptional.get();

        } else {
            throw new RuntimeException("정보에 해당하는 아이디가 없습니다.");
        }
    }


    public User getUserById(Long userId) throws Exception {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            return optionalUser.get();
        } else {
            // User를 찾을 수 없을 때 처리
            throw new Exception("사용자를 찾을 수 없습니다.");
        }
    }
}
