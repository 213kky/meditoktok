package com.meditoktok.meditoktok.repository;

import com.meditoktok.meditoktok.domain.Admin;
import com.meditoktok.meditoktok.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    Admin findByAccountAndPw(String account, String pw);

    Admin findByAccount(String account);

    Admin findByNameAndBirthAndEmail(String name, String birth, String email);
}
