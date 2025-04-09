// File: /src/app/page.tsx
// Sections
import OnlyLatest from "@/components/Blog/onlyLatest";

// import Brands from "@/components/Brands";
// import ScrollUp from "@/components/Common/ScrollUp";
// import Features from "@/components/Features";
// import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Testimonials from "~/components/splash/old-testimonial-idex.vue";
import Video from "@/components/Video";
import { Metadata } from "next";

// Custom
import Answer from "@/components/Answer";
import Join from "@/components/Join";
import Calendar from "@/components/Calendar";

export const metadata: Metadata = {
  title: "Save the Grove, Again",
  description: "Arnprior Community Initiative",
  // other metadata
};

export default function Home() {
  return (
    <>
      {/* <ScrollUp /> */}
      <Hero />
      <Answer />
      <Video />
      <Calendar />
      <OnlyLatest />
      <Join />
      <Testimonials />
    </>
  );
}
