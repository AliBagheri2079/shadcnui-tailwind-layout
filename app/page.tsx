import { CommandDemo as Command } from "@/components/Command";
import { Navigation } from "@/components/Navigation";
import ShopCards from "@/components/ShopCards";

export default function Home() {
  return (
    <div className="w-full h-auto bg-slate-100">
      <div className="container">
        <Navigation />
        <Command />
        <ShopCards />
      </div>
    </div>
  );
}
