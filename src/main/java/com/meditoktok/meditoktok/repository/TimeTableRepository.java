package com.meditoktok.meditoktok.repository;

import com.meditoktok.meditoktok.domain.TimeTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TimeTableRepository extends JpaRepository<TimeTable, Long> {
    List<TimeTable> findByDoctorIdAndTimeId(Long id, String time);
}
