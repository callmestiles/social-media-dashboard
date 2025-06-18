import { OverviewCard } from "@/components/custom-ui/overview-card";

export default function OverviewPage() {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
        Overview - Today
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        <OverviewCard
          overviewTitle="Page Views"
          iconSrc="/images/icon-facebook.svg"
          overviewValue={87}
          overviewChange={3}
          hasIncrease={true}
        />
        <OverviewCard
          overviewTitle="Likes"
          iconSrc="/images/icon-facebook.svg"
          overviewValue={52}
          overviewChange={2}
          hasIncrease={false}
        />
        <OverviewCard
          overviewTitle="Likes"
          iconSrc="/images/icon-instagram.svg"
          overviewValue={5462}
          overviewChange={2257}
          hasIncrease={true}
        />
        <OverviewCard
          overviewTitle="Profile Views"
          iconSrc="/images/icon-instagram.svg"
          overviewValue={5462}
          overviewChange={1375}
          hasIncrease={true}
        />
        <OverviewCard
          overviewTitle="Retweets"
          iconSrc="/images/icon-twitter.svg"
          overviewValue={117}
          overviewChange={303}
          hasIncrease={true}
        />
        <OverviewCard
          overviewTitle="Likes"
          iconSrc="/images/icon-twitter.svg"
          overviewValue={507}
          overviewChange={553}
          hasIncrease={true}
        />
        <OverviewCard
          overviewTitle="Likes"
          iconSrc="/images/icon-youtube.svg"
          overviewValue={107}
          overviewChange={19}
          hasIncrease={false}
        />
        <OverviewCard
          overviewTitle="Total Views"
          iconSrc="/images/icon-youtube.svg"
          overviewValue={1407}
          overviewChange={12}
          hasIncrease={false}
        />
      </div>
    </div>
  );
}
