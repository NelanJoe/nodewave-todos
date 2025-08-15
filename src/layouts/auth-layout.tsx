import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Image
        src="/images/shape.png"
        alt="shape"
        width={100}
        height={100}
        className="absolute top-0 left-0 w-full h-[50%] z-[-1]"
      />
      <div className="mx-auto px-4 min-h-dvh flex flex-col items-center justify-center">
        {children}
      </div>
    </>
  );
}
