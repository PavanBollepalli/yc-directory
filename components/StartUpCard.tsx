import React from "react";
import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Author, Startup } from "@/sanity.types";
import { Skeleton } from "./ui/skeleton";
export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };
const StartUpCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    image,
    views,
    author,
    title,
    category,
    _id,
    descreption,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary"></EyeIcon>
          <span>{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.image!}
            alt={author?.name!}
            className="rounded-full"
            height={48}
            width={48}
          ></Image>
        </Link>
      </div>
      <Link href={`/startup/${author?._id}`}>
        <p className="startup-card_desc">{descreption}</p>
        <img src={image} alt="" className="startup-card_img" />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};
export const StartupCardSkeleton = () => {
  <>
    {[0, 1, 2, 3, 4].map((index: number) => {
      <li key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton" />
      </li>;
    })}
  </>;
};

export default StartUpCard;
