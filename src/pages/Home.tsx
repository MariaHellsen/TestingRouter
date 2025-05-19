import { Header } from "../components/Header";
import { Footer } from "./Footer";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <h1 className="home">Home</h1>
      <Footer />
    </>
  );
};
