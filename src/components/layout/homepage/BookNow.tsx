import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import useRipple from "@/Animation/RippleEffect";

const BookNow = () => {
  const { buttonRef, createRipple } = useRipple();

  return (
    <div className=" absolute min-[700px]:bottom-[-10px] max-[700px]:bottom-[-90px] left-1/2 transform -translate-x-1/2 -translate-y-0 z-10 bg-bgPrimary drop-shadow-lg flex items-center w-fit py-5 px-4 border-2 border-black-400">
      <div className="flex max-w-fit h-[50px] items-center">
        <Input
          className=" outline-none focus-visible:ring-transparent text-md min-[700px]:w-[300px] max-[700px]:w-[200px] h-full placeholder:px-3 rounded-none border-[1px] border-black"
          type="email"
          placeholder="Email Address"
        />
        <Button
          ref={buttonRef}
          className="relative bg-black h-full w-[100px] text-white rounded-none overflow-hidden"
          type="submit"
          onMouseDown={createRipple}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default BookNow;
