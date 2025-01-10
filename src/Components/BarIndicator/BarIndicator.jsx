import { motion, useScroll } from "framer-motion";

const BarIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "7px",
        backgroundColor: "#DA498D",
        scaleX: scrollYProgress,
        originX: 0,
        zIndex: 1000,
      }}
    />
  );
};

export default BarIndicator;
