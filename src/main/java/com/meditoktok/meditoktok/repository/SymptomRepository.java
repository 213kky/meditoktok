package com.meditoktok.meditoktok.repository;

import com.meditoktok.meditoktok.domain.Symptom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SymptomRepository extends JpaRepository<Symptom, Long> {

    List<Symptom> findByBodyPart(String bodyPart);
}