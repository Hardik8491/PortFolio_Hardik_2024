"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../../utils/motion";



interface ITitle {
  useMotion: boolean;
  h2: string;
}

export const Title: React.FC<ITitle> = ({ useMotion = true, h2 }) => {
  const Content = () => (
    <>
      <h3 className="w-full uppercase tracking-[15px] mt-40 text-[--textColor70] text-2xl md:text-3xl mx-auto text-center">
        {h2}
      </h3>
    </>
  );

  return useMotion === true ? (
    <motion.div variants={textVariant()}>
      <Content />
    </motion.div>
  ) : (
    <Content />
  );
};
