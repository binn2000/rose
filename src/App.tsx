import { useState } from 'react';
import { motion } from 'motion/react';
import { Music, Pause, Heart, Sparkles } from 'lucide-react';
import { FallingHearts } from './components/FallingHearts';
import { BirthdayMessage } from './components/BirthdayMessage';
import { YouTubePlayer } from './components/YouTubePlayer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './components/ui/dialog';
import { Button } from './components/ui/button';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSpecialMessage, setShowSpecialMessage] = useState(false);
  
  // HƯỚNG DẪN: Thay đổi videoId bên dưới
  // Cách lấy YouTube Video ID:
  // 1. Tìm bài hát "Proud of You" trên YouTube
  // 2. Mở video, URL sẽ có dạng: https://www.youtube.com/watch?v=VIDEO_ID_HERE
  // 3. Copy phần VIDEO_ID_HERE và thay thế vào biến bên dưới
  // Ví dụ: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> videoId = "dQw4w9WgXcQ"
  const videoId = "NGe0hHvAGkc"; // Đây là một bài nhạc mẫu, bạn có thể thay đổi

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1722927735983-891f0f4ff67f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMGxvdmV8ZW58MXx8fHwxNzYxMzY1OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Những khoảnh khắc bên nhau"
    },
    {
      url: "https://images.unsplash.com/photo-1635349134541-53a64bed9583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGJpcnRoZGF5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYxMzY1OTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Mừng sinh nhật em yêu"
    },
    {
      url: "https://images.unsplash.com/photo-1723056881872-db252d3d8135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjBmbG93ZXJzfGVufDF8fHx8MTc2MTM2NTk1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Hoa hồng dành cho em"
    },
    {
      url: "https://images.unsplash.com/photo-1581779124574-bc0da275e520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHN1bnNldCUyMGNvdXBsZXxlbnwxfHx8fDE3NjEyNjc5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "Mỗi hoàng hôn bên em"
    }
  ];

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* YouTube Music Player */}
      <YouTubePlayer videoId={videoId} isPlaying={isPlaying} />
      
      {/* Falling Hearts Animation */}
      <FallingHearts />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 py-12 md:py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
            <motion.h1
              className="text-pink-600 inline-block"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(219, 39, 119, 0.5)",
                  "0 0 30px rgba(219, 39, 119, 0.3)",
                  "0 0 20px rgba(219, 39, 119, 0.5)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Chúc mừng sinh nhật em yêu ❤️
            </motion.h1>
            <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
          </div>

          {/* Birthday Message with Animation */}
          <div className="mt-8">
            <BirthdayMessage />
          </div>
        </motion.div>

        {/* Music Control Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <Button
            onClick={toggleMusic}
            className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-6 rounded-full shadow-lg transition-all hover:scale-105"
          >
            {isPlaying ? (
              <>
                <Pause className="mr-2 h-5 w-5" />
                Tạm dừng nhạc
              </>
            ) : (
              <>
                <Music className="mr-2 h-5 w-5" />
                Phát nhạc lãng mạn
              </>
            )}
          </Button>
        </motion.div>

        {/* Photo Gallery Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-center text-pink-600 mb-6">
            Những khoảnh khắc đẹp ✨
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <ImageWithFallback
                        src={photo.url}
                        alt={photo.caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                        <p className="text-white text-center">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-pink-100 hover:bg-pink-200 border-pink-300" />
            <CarouselNext className="hidden md:flex -right-12 bg-pink-100 hover:bg-pink-200 border-pink-300" />
          </Carousel>
        </motion.div>

        {/* Special Message Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="text-center"
        >
          <Button
            onClick={() => setShowSpecialMessage(true)}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 hover:from-pink-600 hover:via-purple-600 hover:to-pink-600 text-white px-12 py-8 rounded-full shadow-2xl transition-all hover:scale-110 animate-pulse"
            size="lg"
          >
            <Heart className="mr-3 h-6 w-6 fill-current" />
            Bấm để nhận lời chúc đặc biệt
            <Heart className="ml-3 h-6 w-6 fill-current" />
          </Button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="fixed top-10 left-10 text-6xl opacity-20 pointer-events-none hidden md:block">
          🎂
        </div>
        <div className="fixed top-20 right-20 text-6xl opacity-20 pointer-events-none hidden md:block">
          🎁
        </div>
        <div className="fixed bottom-20 left-20 text-6xl opacity-20 pointer-events-none hidden md:block">
          🎈
        </div>
        <div className="fixed bottom-10 right-10 text-6xl opacity-20 pointer-events-none hidden md:block">
          🌹
        </div>
      </div>

      {/* Special Message Dialog */}
      <Dialog open={showSpecialMessage} onOpenChange={setShowSpecialMessage}>
        <DialogContent className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-pink-600 text-2xl">
              💖 Lời chúc đặc biệt 💖
            </DialogTitle>
          </DialogHeader>
          <DialogDescription asChild>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4 text-center py-6"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-pink-700"
              >
                Em yêu của anh,
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-pink-700"
              >
                Trong ngày đặc biệt này, anh muốn nói với em rằng:
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-white/70 rounded-xl p-6 my-4 shadow-lg"
              >
                <p className="text-pink-600 italic">
                  "Em là món quà quý giá nhất mà cuộc đời trao tặng cho anh.
                  Mỗi ngày bên em đều là một ngày hạnh phúc.
                  Chúc em tuổi mới tràn đầy niềm vui, sức khỏe dồi dào,
                  và luôn rạng rỡ với nụ cười tươi như hoa.
                  Anh sẽ mãi bên em, yêu em và chăm sóc em.
                  Happy Birthday My Love! 💕"
                </p>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-pink-700"
              >
                Yêu em vô cùng! ❤️❤️❤️
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="text-6xl"
              >
                🎂🎉🎁
              </motion.div>
            </motion.div>
          </DialogDescription>
        </DialogContent>
      </Dialog>

      {/* Note about music */}
      <div className="fixed bottom-4 right-4 text-xs text-pink-400 opacity-50 z-30 hidden md:block">
        {isPlaying && "🎵 Nhạc đang phát..."}
      </div>
    </div>
  );
}
