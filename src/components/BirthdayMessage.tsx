import { motion } from 'motion/react';

export function BirthdayMessage() {
  const messages = [
    "Chúc em tuổi mới luôn rạng rỡ,",
    "hạnh phúc và được yêu thương như hôm nay.",
    "Anh yêu em nhiều ❤️",
  ];

  return (
    <div className="space-y-4 max-w-2xl mx-auto text-center">
      {messages.map((message, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.6,
            ease: "easeOut"
          }}
          className="text-pink-700"
        >
          {message}
        </motion.p>
      ))}
    </div>
  );
}
