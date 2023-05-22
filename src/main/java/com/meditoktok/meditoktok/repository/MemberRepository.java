package com.meditoktok.meditoktok.repository;

import com.meditoktok.meditoktok.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByAccountAndPw(String account, String pw);
}
