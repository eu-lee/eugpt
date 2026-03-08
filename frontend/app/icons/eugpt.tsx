export default function EugptIcon({
  size = 24,
  className = "",
  squircle = false,
}: {
  size?: number;
  className?: string;
  squircle?: boolean;
}) {
  if (squircle) {
    return (
      <div
        className={`flex items-center justify-center border border-current rounded-lg ${className}`}
        style={{ width: size, height: size }}
      >
        <img
          src="/eugpt-icon.svg"
          alt="EuGPT"
          width={size * 0.6}
          height={size * 0.6}
        />
      </div>
    );
  }

  return (
    <img
      src="/eugpt-icon.svg"
      alt="EuGPT"
      width={size}
      height={size}
      className={className}
    />
  );
}