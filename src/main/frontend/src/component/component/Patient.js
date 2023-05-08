import './Patient.css'
import List from './List.js'
import Calendar1 from "../component/Calendar1";

export default function Patient() {

  return (
    <div>
    <div className="Cal">
      <div className='Cd'><Calendar1/></div>
    </div>

    <div className='List'>
    <caption className='number'>2/7</caption>
    <table className='list'> 
      <List/>
      <List/>
      <List/>
    </table>

    </div>
    </div>
  )
}