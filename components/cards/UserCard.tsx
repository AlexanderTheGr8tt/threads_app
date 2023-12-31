"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Props {
  key: string;
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: string;
  style?: string;
}

const UserCard = ({
  key,
  id,
  name,
  username,
  imgUrl,
  personType,
  style,
}: Props) => {
  const router = useRouter();

  return (
    <article className={`user-card ${style} px-1`}>
      <div className="user-card_avatar">
        <Image
          src={imgUrl}
          alt="logo"
          width={48}
          height={48}
          className="rounded-full"
        />

        <div className="flex-1 text-ellipsis">
          <h4 className="text-[16px] font-semibold text-light-1">{name}</h4>
          <p className="text-[13px] text-gray-1">{username}</p>
        </div>
      </div>

      <button
        className="community-card_btn h-8 w-15 "
        onClick={() => router.push(`/profile/${id}`)}
      >
        <p className="text-[12px]">View</p>
      </button>
    </article>
  );
};

export default UserCard;
