import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function ToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      // variant="outline"
      className="w-full"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });
      }}
    >
      <Check className="w-4 h-4 mr-2" /> Mark all as read
    </Button>
  );
}
