import Link from "next/link";
import Header from "../components/Header";

const Yman = (props) => (
  <div>
    <Header />

    <Link href="/">
      <a>To the memes.</a>
    </Link>
  </div>
);

export default Yman;
