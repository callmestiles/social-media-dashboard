import { Switch } from "@/components/ui/switch";

export default function Home() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto w-full px-25 py-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight">
              Social Media Dashboard
            </h1>
            <p className="text-base font-medium leading-normal tracking-normal text-gray-500">
              Total Followers: 23,004
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <p>Dark Mode</p>
            <Switch />
          </div>
        </div>
      </div>
    </>
  );
}
