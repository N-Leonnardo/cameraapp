import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import ballon from "../../media/p.png";

export default function Ballon() {
  const [closeAlert, setCloseAlert] = useState(false);
  if (closeAlert) {
    return <></>;
  }

  return (
    <motion.div
      transition={{ delay: 1 }}
      initial={{ y: -250, x: -800 }}
      animate={{ y: 200, x: -800 }}
      className="toast toast-top z-40"
    >
      <img src={ballon} className="w-96" />
    </motion.div>
  );
}
