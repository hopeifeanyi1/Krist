import Image from "next/image";
import Banner from "@/components/sections/Banner";
import Section2 from "@/components/sections/Section2";
import Section3 from "@/components/sections/Section3";
import Section4 from "@/components/sections/Section4";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main  >
      <Banner/>
      <Section2/>
      <Section3/>
      <Section4/>
    </main>
  );
}
