import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <p>This is my AWESOME about page.</p>
    <p>This was done at ethdenver.com 2024 on the Buidl Camp, highly recommend it.</p>
    </main>
  );
}
