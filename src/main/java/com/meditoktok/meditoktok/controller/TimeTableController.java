package com.meditoktok.meditoktok.controller;

import com.meditoktok.meditoktok.domain.TimeTable;
import com.meditoktok.meditoktok.service.TimeTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class TimeTableController {
    @Autowired
    private TimeTableService timetableService;

    @PostMapping("/test/createtime")
    public String timeSetting(@RequestBody TimeTable timetable) {
//        timetable.getDoctorId()
        timetableService.createTimetable(timetable);
        return timetable.getDate() + " " + timetable.getTimeId() /*convert(timetable.getTimeId())*//* 나중에 의사이름받아서 대체*/ + "일정이 생성되었습니다";
    }

//    @PostMapping("/test/checkDoctorSchedule")
//    public List<TimeTable> getAllTimetablesByDoctorId(@RequestParam Long id) {
//        List<TimeTable> tables = timetableService.getAllTimetablesByDoctorId(id);
//        return tables;
//    }


    @PostMapping("/api/treservation")
    public ResponseEntity<String> processReservation(@RequestBody List<Map<String, String>> reservationData) {
        try {
            List<TimeTable> doctorTimeTables = new ArrayList<>();
            System.out.println("reservationData: " + reservationData);
            System.out.println("reservationData.get(0)" + reservationData.get(0).get("doctorId"));
            Long doctorId = Long.parseLong(reservationData.get(0).get("doctorId"));
            String date = reservationData.get(0).get("date");
//            for (Map<String, String> data : reservationData) {
            for (int i = 1; i < reservationData.size(); i++) {
                Map<String, String> data = reservationData.get(i);
                String timeString = data.get("time");
//                System.out.println(timeString);
                String countString = data.get("count");
//                System.out.println("timeString, countString :" + timeString +"," +  countString);
                LocalTime time = LocalTime.parse(timeString, DateTimeFormatter.ofPattern("a hh:mm"));
                Long count = Long.parseLong(countString);
//                System.out.println("time, count : " + time +","+ count);
                TimeTable doctorTimeTable = new TimeTable(time.toString(), count);
                doctorTimeTable.setDoctorId(doctorId);
                doctorTimeTable.setDate(date);
                doctorTimeTables.add(doctorTimeTable);
            }

            System.out.println("doctorTimeTables: " + doctorTimeTables);
            // 스프링에서 필요한 처리 수행
            // ...
            timetableService.createTimetables(doctorTimeTables);


            return ResponseEntity.ok("Reservation data received successfully.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Invalid reservation data format.");
        }
    }
    @PostMapping("/checkReservation")
    public ResponseEntity<List<TimeTable>> checkReservation(@RequestBody TimeTableDto dto) {
        try {
            List<TimeTable> list = timetableService.getAllTimetablesByDoctorIdAndTimeId(dto.getDoctorId(), dto.getTimeId());
            return ResponseEntity.ok(list);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
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
