package com.meditoktok.meditoktok.repository;

import com.meditoktok.meditoktok.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByAccountAndPw(String account, String pw);

    User findByAccount(String account);
}
