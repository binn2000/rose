import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  size: number;
  translateX: number;
  rotate: number;
}

export function FallingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts: Heart[] = [];
    for (let i = 0; i < 15; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 4,
        delay: Math.random() * 5,
        size: 20 + Math.random() * 20,
        translateX: (Math.random() > 0.5 ? 1 : -1) * Math.random() * 100,
        rotate: Math.random() * 360,
      });
    }
    setHearts(newHearts);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fall-heart {
            0% {
              top: -10%;
              opacity: 1;
            }
            100% {
              top: 110%;
              opacity: 0;
            }
          }
        `
      }} />
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-pink-400 opacity-60"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              animation: `fall-heart ${heart.animationDuration}s linear infinite`,
              animationDelay: `${heart.delay}s`,
              transform: `translateX(${heart.translateX}px) rotate(${heart.rotate}deg)`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </>
  );
}
