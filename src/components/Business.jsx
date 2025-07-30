import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div 
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card text-gray-300`}
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ 
      y: -5,
      transition: { duration: 0.2 }
    }}
  >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <motion.img 
        src={icon} 
        alt="star" 
        className="w-[50%] h-[50%] object-contain"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          type: "spring", 
          stiffness: 300,
          delay: index * 0.1 + 0.2
        }}
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <motion.h4 
        className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        {title}
      </motion.h4>
      <motion.p 
        className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.4 }}
      >
        {content}
      </motion.p>
    </div>
  </motion.div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <motion.div 
      className={layout.sectionInfo}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className={styles.heading2}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </motion.h2>
      <motion.p 
        className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <Button styles={`mt-10`} />
      </motion.div>
    </motion.div>

    <motion.div 
      className={`${layout.sectionImg} flex-col`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </motion.div>
  </section>
);

export default Business;