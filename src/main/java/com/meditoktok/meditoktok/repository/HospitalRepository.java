package com.meditoktok.meditoktok.repository;

import com.meditoktok.meditoktok.domain.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HospitalRepository extends JpaRepository<Hospital,Integer> {
    Hospital findByHospName(int id);
}
