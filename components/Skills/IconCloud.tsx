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
  clickToFront = true,
  tooltipDelay = 0,
}: Omit<IconCloudProps, "canvasHeight">) {
  const { icons, loading, error } = useIcons(defaultSlugs, iconSize);
  const cloudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cloudRef.current || !window.TagCanvas) return;

    let mouseX = 0;
    let mouseY = 0;
    let isMouseInside = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cloudRef.current || !isMouseInside) return;

      const rect = cloudRef.current.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      window.TagCanvas?.SetSpeed("myCanvas", [mouseX * 0.8, mouseY * 0.8]);
    };

    const handleMouseEnter = () => (isMouseInside = true);
    const handleMouseLeave = () => {
      isMouseInside = false;
      window.TagCanvas?.SetSpeed("myCanvas", [0, 0]);
    };

    const container = cloudRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
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
          clickToFront,
          tooltipDelay,
          initial: [0.1, -0.1],
          wheelZoom: false,
          fadeIn: 1000,
          shape: "sphere",
          noSelect: true,
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
        }}
      >
        {icons}
      </Cloud>
    </div>
  );
}
