"use client";

import { useRef, useEffect } from "react";
import { Cloud } from "react-icon-cloud";
import { useIcons } from "@/hooks/use-icons";
import type { IconCloudProps } from "@/types/icon-cloud";

declare global {
  interface Window {
    TagCanvas?: {
      Start: (id: string, tagList: string, options?: object) => boolean;
      Reload: (id: string) => void;
      Update: (id: string) => void;
      SetSpeed: (id: string, speed: [number, number]) => void;
    };
  }
}

const defaultSlugs = [
  "react",
  "typescript",
  "javascript",
  "jquery",
  "nodejs",
  "nextdotjs",
  "php",
  "vercel",
  "netlify",
  "github",
  "git",
  "visualstudiocode",
  "tailwindcss",
  "bootstrap",
  "css3",
  "html5",
  "mongodb",
  "figma",
  "firebase",
];

export function IconCloud({
  containerProps,
  canvasWidth = 1600,
  iconSize = 88,
  freezeActive = false,
  animationDuration = 500,
  clickToFront = true,
  tooltipDelay = 0,
}: Omit<IconCloudProps, "canvasHeight">) {
  const { icons, loading, error } = useIcons(defaultSlugs, iconSize);
  const cloudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cloudRef.current) return;

    let mouseX = 0;
    let mouseY = 0;
    let isMouseInside = false;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cloudRef.current || !isMouseInside) return;

      const rect = cloudRef.current.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handleMouseEnter = () => {
      isMouseInside = true;
    };

    const handleMouseLeave = () => {
      isMouseInside = false;
      mouseX = 0;
      mouseY = 0;
    };

    const updateIconPositions = () => {
      if (window.TagCanvas && isMouseInside) {
        try {
          window.TagCanvas?.Update("myCanvas");
          window.TagCanvas?.SetSpeed("myCanvas", [mouseX * 2, mouseY * 2]);
        } catch (e) {
          console.error(e);
        }
      }
      animationFrameId = requestAnimationFrame(updateIconPositions);
    };

    const container = cloudRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    updateIconPositions();

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.TagCanvas) {
        try {
          window.TagCanvas?.Reload("myCanvas");
        } catch (e) {
          console.error(e);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (error) {
    return (
      <div className="p-4 text-red-500 bg-red-50 rounded-md">
        Error loading icons: {error}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div
      ref={cloudRef}
      {...containerProps}
      className={`py-6 px-2 ${containerProps?.className || ""}`}
    >
      <Cloud
        id="myCanvas"
        containerProps={{
          style: {
            width: "100%",
            height: "auto",
            maxWidth: canvasWidth,
            aspectRatio: "16 / 9",
          },
        }}
        options={{
          freezeActive,
          // animationDuration,
          clickToFront,
          tooltipDelay,
          initial: [0.1, -0.1],
          wheelZoom: false,
          fadeIn: 1000,
          shape: "sphere",
          noSelect: true,
          lock: null,
          shuffleTags: true,
          reverse: true,
          depth: 1,
          maxSpeed: 0.05,
          minSpeed: 0.005,
          decel: 0.95,
          interval: 20,
          radiusX: 0.8,
          radiusY: 0.8,
          radiusZ: 0.8,
          stretchX: 1.2,
          stretchY: 1.2,
          dragControl: true,
          dragThreshold: 1,
          centreFunc: (dimensions: number[]) => {
            return [dimensions[0] / 2, dimensions[1] / 2];
          },
        }}
      >
        {icons}
      </Cloud>
    </div>
  );
}
