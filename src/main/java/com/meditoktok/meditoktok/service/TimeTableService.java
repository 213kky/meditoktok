package com.meditoktok.meditoktok.service;

import com.meditoktok.meditoktok.domain.TimeTable;
import com.meditoktok.meditoktok.repository.TimeTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class TimeTableService {
    @Autowired
    private TimeTableRepository timetableRepository;

    public TimeTable createTimetable(TimeTable timetable) {
        return timetableRepository.save(timetable);
    }

    public List<TimeTable> createTimetables(List<TimeTable> timetables) {
        List<TimeTable> savedTimetables = new ArrayList<>();
        for (TimeTable timetable : timetables) {
            TimeTable savedTimetable = timetableRepository.save(timetable);
            savedTimetables.add(savedTimetable);
        }
        return savedTimetables;
    }

    public TimeTable getTimetableById(Long id) {
        return timetableRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("해당 Timetable을 찾을 수 없습니다."));
    }

    public List<TimeTable> getAllTimetables() {
        return timetableRepository.findAll();
    }

    public List<TimeTable> getAllTimetablesByDoctorId(Long doctorId) {
        List<TimeTable> timetables = timetableRepository.findByDoctorId(doctorId);
        if (timetables.isEmpty()) {
            throw new NoSuchElementException("해당 의사의 시간표가 없습니다."); // 예외를 던져서 상위로 전달합니다.
        }

        return timetables;
    }

    public TimeTable updateTimetable(TimeTable timetable) {
        return timetableRepository.save(timetable);
    }

    public void deleteTimetable(Long id) {
        timetableRepository.deleteById(id);
    }
}
