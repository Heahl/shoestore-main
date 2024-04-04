import { useSpring, animated } from "react-spring";

interface InfiniteMovingTextProps {
  text: string;
  speed: number;
}

export const InfiniteMovingText: React.FC<InfiniteMovingTextProps> = ({
  text,
  speed,
}) => {
  const props = useSpring({
    from: { transform: "translate3d(-50%,0,0)" },
    to: { transform: "translate3d(-100%,0,0)" },
    config: { duration: speed },
    reset: true,
    loop: true,
  });

  return (
    <div className="h-auto w-full overflow-hidden">
      <animated.div
        style={props}
        className="flex h-14 gap-48 whitespace-nowrap text-5xl font-bold text-black dark:text-sky-50"
      >
        <span>{text}</span>
        <span>{text}</span>
      </animated.div>
    </div>
  );
};
