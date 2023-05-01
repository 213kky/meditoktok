package com.meditoktok.meditoktok.service;

import com.meditoktok.meditoktok.domain.Reservation;
import com.meditoktok.meditoktok.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    // 1. 새로운 예약 생성(저장)
    public Reservation createReservation(Reservation reservation) {
        // 본격적인 예약 생성 전, validation 과정 필요
        if (reservation.getReservationDate() == null || reservation.getPatientName() == null || reservation.getDepartment() == null || reservation.getMedicalStaffName() == null ||
                reservation.getBirth() == null || reservation.getGender() == null) {
            throw new IllegalArgumentException("예약 정보가 올바르지 않습니다.");
        }
        return reservationRepository.save(reservation);
    }

    // 2. 예약 조회
    public Reservation getReservationById(Long id) {
        return reservationRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("해당 예약이 존재하지 않습니다."));
    }

    // user pk값으로 예약 조회
    public List<Reservation> getReservationsByUserId(Long userId) {
        List<Reservation> reservations = (List<Reservation>) reservationRepository.findByUserId(userId);
        if (reservations == null || reservations.isEmpty()) {
            throw new RuntimeException("입력한 user id의 결과값이 없습니다: " + userId);
        }
        return reservations;
    }

    // 3. 모든 예약 조회
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    // 4. 예약 업데이트(수정)
    public Reservation updateReservation(Long id, Reservation reservation) {
        Reservation updatedReservation = reservationRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("해당 예약이 존재하지 않습니다."));

        // 업데이트할 예약 정보가 있는 경우에만 업데이트 진행
        if (reservation.getReservationDate() != updatedReservation.getReservationDate()) {
            updatedReservation.setReservationDate(reservation.getReservationDate());
        }
//        if (reservation.getPatientName() != null) {
//            updatedReservation.setPatientName(reservation.getPatientName());
//        }
//        if (reservation.getDepartment() != updatedReservation.getDepartment()) {
//            updatedReservation.setDepartment(reservation.getDepartment());
//        }
        if (reservation.getMedicalStaffName() != updatedReservation.getMedicalStaffName()) {
            updatedReservation.setMedicalStaffName(reservation.getMedicalStaffName());
        }
//        if (reservation.getPhoneNumber() != null) {
//            updatedReservation.setPhoneNumber(reservation.getPhoneNumber());
//        }
//        if (reservation.getAddress() != null) {
//            updatedReservation.setAddress(reservation.getAddress());
//        }
//        if (reservation.getBirth() != null) {
//            updatedReservation.setBirth(reservation.getBirth());
//        }
//        if (reservation.getGender() != null) {
//            updatedReservation.setGender(reservation.getGender());
//        }
        if (reservation.getNotes() != updatedReservation.getNotes()) {
            updatedReservation.setNotes(reservation.getNotes());
        }

        return reservationRepository.save(updatedReservation);
    }

    // 5. 예약 삭제
    public void deleteReservation(Long id) {
        if (!reservationRepository.existsById(id)) {
            throw new NoSuchElementException("해당 예약이 존재하지 않습니다.");
        }
        reservationRepository.deleteById(id);
    }

}
