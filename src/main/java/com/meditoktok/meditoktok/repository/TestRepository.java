package com.meditoktok.meditoktok.repository;

import com.meditoktok.meditoktok.domain.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

@Repository
public interface TestRepository extends JpaRepository<Test, Long> {
}
