package com.meditoktok.meditoktok.repository;

import com.meditoktok.meditoktok.domain.Gender;
import com.meditoktok.meditoktok.domain.Member;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.swing.text.IconView;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class MemberRepositoryTest {

    @Autowired
    private MemberRepository memberRepository;

    @Test
    public void test(){
        Member member= new Member();
        member.setId("제발요");
        member.setPw("plz");
        memberRepository.save(member);

        List<Member> list = memberRepository.findAll();
        System.out.println("list = " + list);
        
    }
}