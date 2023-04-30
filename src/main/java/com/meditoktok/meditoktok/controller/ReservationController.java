package com.meditoktok.meditoktok.controller;

import com.meditoktok.meditoktok.domain.Reservation;
import com.meditoktok.meditoktok.domain.User;
import com.meditoktok.meditoktok.service.ReservationService;
import com.meditoktok.meditoktok.service.UserService;
import com.mysql.cj.log.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReservationController {

    @Autowired
    ReservationService reservationService;
    @Autowired
    UserService userService;

    // 예약
    @PostMapping("/test/res")
    public String reservation(@RequestBody ResDto resDto) throws Exception {
        User user = userService.getUserById(resDto.getUserId());

//             Reservation 객체 생성 및 값 할당
        Reservation reservation = new Reservation();
        reservation.setUserId(resDto.getUserId());
        reservation.setBirth(user.getBirth());
//            reservation.setAddress(user.getAddress());
        reservation.setReservationDate(resDto.getReservationDate());
        reservation.setNotes(resDto.getNotes());
        reservation.setDepartment(resDto.getDepartment());
        reservation.setPhoneNumber(user.getPhoneNumber());
        reservation.setPatientName(user.getName());
        reservation.setMedicalStaffName(resDto.getMedicalStaffName());
        reservation.setHospiName(resDto.getHospName());
        reservation.setGender(user.getGender());
//             Reservation 객체 저장
        reservationService.createReservation(reservation);
        return reservation.getPatientName() + "님 예약이 완료되었습니다.";
    }

    //예약확인 유저가 예약한 모든 목록
    @PostMapping("/test/res/1")
    public List<Reservation> confirm(@RequestParam long id) {
        List<Reservation> res = reservationService.getReservationsByUserId(id);
        return res;
    }

    //수정 예약고유번호로
    @PostMapping("/test/res/2")
    public String change(@RequestBody ResChangeDto dto) {
        Reservation res = reservationService.getReservationById((long)dto.getId());
        res.setNotes(dto.getNotes());
        res.setMedicalStaffName(dto.getName());
        res.setReservationDate(dto.getDate());
        reservationService.updateReservation((long) dto.getId(), res);
        return res.getId() + " : 수정되었습니다.";
    }


    //예약 삭제  예약고유번호 사용
    @GetMapping("/test/res/3")
    public String delete(@RequestParam("id") long id) {
        reservationService.deleteReservation(id);
        return id + " : 삭제";
    }

}














