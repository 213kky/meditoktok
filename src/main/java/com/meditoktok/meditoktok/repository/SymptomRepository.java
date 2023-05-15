package com.meditoktok.meditoktok.repository;

import com.meditoktok.meditoktok.domain.Symptom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SymptomRepository extends JpaRepository<Symptom, Long> {
    // 기타 메소드 추가 가능
}
