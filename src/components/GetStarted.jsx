// GetStarted.jsx
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <button
    className="group relative w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] cursor-pointer rounded-full
               transition-transform duration-300 hover:scale-105 focus:outline-none"
    aria-label="Get started"
  >
    {/* animated rainbow ring */}
    <span
      aria-hidden
      className="absolute inset-0 rounded-full
                 bg-rainbow
                 opacity-0 group-hover:opacity-100
                 transition-opacity duration-500"
    />

    {/* inner gradient circle */}
    <div
      className={`${styles.flexCenter} absolute inset-[2px] rounded-full
                  bg-blue-gradient`}
    />

    {/* inner dark circle with text */}
    <div
      className={`${styles.flexCenter} absolute inset-[2px] flex-col
                  bg-primary rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow-up"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </button>
);

export default GetStarted;