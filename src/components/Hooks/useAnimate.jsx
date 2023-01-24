import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion/dist/framer-motion";

const useAnimate = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 2,
        },
      });
    } else {
      animation.start({
        opacity: 0,
      });
    }
  }, [inView]);
  return { ref, animation };
};

export default useAnimate;
