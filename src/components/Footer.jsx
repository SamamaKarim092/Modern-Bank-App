import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { motion } from "framer-motion";

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col relative overflow-hidden`}
  >
    {/* Animated Background Elements */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>

    <motion.div
      className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full relative z-10`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo and Description Section */}
      <motion.div
        className="flex-[1] flex flex-col justify-start mr-10"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          transitionHover={{ duration: 0.2 }}
        />
        <motion.p
          className={`${styles.paragraph} mt-4 max-w-[312px] text-gray-300`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          A new way to make the payments easy, reliable and secure.
        </motion.p>
      </motion.div>

      {/* Footer Links Section */}
      <motion.div
        className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 text-gray-300"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {footerLinks.map((footerlink, index) => (
          <motion.div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            <motion.h4
              className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              {footerlink.title}
            </motion.h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, linkIndex) => (
                <motion.li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    linkIndex !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.6 + index * 0.1 + linkIndex * 0.05,
                  }}
                  whileHover={{ x: 5 }}
                  transitionHover={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>

    {/* Bottom Section with Copyright and Social Media */}
    <motion.div
      className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] relative z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <motion.p
        className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        Copyright Ⓒ 2025 HooBank. All Rights Reserved.
      </motion.p>

      <motion.div
        className="flex flex-row md:mt-0 mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.1 }}
        style={{ pointerEvents: "auto" }}
      >
        {socialMedia.map((social, index) => (
          <motion.img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link, "_blank", "noopener")}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
            whileHover={{ y: -5, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transitionHover={{ duration: 0.2 }}
            style={{ pointerEvents: "auto" }}
          />
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default Footer;
