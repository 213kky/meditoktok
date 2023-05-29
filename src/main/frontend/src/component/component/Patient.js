import './Patient.css'
import List from './List.js'
import Calendar1 from "../component/Calendar1";

export default function Patient({selectedDoctor}) {

  return (
    <div>
    <div className="Cal">
      <div className='Cd'><Calendar1 selectedDoctor={selectedDoctor}/></div>
    </div>

    <div className='List'>
    <caption className='number'>3/7</caption>
    <table className='list'> 
      <List name="김광연" tel="010-1234-5678" txt="지속적인 두통"/>
      <List name="김승민" tel="010-4557-1253" txt="없음"/>
      <List name="전정원" tel="010-3563-2146" txt="잔기침"/>
    </table>

    </div>
    </div>
  )
}