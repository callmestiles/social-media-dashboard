import Image from "next/image";
import { cn } from "@/lib/utils";

interface OverviewCardProps {
  overviewTitle: string;
  overviewValue: number;
  overviewChange: number;
  iconSrc: string;
  hasIncrease: boolean;
}
export function OverviewCard({
  overviewTitle,
  overviewValue,
  overviewChange,
  iconSrc,
  hasIncrease,
}: OverviewCardProps) {
  return (
    <div className="bg-card-background space-y-5 p-6 rounded-md shadow-md hover:shadow-xl hover:bg-[#e3e4e5] transition-all duration-300 dark:hover:bg-[hsl(229,25%,26%)]">
      <div className="flex justify-between items-start">
        <p className="text-base text-gray-400 font-semibold">{overviewTitle}</p>
        <Image src={iconSrc} alt="Icons" width={20} height={20} />
      </div>
      <div className="flex justify-between items-end">
        <h3 className="text-5xl font-semibold">{overviewValue}</h3>
        <div
          className={cn(
            "flex items-center space-x-2",
            hasIncrease ? "text-green-600" : "text-red-500"
          )}
        >
          <Image
            src={hasIncrease ? "/images/icon-up.svg" : "/images/icon-down.svg"}
            alt="Icon Up"
            width={20}
            height={20}
          />
          <p>{overviewChange}%</p>
        </div>
      </div>
    </div>
  );
}
