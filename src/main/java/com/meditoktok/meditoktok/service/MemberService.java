package com.meditoktok.meditoktok.service;

import com.meditoktok.meditoktok.controller.UserLoginRequest;
import com.meditoktok.meditoktok.domain.Member;
import com.meditoktok.meditoktok.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberService {
    @Autowired
    MemberRepository memberRepository;

    public boolean isAdmin(UserLoginRequest rq) {
        Optional<Member> memberOptional = Optional.ofNullable(memberRepository.findByAccountAndPw(rq.getAccount(), rq.getPw()));

        if (memberOptional.isPresent()) {
            return memberOptional.get().getIsAdmin();
        } else {
            throw new RuntimeException("아이디 또는 비밀번호가 일치하지 않습니다.");
        }

    }
}
