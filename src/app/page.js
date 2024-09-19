import Image from "next/image";
import styles from "./page.module.css";

import Navigation from "./components/HomePage/header";
import HomeBody from "./components/HomePage/home_body/home_body";

export default function Home() {
  return (
    <div>
      <Navigation/>
      <HomeBody/>
    </div>
  );
}
