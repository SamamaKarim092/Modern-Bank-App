import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const CardDeal = () => (
  <section className={layout.section}>
    {/* Content Section with Animations */}
    <motion.div 
      className={layout.sectionInfo}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2 
        className={styles.heading2}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </motion.h2>
      
      <motion.p 
        className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button styles={`mt-10`} />
      </motion.div>
    </motion.div>

    {/* Card Image Section with Enhanced Animations */}
    <motion.div 
      className={layout.sectionImg}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="relative w-full h-full"
        whileHover={{ 
          y: -10,
          transition: { duration: 0.3 }
        }}
      >
        {/* Floating animation for the card */}
        <motion.img 
          src={card} 
          alt="card deal" 
          className="w-[100%] h-[100%] relative z-10"
          initial={{ scale: 0.8, rotate: -5 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.03,
            rotate: 2,
            transition: { duration: 0.3 }
          }}
        />
        
        {/* Animated glow effect behind the card */}
        <motion.div
          className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-20 z-0"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-purple-500 opacity-10 blur-xl animate-pulse" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-blue-500 opacity-10 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
    </motion.div>
  </section>
);

export default CardDeal;