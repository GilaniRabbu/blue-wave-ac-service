export interface IconCloudProps {
  // Cloud configuration
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  // Canvas options
  canvasWidth?: number;
  canvasHeight?: number;
  // Icon options
  iconSize?: number;
  // Animation options
  freezeActive?: boolean;
  animationDuration?: number;
  // Interaction options
  clickToFront?: boolean;
  tooltipDelay?: number;
}

export interface IconProps {
  icon: any;
  size?: number;
  aProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}
