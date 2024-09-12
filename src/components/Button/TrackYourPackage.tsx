import useRipple from "@/Animation/RippleEffect";
import { MouseEvent } from "react";
import { useInView } from "react-intersection-observer";

interface IProps {
  onClick?: () => MouseEvent<HTMLButtonElement>;
  font?: string;
  styles?: string;
  seen?: boolean;
  normal?: boolean;
}

const TrackYourPackageBtn = ({
  onClick,
  font = "font-hkGrotesk",
  styles,
  seen,
  normal,
}: IProps) => {
  const { buttonRef, createRipple } = useRipple();

  const { ref, inView } = useInView({
    threshold: 0,
    // triggerOnce: true,
  });

  return (
    <button
      ref={(el) => {
        ref(el); // useInView ref
        buttonRef.current = el; // button ref for ripple effect
      }}
      onMouseDown={createRipple}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      style={{ position: "relative", overflow: "hidden" }}
      className={`${font} ${styles} relative z-[2] flex items-center gap-2 px-4 py-2 text-lg bg-primary text-secondary hover:bg-blue-600 rounded-[24.5px] `}
    >
      <span> Track Your Package </span>
      <span
        className={
          inView === seen
            ? ` transform rotate-0 bg-bgPrimary rounded-[30px] p-2`
            : inView === normal
            ? "bg-bgPrimary rotate-45 rounded-[30px] p-2"
            : "bg-bgPrimary rounded-[30px] p-2"
        }
      >
        {" "}
        <svg
          color="#000"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
      <style>
        {`
          @keyframes ripple-animation {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `}
      </style>
    </button>
  );
};

export default TrackYourPackageBtn;
