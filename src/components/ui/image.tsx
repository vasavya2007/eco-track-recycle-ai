
import { cn } from "@/lib/utils";
import React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: "square" | "video" | string;
  object?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, aspectRatio = "square", object = "cover", alt = "", ...props }, ref) => {
    const aspectRatioClass = 
      aspectRatio === "square" 
        ? "aspect-square" 
        : aspectRatio === "video" 
          ? "aspect-video" 
          : aspectRatio;

    const objectFitClass =
      object === "contain"
        ? "object-contain"
        : object === "cover"
          ? "object-cover"
          : object === "fill"
            ? "object-fill"
            : object === "none"
              ? "object-none"
              : "object-scale-down";

    return (
      <img
        ref={ref}
        alt={alt}
        className={cn(
          aspectRatioClass,
          objectFitClass,
          "w-full h-auto",
          className
        )}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";

export { Image };
