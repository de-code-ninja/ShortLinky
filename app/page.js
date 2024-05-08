
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Url from "@/components/url";
import Features from "@/components/Features";
import Footer from "@/components/footer";


export default function Home() {
  // useEffect(() => {
  //   async function requestSend() {
  //     const response = await fetch("/api/redirect/gg");
     
  //   }
  //   requestSend();
  // }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Url />
      <Features />
      <Footer />
    </div>
  );
}
