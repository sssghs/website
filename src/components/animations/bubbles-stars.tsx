import { useEffect, useState, useRef } from "react";

interface Bubble {
  id: number;
  size: number;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  color: string;
  glow: string;
  blur: number;
  zIndex: number;
}

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  color: string;
  twinkleDuration: number;
  twinkleDelay: number;
  zIndex: number;
}

interface Sparkle {
  id: number;
  size: number;
  x: number;
  y: number;
  color: string;
  pulseDuration: number;
  pulseDelay: number;
  rotateDuration: number;
  zIndex: number;
}

interface Glitter {
  id: number;
  size: number;
  x: number;
  y: number;
  color: string;
  fadeDuration: number;
  fadeDelay: number;
  zIndex: number;
}

interface Dust {
  id: number;
  size: number;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  color: string;
  zIndex: number;
}

interface Shimmer {
  id: number;
  size: number;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  opacity: number;
  duration: number;
  delay: number;
  zIndex: number;
}

interface MicroTwinkle {
  id: number;
  size: number;
  x: number;
  y: number;
  color: string;
  fadeDuration: number;
  fadeDelay: number;
  zIndex: number;
}

export default function VibrantBubblesAndStarsAnimation() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [stars, setStars] = useState<Star[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [glitters, setGlitters] = useState<Glitter[]>([]);
  const [dusts, setDusts] = useState<Dust[]>([]);
  const [shimmers, setShimmers] = useState<Shimmer[]>([]);
  const [microTwinkles, setMicroTwinkles] = useState<MicroTwinkle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const requestRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);
  const nextIdRef = useRef(0);
  const initialized = useRef(false);

  // Color pools
  const bubbleColors = [
    "bg-school-blue/15", "bg-school-blue/10", "bg-blue-300/15", "bg-blue-200/10",
    "bg-school-navy/15", "bg-school-navy/10", "bg-indigo-300/15", "bg-indigo-200/10",
    "bg-school-gold/15", "bg-school-gold/10", "bg-yellow-200/15", "bg-amber-200/10",
    "bg-school-light/20", "bg-school-light/15", "bg-gray-100/15", "bg-slate-200/10",
    "bg-teal-200/10", "bg-cyan-200/10"
  ];

  const bubbleGlows = [
    "rgba(191, 219, 254, 0.3)", "rgba(191, 219, 254, 0.3)", "rgba(147, 197, 253, 0.3)", "rgba(219, 234, 254, 0.3)",
    "rgba(199, 210, 254, 0.3)", "rgba(199, 210, 254, 0.3)", "rgba(165, 180, 252, 0.3)", "rgba(224, 231, 255, 0.3)",
    "rgba(254, 243, 199, 0.3)", "rgba(254, 243, 199, 0.3)", "rgba(254, 240, 138, 0.3)", "rgba(252, 231, 243, 0.3)",
    "rgba(241, 245, 249, 0.25)", "rgba(241, 245, 249, 0.25)", "rgba(249, 250, 251, 0.2)", "rgba(248, 250, 252, 0.2)",
    "rgba(204, 251, 241, 0.3)", "rgba(207, 250, 254, 0.3)"
  ];

  const starColors = [
    "bg-school-blue/90", "bg-school-navy/80", "bg-school-gold/100",
    "bg-blue-500/90", "bg-indigo-600/85", "bg-yellow-500/95",
    "bg-teal-500/90", "bg-cyan-500/85"
  ];

  const sparkleColors = [
    "bg-school-blue/100", "bg-school-navy/90", "bg-school-gold/100",
    "bg-blue-600/95", "bg-indigo-500/90", "bg-yellow-600/100",
    "bg-teal-600/95", "bg-cyan-600/90"
  ];

  const glitterColors = [
    "bg-school-blue/80", "bg-school-navy/75", "bg-school-gold/85",
    "bg-blue-500/80", "bg-indigo-600/75", "bg-yellow-500/80",
    "bg-teal-500/75", "bg-cyan-500/80"
  ];

  const dustColors = [
    "bg-school-blue/70", "bg-school-navy/65", "bg-school-gold/75",
    "bg-blue-400/70", "bg-indigo-500/65", "bg-yellow-400/70",
    "bg-teal-400/65", "bg-cyan-400/70"
  ];

  const shimmerColors = [
    "bg-school-blue/15", "bg-school-navy/10", "bg-school-gold/20",
    "bg-blue-500/15", "bg-indigo-600/10", "bg-yellow-500/15"
  ];

  const microTwinkleColors = [
    "bg-school-blue/95", "bg-school-navy/90", "bg-school-gold/100",
    "bg-blue-600/95", "bg-indigo-600/90", "bg-yellow-600/95"
  ];

  // Get container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      } else {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Initialize all elements
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0 && !initialized.current) {
      initialized.current = true;

      // Bubbles (16)
      const bubbleCount = 16;
      const initialBubbles: Bubble[] = [];

      for (let i = 0; i < bubbleCount; i++) {
        const size = Math.floor(Math.random() * 80) + 20;
        let x, y;
        let attempts = 0;
        do {
          x = Math.random() * dimensions.width;
          y = Math.random() * dimensions.height;
          attempts++;
        } while (isTooClose(x, y, initialBubbles, size * 1.5) && attempts < 10);

        const colorIndex = Math.floor(Math.random() * bubbleColors.length);
        initialBubbles.push({
          id: nextIdRef.current++,
          size,
          x,
          y,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8,
          color: bubbleColors[colorIndex],
          glow: bubbleGlows[colorIndex],
          blur: Math.random() * 3 + 1,
          zIndex: Math.floor(Math.random() * 3)
        });
      }

      // Twinkling Stars (25)
      const starCount = 25;
      const initialStars: Star[] = [];

      for (let i = 0; i < starCount; i++) {
        const size = Math.floor(Math.random() * 8) + 2;
        initialStars.push({
          id: nextIdRef.current++,
          size,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          twinkleDuration: Math.random() * 3 + 0.5,
          twinkleDelay: Math.random() * 2,
          zIndex: Math.floor(Math.random() * 3)
        });
      }

      // Sparkles (16, glitter-shaped)
      const sparkleCount = 16;
      const initialSparkles: Sparkle[] = [];

      for (let i = 0; i < sparkleCount; i++) {
        const size = Math.floor(Math.random() * 15) + 5;
        initialSparkles.push({
          id: nextIdRef.current++,
          size,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
          pulseDuration: Math.random() * 3.5 + 0.5,
          pulseDelay: Math.random() * 2,
          rotateDuration: Math.random() * 6 + 4,
          zIndex: Math.floor(Math.random() * 3)
        });
      }

      // Glitters (30)
      const glitterCount = 30;
      const initialGlitters: Glitter[] = [];

      for (let i = 0; i < glitterCount; i++) {
        const size = Math.floor(Math.random() * 3) + 1;
        initialGlitters.push({
          id: nextIdRef.current++,
          size,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          color: glitterColors[Math.floor(Math.random() * glitterColors.length)],
          fadeDuration: Math.random() * 1.5 + 0.3,
          fadeDelay: Math.random() * 1.5,
          zIndex: Math.floor(Math.random() * 3)
        });
      }

      // Floating Dust (40)
      const dustCount = 40;
      const initialDusts: Dust[] = [];

      for (let i = 0; i < dustCount; i++) {
        const size = Math.floor(Math.random() * 2) + 1;
        initialDusts.push({
          id: nextIdRef.current++,
          size,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: dustColors[Math.floor(Math.random() * dustColors.length)],
          zIndex: Math.floor(Math.random() * 3)
        });
      }

      // Shimmers (10)
      const shimmerCount = 10;
      const initialShimmers: Shimmer[] = [];

      for (let i = 0; i < shimmerCount; i++) {
        const size = Math.floor(Math.random() * 200) + 100;
        initialShimmers.push({
          id: nextIdRef.current++,
          size,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.1 + 0.05,
          duration: Math.random() * 4 + 2,
          delay: Math.random() * 3,
          zIndex: Math.floor(Math.random() * 3)
        });
      }

      // Micro Twinkles (50)
      const microTwinkleCount = 50;
      const initialMicroTwinkles: MicroTwinkle[] = [];

      for (let i = 0; i < microTwinkleCount; i++) {
        const size = Math.random() * 1.5 + 0.5;
        initialMicroTwinkles.push({
          id: nextIdRef.current++,
          size,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          color: microTwinkleColors[Math.floor(Math.random() * microTwinkleColors.length)],
          fadeDuration: Math.random() * 0.8 + 0.2,
          fadeDelay: Math.random() * 1,
          zIndex: Math.floor(Math.random() * 3)
        });
      }

      setBubbles(initialBubbles);
      setStars(initialStars);
      setSparkles(initialSparkles);
      setGlitters(initialGlitters);
      setDusts(initialDusts);
      setShimmers(initialShimmers);
      setMicroTwinkles(initialMicroTwinkles);
    }
  }, [dimensions]);

  // Check for overlap (bubbles, dusts, shimmers)
  const isTooClose = (x: number, y: number, elements: { x: number; y: number; size: number }[], minDistance: number) => {
    return elements.some(el => {
      const dx = x - el.x;
      const dy = y - el.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < minDistance;
    });
  };

  // Animate bubbles, dusts, shimmers
  useEffect(() => {
    if (bubbles.length === 0 || dusts.length === 0 || shimmers.length === 0 || dimensions.width === 0) return;

    const animate = () => {
      // Bubbles
      setBubbles(prevBubbles => {
        return prevBubbles.map(bubble => {
          let newX = bubble.x + bubble.speedX;
          let newY = bubble.y + bubble.speedY;
          let newSpeedX = bubble.speedX;
          let newSpeedY = bubble.speedY;

          if (newX <= 0 || newX >= dimensions.width) {
            newSpeedX = -newSpeedX;
            newX = newX <= 0 ? 0 : dimensions.width;
          }
          if (newY <= 0 || newY >= dimensions.height) {
            newSpeedY = -newSpeedY;
            newY = newY <= 0 ? 0 : dimensions.height;
          }

          let repelX = 0;
          let repelY = 0;
          prevBubbles.forEach(otherBubble => {
            if (otherBubble.id !== bubble.id) {
              const dx = bubble.x - otherBubble.x;
              const dy = bubble.y - otherBubble.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const minDistance = (bubble.size + otherBubble.size) * 0.75;

              if (distance < minDistance && distance > 0) {
                const factor = (minDistance - distance) / minDistance;
                repelX += (dx / distance) * factor * 0.3;
                repelY += (dy / distance) * factor * 0.3;
              }
            }
          });

          newSpeedX += repelX;
          newSpeedY += repelY;
          newSpeedX = Math.max(-0.8, Math.min(0.8, newSpeedX));
          newSpeedY = Math.max(-0.8, Math.min(0.8, newSpeedY));

          return { ...bubble, x: newX, y: newY, speedX: newSpeedX, speedY: newSpeedY };
        });
      });

      // Dusts
      setDusts(prevDusts => {
        return prevDusts.map(dust => {
          let newX = dust.x + dust.speedX;
          let newY = dust.y + dust.speedY;
          let newSpeedX = dust.speedX;
          let newSpeedY = dust.speedY;

          if (newX <= 0 || newX >= dimensions.width) {
            newSpeedX = -newSpeedX;
            newX = newX <= 0 ? 0 : dimensions.width;
          }
          if (newY <= 0 || newY >= dimensions.height) {
            newSpeedY = -newSpeedY;
            newY = newY <= 0 ? 0 : dimensions.height;
          }

          return { ...dust, x: newX, y: newY, speedX: newSpeedX, speedY: newSpeedY };
        });
      });

      // Shimmers
      setShimmers(prevShimmers => {
        return prevShimmers.map(shimmer => {
          let newX = shimmer.x + shimmer.speedX;
          let newY = shimmer.y + shimmer.speedY;
          let newSpeedX = shimmer.speedX;
          let newSpeedY = shimmer.speedY;

          if (newX <= 0 || newX >= dimensions.width) {
            newSpeedX = -newSpeedX;
            newX = newX <= 0 ? 0 : dimensions.width;
          }
          if (newY <= 0 || newY >= dimensions.height) {
            newSpeedY = -newSpeedY;
            newY = newY <= 0 ? 0 : dimensions.height;
          }

          return { ...shimmer, x: newX, y: newY, speedX: newSpeedX, speedY: newSpeedY };
        });
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    // Add/remove bubbles
    const intervalId = setInterval(() => {
      setBubbles(prevBubbles => {
        let newBubbles = [...prevBubbles];

        if (newBubbles.length > 16 && Math.random() < 0.3) {
          const bubbleIndex = Math.floor(Math.random() * newBubbles.length);
          newBubbles = [
            ...newBubbles.slice(0, bubbleIndex),
            ...newBubbles.slice(bubbleIndex + 1)
          ];
        }

        if (newBubbles.length < 16 && Math.random() < 0.3) {
          const size = Math.floor(Math.random() * 80) + 20;
          let x, y;
          let attempts = 0;
          do {
            x = Math.random() * dimensions.width;
            y = Math.random() * dimensions.height;
            attempts++;
          } while (isTooClose(x, y, newBubbles, size * 1.5) && attempts < 10);

          const colorIndex = Math.floor(Math.random() * bubbleColors.length);
          newBubbles = [
            ...newBubbles,
            {
              id: nextIdRef.current++,
              size,
              x,
              y,
              speedX: (Math.random() - 0.5) * 0.8,
              speedY: (Math.random() - 0.5) * 0.8,
              color: bubbleColors[colorIndex],
              glow: bubbleGlows[colorIndex],
              blur: Math.random() * 3 + 1,
              zIndex: Math.floor(Math.random() * 3)
            }
          ];
        }

        return newBubbles;
      });
    }, 3000);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      clearInterval(intervalId);
    };
  }, [bubbles.length, dusts.length, shimmers.length, dimensions]);

  // Mouse interaction (bubbles only)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (dimensions.width === 0) return;

    const containerRect = containerRef.current?.getBoundingClientRect() || {
      left: 0,
      top: 0
    };
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    setBubbles(prevBubbles => 
      prevBubbles.map(bubble => {
        const dx = mouseX - bubble.x;
        const dy = mouseY - bubble.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const factor = 1 - distance / 150;
          const repelX = -dx * factor * 0.1;
          const repelY = -dy * factor * 0.1;

          return {
            ...bubble,
            speedX: bubble.speedX + repelX,
            speedY: bubble.speedY + repelY
          };
        }
        return bubble;
      })
    );
  };

  // Parallax mist
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const mistLayers = document.querySelectorAll('.mist-layer');
      mistLayers.forEach((layer, index) => {
        const speed = 0.02 * (index + 1);
        (layer as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden z-0"
      onMouseMove={handleMouseMove}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }
          @keyframes rotate {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
          @keyframes fade {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.8; }
          }
          @keyframes microFade {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.7; }
          }
          @keyframes noise {
            0% { transform: translate(0, 0); }
            10% { transform: translate(-5px, 5px); }
            20% { transform: translate(-10px, 0); }
            30% { transform: translate(5px, -5px); }
            40% { transform: translate(10px, 10px); }
            50% { transform: translate(-5px, 5px); }
            60% { transform: translate(0, -10px); }
            70% { transform: translate(5px, 0); }
            80% { transform: translate(-10px, -5px); }
            90% { transform: translate(0, 5px); }
            100% { transform: translate(0, 0); }
          }
          .glitter-shape {
            position: absolute;
            clip-path: polygon(
              50% 20%, 70% 30%, 80% 50%, 70% 70%, 50% 80%,
              30% 70%, 20% 50%, 30% 30%
            );
          }
          .noise-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="matrix" values="0 0 0 0 0.1 0 0 0 0 0.2 0 0 0 0 0.5 0 0 0 0.05 0"/></filter><rect width="100%" height="100%" filter="url(#noise)" opacity="0.05"/></svg>') repeat;
            animation: noise 10s infinite linear;
            pointer-events: none;
            z-index: 2;
          }
          .mist-layer {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              to bottom,
              rgba(59, 130, 246, 0.1),
              rgba(30, 64, 175, 0.05),
              rgba(234, 179, 8, 0.05)
            );
            pointer-events: none;
            z-index: 1;
          }
        `}
      </style>
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />
      {/* Mist Layers */}
      <div className="mist-layer" style={{ opacity: 0.1 }} />
      <div className="mist-layer" style={{ opacity: 0.05 }} />
      <div className="mist-layer" style={{ opacity: 0.07 }} />
      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full ${bubble.color}`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            filter: `blur(${bubble.blur}px)`,
            boxShadow: `0 0 15px 2px ${bubble.glow}`,
            zIndex: bubble.zIndex,
            transform: 'translate(-50%, -50%)',
            position: 'absolute'
          }}
        />
      ))}
      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full ${star.color}`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}px`,
            top: `${star.y}px`,
            animation: `twinkle ${star.twinkleDuration}s ease-in-out ${star.twinkleDelay}s infinite`,
            zIndex: star.zIndex,
            transform: 'translate(-50%, -50%)',
            position: 'absolute'
          }}
        />
      ))}
      {/* Glitter-Shaped Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className={`absolute glitter-shape ${sparkle.color}`}
          style={{
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            animation: `
              pulse ${sparkle.pulseDuration}s ease-in-out ${sparkle.pulseDelay}s infinite,
              rotate ${sparkle.rotateDuration}s linear infinite
            `,
            zIndex: sparkle.zIndex,
            position: 'absolute'
          }}
        />
      ))}
      {/* Glitters */}
      {glitters.map((glitter) => (
        <div
          key={glitter.id}
          className={`absolute rounded-full ${glitter.color}`}
          style={{
            width: `${glitter.size}px`,
            height: `${glitter.size}px`,
            left: `${glitter.x}px`,
            top: `${glitter.y}px`,
            animation: `fade ${glitter.fadeDuration}s ease-in-out ${glitter.fadeDelay}s infinite`,
            zIndex: glitter.zIndex,
            transform: 'translate(-50%, -50%)',
            position: 'absolute'
          }}
        />
      ))}
      {/* Floating Dust */}
      {dusts.map((dust) => (
        <div
          key={dust.id}
          className={`absolute rounded-full ${dust.color}`}
          style={{
            width: `${dust.size}px`,
            height: `${dust.size}px`,
            left: `${dust.x}px`,
            top: `${dust.y}px`,
            zIndex: dust.zIndex,
            transform: 'translate(-50%, -50%)',
            position: 'absolute'
          }}
        />
      ))}
      {/* Shimmers */}
      {shimmers.map((shimmer) => (
        <div
          key={shimmer.id}
          className={`absolute rounded-full ${shimmer.color}`}
          style={{
            width: `${shimmer.size}px`,
            height: `${shimmer.size}px`,
            left: `${shimmer.x}px`,
            top: `${shimmer.y}px`,
            opacity: shimmer.opacity,
            filter: 'blur(50px)',
            animation: `fade ${shimmer.duration}s ease-in-out ${shimmer.delay}s infinite`,
            zIndex: shimmer.zIndex,
            transform: 'translate(-50%, -50%)',
            position: 'absolute'
          }}
        />
      ))}
      {/* Micro Twinkles */}
      {microTwinkles.map((twinkle) => (
        <div
          key={twinkle.id}
          className={`absolute rounded-full ${twinkle.color}`}
          style={{
            width: `${twinkle.size}px`,
            height: `${twinkle.size}px`,
            left: `${twinkle.x}px`,
            top: `${twinkle.y}px`,
            animation: `microFade ${twinkle.fadeDuration}s ease-in-out ${twinkle.fadeDelay}s infinite`,
            zIndex: twinkle.zIndex,
            transform: 'translate(-50%, -50%)',
            position: 'absolute'
          }}
        />
      ))}
      {bubbles.length === 0 && stars.length === 0 && sparkles.length === 0 && glitters.length === 0 &&
       dusts.length === 0 && shimmers.length === 0 && microTwinkles.length === 0 && dimensions.width > 0 && (
        <div className="fixed inset-0 flex items-center justify-center text-lg text-gray-500">
          Initializing sky animation...
        </div>
      )}
    </div>
  );
}