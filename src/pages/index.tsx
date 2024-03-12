import Image from "next/image";
import { Inter } from "next/font/google";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "@/components/CarouselItem";
import IconsGrid from "@/components/IconsGrid";
import ImageCard from "@/components/ImageCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <main className="">
      <Carousel responsive={responsive}
        className="max-w-6xl mx-auto">
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
      <h1 className=" text-green-500 text-lg font-bold text-center py-5">Plusy</h1>
      <IconsGrid/>
      <ImageCard image="https://picsum.photos/544/535" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in justo et justo sodales tincidunt eu eget lacus. Morbi eleifend dui ac dui eleifend, aliquam volutpat sapien ullamcorper. Sed vel aliquam massa, ut dapibus mi. Aliquam erat volutpat. Aliquam interdum dui dolor, vel ornare ligula vehicula eget. Suspendisse et libero sodales, dictum nisl quis, convallis tortor. Aliquam sit amet enim a mi dapibus consequat sit amet et elit. Nam pretium, ex ac auctor elementum, eros diam vehicula lorem, in gravida orci metus a urna."/>
    </main>

  );
}
