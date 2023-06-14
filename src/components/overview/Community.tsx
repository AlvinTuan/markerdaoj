import React from "react";
import ChatImage from "../svg-image/ChatImage";
import CommunityItem from "./CommunityItem";
import ForumImage from "../svg-image/ForumImage";
import TwitterImage from "../svg-image/TwitterImage";
import TelegramImage from "../svg-image/TelegramImage";
import GitHubImage from "../svg-image/GitHubImage";
import Recent from "./Recent";

const Community: React.FC = () => {
  return (
    <section>
      <div className="bg-slate-100 max-w-[1100px] mx-auto h-[700px] relative">
        <div className="join-the-community pt-16">
          <div className="w-[948px] text-center mx-auto">
            <h2>
              <span className="text-xl font-bold">Join the community</span>
            </h2>
          </div>
          <p className="mt-[20px] mx-[240px] max-w-[620px]">
            <span className="text-xl">
              Learn more about Maker, chat with the team, others in the
              community, and have your say in shaping the future of
              decentralized finance.
            </span>
          </p>
          <div className="mt-[60px] mx-14 flex items-center justify-around">
            <CommunityItem
              img={<ChatImage></ChatImage>}
              describe="Chat"
            ></CommunityItem>
            <CommunityItem
              img={<ForumImage></ForumImage>}
              describe="Forum"
            ></CommunityItem>
            <CommunityItem
              img={<TwitterImage></TwitterImage>}
              describe="Twitter"
            ></CommunityItem>
            <CommunityItem
              img={<TelegramImage></TelegramImage>}
              describe="Telegram"
            ></CommunityItem>
            <CommunityItem
              img={<GitHubImage></GitHubImage>}
              describe="GitHub"
            ></CommunityItem>
          </div>
        </div>
        <Recent></Recent>
      </div>
    </section>
  );
};

export default Community;
