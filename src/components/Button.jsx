import React from "react";

const Button = ({ styles, children = "Get Started" }) => (
  <div className="button-container">
    <div className="button-center">
      <button 
        type="button" 
        className={`
          relative
          py-4 px-6
          font-poppins font-medium text-[18px]
          text-primary
          bg-transparent
          border-none
          outline-none
          cursor-pointer
          w-[180px] h-[60px]
          transition-all duration-1000 ease-in-out
          ${styles}
        `}
      >
        <svg 
          width="180px" 
          height="60px" 
          viewBox="0 0 180 60" 
          className="absolute left-0 top-0 fill-none"
        >
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F95DA" />
              <stop offset="100%" stopColor="#5CA4EA" />
            </linearGradient>
          </defs>
          <polyline 
            points="179,1 179,59 1,59 1,1 179,1" 
            className="bg-line" 
            stroke="url(#blueGradient)"
            strokeWidth="1"
            fill="none"
          />
          <polyline 
            points="179,1 179,59 1,59 1,1 179,1" 
            className="hl-line" 
            stroke="url(#blueGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="150 480"
            strokeDashoffset="150"
            style={{
              transition: 'all 1s ease-in-out'
            }}
          />
        </svg>
        <span className="relative z-10 text-white font-poppins font-medium text-[18px]">
          {children}
        </span>
      </button>
    </div>
  </div>
);

export default Button;