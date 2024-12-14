import { useState, useEffect } from "react";
import { renderSimpleIcon, fetchSimpleIcons } from "react-icon-cloud";
import type { IconProps } from "@/types/icon-cloud";

export const useIcons = (slugs: string[], iconSize: number = 60) => {
  const [icons, setIcons] = useState<React.ReactNode[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIcons = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchSimpleIcons({ slugs });

        if (!result?.simpleIcons) {
          throw new Error("No icons found");
        }

        const renderedIcons = Object.values(result.simpleIcons).map(
          (icon: any) =>
            renderSimpleIcon({
              icon,
              size: iconSize,
              aProps: {
                onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
                  e.preventDefault(),
                "aria-label": `${icon.title} icon`,
                style: {
                  cursor: "pointer",
                  margin: "0.25rem",
                  transition: "all 0.2s ease-in-out",
                },
                onMouseOver: (e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                },
                onMouseOut: (e) => {
                  e.currentTarget.style.transform = "scale(1)";
                },
              },
            } as IconProps)
        );

        setIcons(renderedIcons);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch icons");
      } finally {
        setLoading(false);
      }
    };

    fetchIcons();
  }, [slugs, iconSize]);

  return { icons, loading, error };
};
