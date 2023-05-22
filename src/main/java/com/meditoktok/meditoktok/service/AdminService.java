package com.meditoktok.meditoktok.service;

import com.meditoktok.meditoktok.domain.Admin;
import com.meditoktok.meditoktok.domain.User;
import com.meditoktok.meditoktok.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {
    /**
     * 로그인
     */
    @Autowired
    private AdminRepository adminRepository;


    public Admin login(String account, String pw) {
        Optional<Admin> adminOptional = Optional.ofNullable(adminRepository.findByAccountAndPw(account, pw));
        if (adminOptional.isPresent()) {
            return adminOptional.get();
        } else {
            throw new RuntimeException("아이디 또는 비밀번호가 일치하지 않습니다.");
        }
    }

    /**
     * 회원가입
     */

    public Admin signup(Admin admin) {
        String account = admin.getAccount();
        Optional<Admin> adminOptional = Optional.ofNullable(adminRepository.findByAccount(account));
        if (adminOptional.isPresent()) {
            throw new RuntimeException("이미 사용중인 아이디입니다.");
        }
        return adminRepository.save(admin);
    }

    public Admin findAccount(String name, String birth, String email) {
        Optional<Admin> adminOptional = Optional.ofNullable(adminRepository.findByNameAndBirthAndEmail(name, birth, email));
        if (adminOptional.isPresent()) {
            return adminOptional.get();

        } else {
            throw new RuntimeException("정보에 해당하는 아이디가 없습니다.");
        }
    }


    public Admin getAdminById(Long adminId) throws Exception {
        Optional<Admin> adminOptional = adminRepository.findById(adminId);
        if (adminOptional.isPresent()) {
            return adminOptional.get();
        } else {
            // User를 찾을 수 없을 때 처리
            throw new Exception("유저를 찾을 수 없습니다.");
        }
    }
}
