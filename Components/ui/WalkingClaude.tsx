export default function WalkingMascot() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-0 z-20 w-8 animate-[walk-across_24s_linear_infinite] motion-reduce:hidden"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/claude-code/default.svg"
        alt=""
        className="w-full animate-[walk-bob_0.4s_ease-in-out_infinite]"
      />
    </div>
  );
}
