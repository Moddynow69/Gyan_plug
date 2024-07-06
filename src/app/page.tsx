import LogoCarousel from "@/components/Carousels/LogoCarousel/LogoCarousel";
import StoriesCarousel from "@/components/Carousels/StoriesCarousel/StoriesCarousel";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Home from "./_sections/Home/Home";

export default function HomePage() {
  return (
    <div className="h-auto w-screen flex flex-col bg-white">
      <Home />
    </div>
  );
}
