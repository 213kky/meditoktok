import './TableComponent.css';

export default function TableComponent() {

    return (
    <div>
    <table class="Ptime">
    <thead>
      <tr><th colspan="4">오전</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>1/7<br/>09:00</td>
        <td>1/7<br/>10:00</td>
        <td>1/7<br/>11:00</td>
        <td>1/7<br/>12:00</td>
      </tr>
    </tbody>
  </table>
  <table class="Ptime">
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
);

}