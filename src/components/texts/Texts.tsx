import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "heading" | "body" | "caption";
  color?: "primary" | "secondary" | "variant";
  align?: "left" | "center" | "right";
  weight?: "light" | "normal" | "semiBold" | "bold";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  font?: string;
}

const Texts: React.FC<TextProps> = ({
  children,
  className = "",
  variant,
  color = "primary",
  align = "left",
  weight = "normal",
  size = "",
  font,
}) => {
  const classes = [
    variant === "heading" ? "font-bold" : "",
    variant === "body" ? "font-normal leading-6" : "",
    variant === "caption" ? "font-light" : "",
    color === "primary" ? "text-black-400" : "",
    color === "secondary" ? "text-offBlack" : "",
    color === "variant" ? "text-gray-400" : "",
    align === "left" ? "" : "",
    align === "center" ? "text-center" : "",
    align === "right" ? "text-right" : "",
    weight === "light" ? "font-light" : "",
    weight === "normal" ? "font-normal" : "",
    weight === "semiBold" ? "font-semibold" : "",
    weight === "bold" ? "font-bold" : "",
    size === "sm" ? "text-sm" : "",
    size === "md" ? "text-md" : "",
    size === "lg" ? "text-lg" : "",
    size === "xl" ? "text-xl" : "",
    size === "2xl" ? "text-2xl" : "",
    font,
    className,
  ].join(" ");

  return <p className={classes}>{children} </p>;
};

export default Texts;
