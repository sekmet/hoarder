import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { HelpCircle, Info } from "lucide-react";

export default function InfoTooltip({
  className,
  children,
  size,
  variant = "tip",
}: {
  className?: string;
  size?: number;
  children?: React.ReactNode;
  variant?: "tip" | "explain";
}) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          {variant === "tip" ? (
            <Info className={cn("cursor-pointer", className)} size={size} />
          ) : (
            <HelpCircle
              className={cn("cursor-pointer", className)}
              size={size}
            />
          )}
        </TooltipTrigger>
        <TooltipContent>{children}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}