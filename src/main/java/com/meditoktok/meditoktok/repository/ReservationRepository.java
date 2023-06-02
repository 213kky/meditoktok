package com.meditoktok.meditoktok.repository;

import com.meditoktok.meditoktok.domain.Reservation;
import com.meditoktok.meditoktok.domain.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    List<Reservation> findByUserId(Long userId);

    @Query(value = "SELECT * FROM reservations WHERE reservation_date LIKE CONCAT('%', :value, '%')", nativeQuery = true)
    List<Reservation> findByReservationDateLike(@Param("value") String value);


}
