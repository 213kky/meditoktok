package com.meditoktok.meditoktok.repository;

import com.meditoktok.meditoktok.domain.Admin;
import com.meditoktok.meditoktok.domain.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    List<Doctor> findByHospiId(Long hospiId);
}
