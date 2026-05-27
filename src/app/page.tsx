import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WorkExperienceSection } from "@/components/WorkExperienceSection";
import { PostsSection } from "@/components/PostsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "36px 36px 0",
        }}
      >
        <HeroSection />
        <WorkExperienceSection />
        <PostsSection />
        <Footer />
      </div>
    </>
  );
}
