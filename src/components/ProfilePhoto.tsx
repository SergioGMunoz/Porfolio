"use client";
import { motion } from "framer-motion";
import { CometCard } from "@/components/ui/comet-card";

const ProfilePhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <CometCard>
        <div className="flex justify-center mt-2">
          <img
            src="/FotoSergio.png"
            alt="Foto de Sergio"
            className="w-48 rounded-xl object-cover"
          />
        </div>
      </CometCard>
    </motion.div>
  );
};

export default ProfilePhoto;
