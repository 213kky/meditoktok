import HospitalInfo from "../component/HospitalInfo";

function Page1(props) {
  return (
    <section className="contents">
      <HospitalInfo setHospName={props.setHospName}/>
    </section>

  );
}

export default Page1;