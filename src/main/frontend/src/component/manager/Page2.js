import Create from "../component/Create";
import {useCookies} from "react-cookie";
function Page2() {
  const [cookies] = useCookies(['memberInfo']);
  const cookieValue = cookies['memberInfo'];
  return (
    <section className="contents">
    <Create/>
    </section>
  );
}

export default Page2;