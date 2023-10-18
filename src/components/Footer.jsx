import React from "react";
import { styles } from "../styles";

const Footer = () => {
  return (
    <div
      className={`w-full h-12 text-xs flex justify-center items-center ${styles.footerBg}`}
    >
      <span>
        All Rights Reserved © 2023{" "}
        <span className="cursor-pointer font-mova"
          onClick={() => window.open("https://github.com/zubykings", "_blank")}
        >
          ZubyKings👑
        </span>{" "}
      </span>
    </div>
  );
};

export default Footer;
