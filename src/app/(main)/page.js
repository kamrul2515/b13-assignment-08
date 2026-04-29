import { Suspense } from "react";
import Banner from "../components/Banner";
import Tiles from "../components/Tiles";
import LoadingPage from "../loading";
import Footer from "../components/shared/Footer";
import 'animate.css';

export default function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<LoadingPage />}>
        <Tiles />
      </Suspense>
    </div>
  );
}
