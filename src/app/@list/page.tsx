import { ListingCard } from "@/components/custom-ui/listing-card";

export default function ListPage() {
  return (
    <>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ListingCard
          icon="images/icon-facebook.svg"
          username="nathanf"
          followers={1987}
          todayChange={12}
          hasIncrease={true}
          className="bg-[hsl(208,92%,53%)]"
        />
        <ListingCard
          icon="images/icon-twitter.svg"
          username="nathanf"
          followers={1044}
          todayChange={99}
          hasIncrease={true}
          className="bg-[hsl(203,89%,53%)]"
        />
        <ListingCard
          icon="images/icon-instagram.svg"
          username="realnathanf"
          followers={1987}
          todayChange={1099}
          hasIncrease={true}
          className="bg-gradient-to-r from-[hsl(37,97%,70%)] to-[hsl(329,70%,58%)]"
        />
        <ListingCard
          icon="images/icon-youtube.svg"
          username="Nathan F."
          followers={8239}
          todayChange={144}
          hasIncrease={false}
          className="bg-[hsl(348,97%,39%)]"
        />
      </div>
    </>
  );
}
