import DoctorList from "./DoctorList";

export default function HospitalInformation() {
    return (
        <section class="contents">
            <div class="hospitalName">병원 이름</div>
            <div class="hospitalInfo">병원 정보</div>
            <div class="hospitalInfoBox">
                <span>공지사항</span>
                <div></div>
                <span>병원 URL</span>
                <div></div>
                <span>진료과목</span>
                <div></div>
                <span>의료진</span>
                <div></div>
                <span>운영시간</span>
                <div></div>
                <span>주소</span>
                <div></div>
                <span>전화번호</span>
                <div></div>
            </div>
            <ul class="doctorList">
                <DoctorList doctorName={"의사1"}/>
                <DoctorList doctorName={"의사2"}/>
                <DoctorList doctorName={"의사3"}/>
            </ul>
        </section>
    );
}