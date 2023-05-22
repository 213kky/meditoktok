package com.meditoktok.meditoktok.controller;

import com.meditoktok.meditoktok.domain.TimeTable;
import com.meditoktok.meditoktok.service.TimeTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TimeTableController {
    @Autowired
    private TimeTableService timetableService;

    @PostMapping("/test/createtime")
    public String timeSetting(@RequestBody TimeTable timetable) {
//        timetable.getDoctorId()
        timetableService.createTimetable(timetable);
        return timetable.getDate() + " " + convert(timetable.getTimeId())/* 나중에 의사이름받아서 대체*/ + "일정이 생성되었습니다";
    }

    @PostMapping("/test/checkDoctorSchedule")
    public List<TimeTable> getAllTimetablesByDoctorId(@RequestParam Long id) {
        List<TimeTable> tables = timetableService.getAllTimetablesByDoctorId(id);
        return tables;
    }












    public String convert(Long a) {

        int hours = 9;
        String minutes;
        if (a % 2 == 1) {
            minutes = "00";
        } else {
            minutes = "30";
        }
        for (Long i = a; i > 2; i = i - 2) {
            hours += 1;
        }
        String time = hours + ":" + minutes;
        return time;
    }
}
