import styles from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow relative overflow-hidden`}>
    {/* Animated Background Elements */}
    <motion.div 
      className="absolute inset-0 opacity-20"
      animate={{
        background: [
          "radial-gradient(circle at 10% 20%, rgba(79, 149, 218, 0.1) 0%, transparent 20%)",
          "radial-gradient(circle at 90% 80%, rgba(92, 164, 234, 0.1) 0%, transparent 20%)",
          "radial-gradient(circle at 10% 20%, rgba(79, 149, 218, 0.1) 0%, transparent 20%)"
        ]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    {/* Floating Particles */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() * 20 - 10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "easeInOut"
        }}
      />
    ))}

    {/* Content with Animations */}
    <motion.div 
      className="flex-1 flex flex-col relative z-10"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2 
        className={styles.heading2}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Let’s try our service now!
      </motion.h2>
      
      <motion.p 
        className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </motion.p>
    </motion.div>

    <motion.div 
      className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 relative z-10`}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    >
      <motion.div
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <Button />
      </motion.div>
    </motion.div>
  </section>
);

export default CTA;