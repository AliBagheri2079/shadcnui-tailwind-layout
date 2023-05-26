"use client";
import Link from "next/link";
import { BellRing } from "lucide-react";

import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

import { ImageSrc } from "@/types/ImageSrc";
import { AspectRatioDemo } from "./AspectRatio";
import { ToastDemo } from "./Toast";

type CardProps = React.ComponentProps<typeof Card> & ImageSrc;

export function CardDemo({ className, image, ...props }: CardProps) {
  return (
    <Card className={cn("min-w-[5rem] my-4", className)} {...props}>
      <CardHeader>
        <AspectRatioDemo image={image} />
      </CardHeader>

      <CardContent className="grid gap-4">
        <div className="flex items-center p-4 space-x-4 border rounded-md ">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
          <Switch />
        </div>

        <div>
          <div className="space-y-1 text-center">
            <h4 className="text-sm font-medium leading-none">
              Radix Primitives
            </h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex items-center h-5 space-x-4 text-sm justify-evenly">
            <Link
              href={"#"}
              className={badgeVariants({ variant: "secondary" })}
            >
              Badge
            </Link>
            <Separator orientation="vertical" />
            <Link
              href={"#"}
              className={badgeVariants({ variant: "secondary" })}
            >
              Badge
            </Link>
            <Separator orientation="vertical" />
            <Link
              href={"#"}
              className={badgeVariants({ variant: "secondary" })}
            >
              Badge
            </Link>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <ToastDemo />
      </CardFooter>
    </Card>
  );
}
