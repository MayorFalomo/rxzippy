import HeaderTexts from "@/components/texts/HeaderTexts";
import Texts from "@/components/texts/Texts";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import vanVector from "@/assets/vanVector.webp";
import { Testimonials } from "@/types/types";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import type { EventObject } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Testimonies } from ".";
import FadeIn from "@/Animation/FadeIn";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Testimony = () => {
  const carouselRef = useRef<AliceCarousel | null>(null);

  const [testimonials] = useState<Testimonials[]>(Testimonies);

  const responsive = {
    0: { items: 1 },
    900: { items: 2 },
    1300: { items: 3 },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createItems = ([handleClick]: any) => {
    let deltaX = 0;
    let difference = 0;
    const swipeDelta = 20;

    return testimonials.map((testimonial, i) => (
      <div
        data-value={i + 1}
        onMouseDown={(e) => (deltaX = e.pageX)}
        onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
        onClick={() => difference < swipeDelta && handleClick(i)}
        key={testimonial.id}
        className="w-[400px] max-[500px]:w-[90%] h-[350px] mt-4 flex flex-col justify-center mx-auto items-center drop-shadow-md pb-2 bg-[#fff]"
      >
        <div className="w-[82%] max-[600px]:w-[90%] h-[80%] max-[600px]:h-[90%] m-auto ">
          <div className="flex items-start space-x-2">
            <div className="w-[25px]">
              <img
                className="w-full h-full rounded-full"
                src={testimonial.img}
                alt="img"
              />{" "}
            </div>
            <div className="flex flex-col justify-start">
              <Texts className="" font="font-plusJarkataSans" weight="bold">
                {testimonial.name}{" "}
              </Texts>
              <Texts className=" text-[12px] mt-1 font-inter">
                {testimonial.position}{" "}
              </Texts>
            </div>
          </div>
          <p className="flex items-center gap-[2px] my-3">
            <span>{<StarFilledIcon style={{ color: "#FFAC33" }} />} </span>
            <span>{<StarFilledIcon style={{ color: "#FFAC33" }} />} </span>
            <span>{<StarFilledIcon style={{ color: "#FFAC33" }} />} </span>
            <span>{<StarFilledIcon style={{ color: "#FFAC33" }} />} </span>
            <span>{<StarFilledIcon style={{ color: "#FFAC33" }} />} </span>
          </p>
          <HeaderTexts className="mb-2" primary={false} font="font-inter">
            {testimonial.header}{" "}
          </HeaderTexts>
          <Texts size="sm">{testimonial.textsOne} </Texts>
          <Texts className="mt-[10px]" size="sm">
            {testimonial.textsTwo}{" "}
          </Texts>
        </div>
      </div>
    ));
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [items] = useState(createItems([setActiveIndex]));

  const slidePrev = () => carouselRef.current?.slidePrev();

  const slideNext = () => {
    carouselRef.current?.slideNext();
  };

  const syncActiveIndexForSwipeGestures = (e: EventObject) =>
    setActiveIndex(e.item);

  const onSlideChanged = (e: EventObject) => {
    syncActiveIndexForSwipeGestures(e);
    console.debug(
      `onSlideChanged => Item's position after changes: ${e.item}. Event:`,
      e
    );
  };

  const onUpdated = (e: EventObject) => {
    console.debug(
      `onUpdated => Item's position after update: ${e.item}. Event:`,
      e
    );
  };

  const [ref, inView] = useInView({
    threshold: 0.4,
    // triggerOnce: true,
  });

  const [refOne, inViewOne] = useInView({
    threshold: 0.2,
    // triggerOnce: true,
  });

  return (
    <div
      style={{
        backgroundImage: `url(${vanVector})`,
        backgroundRepeat: "no-repeat",
      }}
      className=" bg-faded bg-center White h-[90vh]"
    >
      <div className="flex flex-col items-center justify-between m-auto h-full">
        <div className="flex items-center w-[85%] max-[500px]:w-[95%] m-auto mb-4 justify-between ">
          <div
            ref={(el) => {
              ref(el);
              refOne(el);
            }}
          >
            <HeaderTexts
              border={true}
              className="w-[130px] text-[30px] max-[600px]:text-[24px]"
              primary={true}
            >
              What Our Clients Say{" "}
            </HeaderTexts>
            <motion.p
              initial={{ width: 0 }}
              animate={{ width: inView ? 240 : 0 }}
              className="bg-primary h-[3px] w-[120px] transition-all ease-out duration-300"
            >
              {" "}
            </motion.p>
            <Texts
              font="font-hkGrotesk"
              size="md"
              className=" text-[#575555] mt-2 w-[300px] max-[400px]:w-[90%]  max-[480px]:text-[14px]"
              variant="body"
              color="primary"
            >
              <FadeIn inView={inViewOne}>
                Hear from those who have experienced the Nettoyer difference:{" "}
              </FadeIn>
            </Texts>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={slidePrev}
              className="rounded-full p-2 text-[28px] max-[480px]:text-[22px] drop-shadow-md bg-black text-secondary"
            >
              {<TiArrowLeft />}{" "}
            </button>
            <button
              onClick={slideNext}
              className="rounded-full p-2 text-[28px] max-[480px]:text-[22px] drop-shadow-md bg-bgPrimary text-primary"
            >
              {<TiArrowRight />}{" "}
            </button>
          </div>
        </div>
        <div className="w-[90%] max-[400px]:w-[100%] h-[70%] flex items-center justify-center ">
          <AliceCarousel
            ref={carouselRef}
            mouseTracking
            disableDotsControls
            disableButtonsControls
            items={items}
            activeIndex={activeIndex}
            responsive={responsive}
            onSlideChanged={onSlideChanged}
            onUpdated={onUpdated}
            infinite
          />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
