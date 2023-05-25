import { CommandDemo } from "@/components/Command";
import { Nav } from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-slate-100">
      <div className="container">
        <Nav />
        <CommandDemo />
      </div>
    </div>
  );
}
