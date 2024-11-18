import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricings from "./components/Pricings";
import Footer from "./components/Footer";
import Steps from "./components/Steps";
import Form from "./components/Form";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Pricings />
      <Steps />
      <Form />
      <Footer />
    </div>
  );
}
