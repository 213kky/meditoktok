import './List.css'

export default function List({name, tel, txt}) {
  return (
    <tr>
    <div className='T'>
    <td className='name'>{name}</td>
    <td className='line'> | </td>
    <td className='num'>{tel}</td>
    <td className='line'> | </td>
    <td className='not'>{txt}</td>
    </div>
    </tr>
  );
  }