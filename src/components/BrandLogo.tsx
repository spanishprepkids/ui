import Image from "next/image";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
};

export default function BrandLogo({ size = "sm" }: BrandLogoProps) {
  const heights = { sm: 40, md: 48, lg: 56 };
  const widths = { sm: 180, md: 216, lg: 252 };
  const height = heights[size];
  const width = widths[size];

  return (
    <Image
      src="/logo.svg"
      alt="Spanish PrepKids"
      width={width}
      height={height}
      className="h-auto w-auto object-contain"
      style={{ maxHeight: height }}
      priority
    />
  );
}
