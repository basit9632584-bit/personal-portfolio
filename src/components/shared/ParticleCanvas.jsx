/**
 * ParticleCanvas — Reusable animated particle network background
 * Configurable for different sections (Hero, Contact, etc.)
 */

import { useEffect, useRef } from 'react';

export function ParticleCanvas({
  particleCount = 70,
  connectionDistance = 140,
  particleSpeed = 0.28,
  opacity = 0.9,
  className = '',
}) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles = [];

    class Particle {
      constructor() {
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.radius = 0;
        this.opacity = 0;
        this.pulseOffset = 0;
        this.currentOpacity = 0;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * particleSpeed * 2;
        this.vy = (Math.random() - 0.5) * particleSpeed * 2;
        this.radius = Math.random() * 1.6 + 0.6;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update(time) {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
        this.currentOpacity =
          this.opacity + Math.sin(time * 0.001 + this.pulseOffset) * 0.15;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(217, 119, 6, ${this.currentOpacity})`;
        ctx.fill();
      }
    }

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }

    function init() {
      resize();
      particles = Array.from({ length: particleCount }, () => {
        const p = new Particle();
        p.reset();
        return p;
      });
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.18;
            const gradient = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
            gradient.addColorStop(0, `rgba(245, 158, 11, ${alpha})`);
            gradient.addColorStop(1, `rgba(217, 119, 6, ${alpha * 0.4})`);
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate(time = 0) {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update(time);
        p.draw();
      });
      drawConnections();
      animRef.current = requestAnimationFrame(animate);
    }

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    init();
    animate();

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      observer.disconnect();
    };
  }, [particleCount, connectionDistance, particleSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}

/**
 * Lighter variant for Contact section
 */
export function ContactParticleCanvas() {
  return (
    <ParticleCanvas
      particleCount={50}
      connectionDistance={120}
      particleSpeed={0.22}
      opacity={0.7}
    />
  );
}