import Image from "next/image";

export const metadata = {
  title: "Party.me",
  description: "ขอบคุณที่เข้ามาดูกันครับ",
};

export default function Home() {
  return (
    <div>
      <Image
        src="/images/me.png"
        alt="My photo"
        width={200}
        height={200}
      />
    </div>
  );
}
