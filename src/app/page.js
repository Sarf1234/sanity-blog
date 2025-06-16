import FeaturedJobsCarousel from "@/components/pages/FeaturedJobsCarousel";
import Footer from "@/components/pages/Footer";
import JobCategories from "@/components/pages/JobCategories";
import Navbar from "@/components/pages/Navbar";


export default function Home() {
  return (
    <>
              <div className="relative h-12">
                <Navbar />
              </div>
     <FeaturedJobsCarousel />
     <JobCategories />
     <FeaturedJobsCarousel />
               <Footer />
    </>
  );
}
