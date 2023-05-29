import Dropdown from "../component/Dropdown";
import Patient from "../component/Patient";
import { useState, useEffect } from "react";

function Page3({originData}) {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  
  const handleDoctorSelect = (doctorName) => {
    setSelectedDoctor(doctorName);
  };

  useEffect(() => {
    console.log(selectedDoctor);
  }, [selectedDoctor]);

  return (
    <section className="contents">
      <Dropdown onSelect={handleDoctorSelect} originData={originData}/>
      <Patient selectedDoctor={selectedDoctor}/>
    </section>

  );
}

export default Page3;