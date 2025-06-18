import Image from "next/image";
import { cn } from "@/lib/utils";

interface ListingCardProps {
  icon: string;
  username: string;
  followers: number;
  todayChange: number;
  hasIncrease: boolean;
  className?: string;
}

export function ListingCard({
  icon,
  username,
  followers,
  todayChange,
  hasIncrease,
  className,
}: ListingCardProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-card-background rounded-lg shadow-lg hover:shadow-xl hover:bg-[#e3e4e5] transition-all duration-300 dark:hover:bg-[hsl(229,25%,26%)]">
      <div className={cn("h-[4px] w-full", className)}></div>
      <div className="flex flex-col items-center space-y-5 p-6">
        <div className="flex items-center space-x-2">
          <Image src={icon} alt="Social Media Icon" width={20} height={20} />
          <p className="text-sm tracking-normal font-semibold dark:text-gray-400">
            @{username}
          </p>
        </div>

        <div className=" text-center">
          <h2 className="text-7xl font-semibold tracking-tight">{followers}</h2>
          <p className="dark:text-gray-400 tracking-[5px]">FOLLOWERS</p>
        </div>

        <div
          className={cn(
            "flex items-center space-x-2",
            hasIncrease ? "text-green-600" : "text-red-500"
          )}
        >
          <Image
            src={hasIncrease ? "/images/icon-up.svg" : "/images/icon-down.svg"}
            alt="Twitter Icon"
            width={20}
            height={20}
          />
          <p className="text-sm font-semibold tracking-normal">
            {todayChange} Today
          </p>
        </div>
      </div>
    </div>
  );
}
