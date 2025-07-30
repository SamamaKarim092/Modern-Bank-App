import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { motion } from "framer-motion";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative overflow-hidden`}>
    {/* Animated Background Elements */}
    <motion.div 
      className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 0.3, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

    {/* Floating particles for visual interest */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
        style={{
          left: `${20 + i * 15}%`,
          top: `${30 + i * 10}%`,
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3 + i,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeInOut"
        }}
      />
    ))}

    <motion.div 
      className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className={styles.heading2}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        What People are <br className="sm:block hidden" /> saying about us
      </motion.h2>
      
      <motion.div 
        className="w-full md:mt-0 mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className={`${styles.paragraph} text-left max-w-[450px] text-white`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </motion.div>
    </motion.div>

    {/* Animated Feedback Cards Container */}
    <motion.div 
      className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] gap-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {feedback.map((card, index) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: 0.1 * index,
            ease: "easeOut"
          }}
          whileHover={{ 
            y: -10,
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <FeedbackCard {...card} />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Testimonials;