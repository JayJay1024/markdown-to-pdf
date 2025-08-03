import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 32, className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        alt="Markdown Editor Logo"
        className="rounded"
        height={size}
        src="/logo.svg"
        width={size}
      />
      <span className="font-bold text-lg">Markdown Editor</span>
    </div>
  );
};
