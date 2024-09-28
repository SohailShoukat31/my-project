import Header from "@/components/header";
// import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h2>👋Hello World🌍</h2>
        <h1 className="font-bold ">
          Governor Initiative for Artificial Intelligence, Web 3.0 & Metaverse
        </h1>
        <p> 👉This is my first Next Js Project ✨</p>
      </div>
    </>
  );
}
