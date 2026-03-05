import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Narrative from "@/components/Narrative";
import Amenities from "@/components/Amenities";
import Journeys from "@/components/Journeys";
import Whispers from "@/components/Whispers";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <Journeys />
      <Narrative />
      <Amenities />
      <Whispers />
      <Newsletter />
      <Footer />
    </main>
  );
}
