import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const HeroSlider = () => {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        stopOnHover={true}
        showArrows={false}
        interval={3000}
      >
        {[1, 2, 3, 4, 5].map((item, el) => {
          return (
            <div key={el}>
              <Image
                width={10500}
                height={6040}
                src={`/slider/slide-${item}.jpg`}
                alt="Slider"
                background-size="contain"
                loading="lazy"
              />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default HeroSlider;
