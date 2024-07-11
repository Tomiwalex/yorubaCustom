/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
const ErrorPopup = ({ error, type }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ position: type == 2 && "absolute" }}
        className="top-3 left-4"
      >
        <p className="text-red-500 text-sm p-3 py-4 rounded-md my-2 bg-red-200 font-semibold  inline-flex items-center">
          <span className="material-symbols-outlined mr-2">error</span>
          {error}
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default ErrorPopup;
