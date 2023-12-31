"use client";

import {
  hasLikedThread,
  likeThread,
  unlikeThread,
} from "@/lib/actions/thread.actions";
import { ObjectId } from "mongoose";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MySVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="w-6 h-6 text-current transition-colors "
  >
    <path
      fill="currentColor"
      d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"
    />
  </svg>
);

interface Props {
  userObjectId: string;
  threadId: string;
  liked: boolean;
}

async function HeartSVG({ userObjectId, threadId, liked }: Props) {
  const router = useRouter();

  const toggleLike = async (threadId: string, userObjectId: string) => {
    if (!liked) {
      likeThread(threadId, userObjectId);
      router.refresh();
    } else {
      unlikeThread(threadId, userObjectId);
      router.refresh();
    }
  };

  return (
    <button
      type="submit"
      className={`${
        liked ? "text-red-500" : "text-light-4"
      } cursor-pointer object-contain hover:text-red-500`}
      onClick={() => toggleLike(threadId, userObjectId)}
    >
      {MySVG}
    </button>
  );
}

export default HeartSVG;
