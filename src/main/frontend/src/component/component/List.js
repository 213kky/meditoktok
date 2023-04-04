import './List.css'

export default function List() {
  return (
    <tr>
    <div className='T'>
    <td className='name'>이름</td>
    <td className='line'> | </td>
    <td className='num'>전화번호</td>
    <td className='line'> | </td>
    <td className='not'>특이사항</td>
    </div>
    </tr>
  );
  }