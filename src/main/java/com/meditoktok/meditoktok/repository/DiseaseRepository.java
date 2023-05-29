package com.meditoktok.meditoktok.repository;

import com.meditoktok.meditoktok.domain.Disease;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiseaseRepository extends JpaRepository<Disease, Long> {
}
