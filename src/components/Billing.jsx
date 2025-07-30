import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    {/* Image Section with Animations */}
    <motion.div 
      className={layout.sectionImgReverse}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.img 
        src={bill} 
        alt="billing" 
        className="w-[100%] h-[100%] relative z-[5]"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Animated Gradients */}
      <motion.div 
        className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      <motion.div 
        className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      />
    </motion.div>

    {/* Content Section with Animations */}
    <motion.div 
      className={layout.sectionInfo}
      initial={{ opacity: 0, x: 50 }}
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
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </motion.h2>
      
      <motion.p 
        className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </motion.p>

      {/* App Store Buttons with Hover Effects */}
      <motion.div 
        className="flex flex-row flex-wrap sm:mt-10 mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.img 
          src={apple} 
          alt="app_store" 
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          whileHover={{ y: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        />
        <motion.img 
          src={google} 
          alt="google_play" 
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          whileHover={{ y: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Billing;