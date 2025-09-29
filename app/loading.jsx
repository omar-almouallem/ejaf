import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen w-full grid place-items-center fixed top-0 left-0 z-50 bg-loader-home-bg-gradient">
      <Image
        src="/assets/shared/loading-homepage.png"
        alt="loading logo"
        width={185}
        height={89}
      />
    </div>
  );
}
