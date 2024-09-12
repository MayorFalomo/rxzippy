import { useRef } from "react";

const useRipple = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const ripple = document.createElement("span");
    const size = Math.max(button.offsetWidth, button.offsetHeight);
    const x = event.clientX - button.getBoundingClientRect().left - size / 2;
    const y = event.clientY - button.getBoundingClientRect().top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255, 255, 255, 0.6)";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple-animation 0.6s linear forwards";
    ripple.style.pointerEvents = "none";

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return { buttonRef, createRipple };
};

export default useRipple;
