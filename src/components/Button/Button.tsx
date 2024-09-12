import React from "react";

interface IProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
  text?: string;
  icon?: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
  size?: "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
  variant?: "primary" | "secondary" | "custom";
  color?: string;
  bgColor?: string;
  radius?: string;
}

const Button: React.FC<IProps> = ({
  children,
  disabled = false,
  className = "",
  onClick,
  type = "button",
  variant = "primary",
  color,
  bgColor,
  loading = false,
  size = "md",
  radius = "",
}) => {
  const classes = [
    "inline-block",
    "px-4",
    "py-2",
    "cursor-pointer",
    radius === "standard" ? "rounded-[24.5px]" : radius,
    disabled ? "opacity-20" : "",
    color,
    bgColor === "variant" ? "bg-#000" : "bg-#fff",
    variant === "primary" ? " bg-primary text-secondary hover:bg-blue-600" : "",
    variant === "secondary" ? "bg-gray-200 hover:bg-gray-300" : "",
    variant === "custom" ? className : "",
    size === "sm" ? "text-sm" : "",
    size === "md" ? "text-lg" : "",
    size === "lg" ? "text-lg" : "",
    size === "xl" ? "text-xl" : "",
    className,
  ].join(" ");

  console.log(bgColor, "bgColor");

  return (
    <button
      onClick={onClick}
      className={classes}
      type={type}
      disabled={disabled || loading}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="(link unavailable)"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
