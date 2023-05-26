import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ImageSrc } from "@/types/ImageSrc";

export function AspectRatioDemo({ image }: ImageSrc) {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src={image}
        alt="Photo by Drew Beamer"
        fill
        className="object-cover rounded-md"
      />
    </AspectRatio>
  );
}
