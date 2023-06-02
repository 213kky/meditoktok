package com.meditoktok.meditoktok.repository;

import com.meditoktok.meditoktok.domain.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Long> {
//    Hospital findByHospName(int id);
      Hospital findByYkiho(String ykiho);
}

