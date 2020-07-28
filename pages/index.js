import Link from "next/link";
import Header from "../components/Header";

const Home = (props) => (
  <div>
   <Header />

   
    <Link href="/yman">
      <a>Il Duca.</a>
    </Link>
  </div>
);

export default Home;
