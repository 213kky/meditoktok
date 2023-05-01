package com.meditoktok.meditoktok.repository;

import com.meditoktok.meditoktok.domain.Reservation;
import com.meditoktok.meditoktok.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    List<Reservation> findByUserId(Long userId);


}
