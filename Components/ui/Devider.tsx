// components/Divider.tsx
export default function Divider() {
  return (
    <div className="relative h-px">
      <div className="absolute left top-0 h-[0.5px] w-[50vw] -translate-x-1/2 bg-neutral-200 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]" />
    </div>
  );
}