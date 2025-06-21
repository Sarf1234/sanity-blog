
import dynamic from "next/dynamic";
import FeaturedPostCard from "@/components/pages/FeaturedPostCard";
import WebsiteBanner from "@/components/pages/WebsiteBanner";

// Dynamically import non-critical below-the-fold components
const AllBlogsList = dynamic(() => import("@/components/pages/AllBlogsList"));
const QuoteCarousel = dynamic(() => import("@/components/pages/QuoteCarousel"));
const JobCategories = dynamic(() => import("@/components/pages/JobCategories"));

export default function Home() {
  return (
    <>
      <WebsiteBanner />
      <FeaturedPostCard />
      <AllBlogsList />
      <QuoteCarousel />
      <JobCategories />
    </>
  );
}
