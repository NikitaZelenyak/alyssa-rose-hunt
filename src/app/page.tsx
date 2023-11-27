"use client";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import AboutSection from "./components/AboutSection";
import { VideoGallery } from "./components/VideoGallery";
import Products from "./components/Products";
import ShopSection from "./components/ShopSection";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <AboutSection />
        <VideoGallery />
        <Products />
        <ShopSection />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
