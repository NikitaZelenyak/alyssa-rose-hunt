"use client";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import AboutSection from "./components/AboutSection";
import { VideoGalley } from "./components/VideoGallery";
export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <AboutSection />
        <VideoGalley />
      </main>
    </>
  );
}
