const TypingIndicator = () => {
  type DotPorps = {
    className?: string;
  };
  const Dot = ({ className }: DotPorps) => {
    return (
      <div
        className={`w-2 h-2 rounded-full bg-gray-800 animate-pulse ${className}`}
      ></div>
    );
  };
  return (
    <div>
      <div className="flex self-start gap-1 px-3 py-3 bg-gray-200">
        <Dot />
        <Dot className="[animation-delay:0.2s]" />
        <Dot className="[animation-delay:0.4s]" />
      </div>
    </div>
  );
};

export default TypingIndicator;
