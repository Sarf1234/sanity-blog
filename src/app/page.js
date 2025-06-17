import AllBlogsList from "@/components/pages/AllBlogsList";
import FeaturedJobsCarousel from "@/components/pages/FeaturedJobsCarousel";
import Footer from "@/components/pages/Footer";
import JobCategories from "@/components/pages/JobCategories";
import Navbar from "@/components/pages/Navbar";
import WebsiteBanner from "@/components/pages/WebsiteBanner";


export default function Home() {
  return (
    <>
      <div className="relative h-[6rem]">
        <Navbar />
      </div>
      <WebsiteBanner />
      <FeaturedJobsCarousel />
      <AllBlogsList />
      <FeaturedJobsCarousel />
      <Footer />
    </>
  );
}
