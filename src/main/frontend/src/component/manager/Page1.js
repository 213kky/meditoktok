import Hospitalinfo from "../component/Hospitalinfo";

function Page1(props) {
  return (
    <section className="contents">
      <Hospitalinfo setHospName={props.setHospName}/>
    </section>

  );
}

export default Page1;