import Create from "../component/Create";
import {useCookies} from "react-cookie";
function Page2({originData}) {
  const [cookies] = useCookies(['memberInfo']);
  const cookieValue = cookies['memberInfo'];
  return (
    <section className="contents">
    <Create originData={originData}/>
    </section>
  );
}

export default Page2;