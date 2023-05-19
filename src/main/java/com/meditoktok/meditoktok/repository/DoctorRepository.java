package com.meditoktok.meditoktok.repository;

import com.meditoktok.meditoktok.domain.Admin;
import com.meditoktok.meditoktok.domain.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
}
