import './Create.css'

export default function Create() {

  return (
    <div className="R">
    <div className="Create">
    <div className="SE">
        <div className="start">
        <div className="S">시작</div><br/>
        <div className="startT"> 09:00 </div>
        </div>        
        <div className="end">
        <div className="E">끝</div><br/>
        <div className="endT"> 18:00 </div>
        </div>
        <div class="made">만들기</div>
    </div>
        


    </div>
    <div className="Save">
    <div class="box">
  <table class="time">
    <thead>
      <tr><th colspan="4">오전</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>1/7<br/>9:00</td>
        <td>1/7<br/>10:00</td>
        <td>1/7<br/>11:00</td>
        <td>1/7<br/>12:00</td>
      </tr>
    </tbody>
  </table>
  <table class="time">
    <thead>
      <tr><th colspan="4">오후</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>1/7<br/>14:00</td>
        <td>1/7<br/>15:00</td>
        <td>1/7<br/>16:00</td>
        <td>1/7<br/>17:00</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="save">저장</div>
    </div>
    </div>
  );

}