import Paragraph from "@/components/atoms/paragraph";
import Container from "@/components/molecules/landing/container";
import Header from "@/components/molecules/landing/header";
import React from "react";

interface FriendI { name: string; role: string }
// add your name here
const friends: FriendI[] = [
  {
    name: "Pak Yohan",
    role: "Sr Devops",
  },
  {
    name: "Mas Frenki Herlambang",
    role: "Sr Backend Engineer",
  },
  {
    name: "All of My Friends",
    role: " at work",
  },
];

const constant = {
  title: "List of Friends",
  desc: `I've got some really cool friends who've totally boosted my
          programming career. These folks have been there for me, always ready
          to lend a hand, offer advice, and share their coding skills.`,
};

const Friends = () => {
  return (
    <Container>
      <div className="max-w-3xl mx-auto text-center">
        <Header>{constant.title}</Header>
        <Paragraph>
          {constant.desc}
        </Paragraph>
      </div>

      <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
        <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
            {
                friends.map((friend: FriendI) => (
                <div key={friend.name} className="flex flex-col gap-2 py-4 sm:gap-3 sm:flex-row sm:items-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    <a href="#" className="hover:underline">
                        { friend.name }
                    </a>
                    </h3>
                    <p className="text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                    - { friend.role }
                    </p>
                </div>
                ))
            }
        </div>
      </div>
    </Container>
  );
};

export default Friends;
