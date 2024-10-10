interface IProps {
  children: React.ReactNode;
  className?: string;
  font?: string;
  primary?: boolean;
  border?: boolean;
}

const HeaderTexts = ({
  children,
  className,
  font = "font-stinger",
  primary,
  border = false,
}: IProps) => {
  return (
    <h2
      className={` scroll-m-20 font-semibold tracking-tight first:mt-0 ${className} ${font} ${
        primary ? "font-tenorSans text-variant w-fit" : ""
      } ${border ? "" : ""} `}
    >
      {children}{" "}
    </h2>
  );
};

export default HeaderTexts;
