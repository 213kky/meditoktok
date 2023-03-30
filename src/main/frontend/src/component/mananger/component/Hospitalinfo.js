import './Hospitalinfo.css'

export default function Hospitalinfo() {

    return (
      <section class="contents">
      <div class="hospital">병원 이름</div>
      <div class="hospitalInfoBox">
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
          <span>병원URL</span>
          <div></div>
      </div>
      <div class="Notice">
      <span>공지사항</span><br/>
      <div></div>
      </div>
      </section>
    );
  }