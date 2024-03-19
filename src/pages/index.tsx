import Image from "next/image";
import { Inter } from "next/font/google";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "@/components/CarouselItem";
import IconsGrid from "@/components/IconsGrid";
import ImageCard from "@/components/ImageCard";
import dynamic from 'next/dynamic'
import { NextSeo } from "next-seo";
const VideoCard = dynamic(() => import('../components/VideoCard'), {
  ssr: false,
})

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
      <NextSeo 
      title="stromy"
      description="160 znaku o strance"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        images: [
          {
            url: 'https://picsum.photos/800/600',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
          {
            url: 'https://picsum.photos/900/800',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
            type: 'image/jpeg',
          },
          { url: 'https://picsum.photos/800/600' },
          { url: 'https://picsum.photos/900/800' },
        ],
        siteName: 'SiteName',
      }}
      />
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
      <VideoCard url="https://www.youtube.com/watch?v=r3G4xeN4Q2c" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in justo et justo sodales tincidunt eu eget lacus. Morbi eleifend dui ac dui eleifend, aliquam volutpat sapien ullamcorper. Sed vel aliquam massa, ut dapibus mi. Aliquam erat volutpat. Aliquam interdum dui dolor, vel ornare ligula vehicula eget. Suspendisse et libero sodales, dictum nisl quis, convallis tortor. Aliquam sit amet enim a mi dapibus consequat sit amet et elit. Nam pretium, ex ac auctor elementum, eros diam vehicula lorem, in gravida orci metus a urna."/>
    </main>

  );
}
