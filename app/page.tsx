import AboutUs from "@/components/home/AboutUs";
import ContactUs from "@/components/home/ContactUs";
import Hero from "@/components/home/Hero";
import OurFeatures from "@/components/home/OurFeatures";
import OurPricing from "@/components/home/OurPricing";
import OurServices from "@/components/home/OurServices";
import { Testimonial } from "@/components/home/Testimonial";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />

      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <OurFeatures />

      <OurPricing />
      <Testimonial />
      <ContactUs />
    </>
  );
}
