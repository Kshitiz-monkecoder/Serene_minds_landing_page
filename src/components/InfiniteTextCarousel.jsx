import { useRef } from "react";

const InfiniteTextCarousel = () => {
  const carouselRef = useRef(null);

  // Array with different texts
  const texts = [
    "Normalise Therapy!",
    "Normalise Seeking Help",
    "Normalise Mental Problems"
  ];

  return (
    <div className="relative overflow-hidden bg-gray-200">
      <div
        ref={carouselRef}
        className="flex whitespace-nowrap items-center animate-scroll"
        style={{ width: "100%" }} // Ensures the container stretches fully
      >
        {/* Repeat the text array multiple times for the infinite loop effect */}
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <span
              key={index}
              className="text-4xl font-extralight text-gray-800 mx-6 my-12 font-garamond"
            >
              {texts[index % texts.length]} {/* Use modulo to loop through texts */}
            </span>
          ))}

        {/* Duplicate the text to ensure seamless scroll */}
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <span
              key={index + 10} // Offset for the second batch of text
              className="text-4xl font-extralight text-gray-600 mx-6 my-12 font-garamond"
            >
              {texts[index % texts.length]} {/* Use modulo to loop through texts */}
            </span>
          ))}
      </div>
    </div>
  );
};

export default InfiniteTextCarousel;
