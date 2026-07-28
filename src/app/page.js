import Navbar from "@/components/shared/Navbar/Navbar";
import Image from "next/image";
import Footer from "../components/shared/Footer/Footer";
import Testimonials from "@/components/home/Testimonials";
import ReadyToPlay from "@/components/home/ReadyToPlay";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Testimonials />
      <ReadyToPlay/>
      <Footer/>
    </div>
  );
}
