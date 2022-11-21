import React from "react";
import { Tweet } from "../typings";
import TimeAgo from "react-timeago";
import {
	ArrowsRightLeftIcon,
	ArrowUpTrayIcon,
	ChatBubbleOvalLeftEllipsisIcon,
	HeartIcon,
} from "@heroicons/react/24/outline";

interface Props {
	tweet: Tweet;
}

const TweetComponent = ({ tweet }: Props) => {
	return (
		<div className="flex flex-col space-x-3 border-y p-5 border-gray-100">
			<div className="flex space-x-3">
				<img
					className="h-10 w-10 rounded-full object-cover"
					src={tweet.profileImage}
					alt="profile"
				/>

				<div>
					<div className="flex items-center space-x-2">
						<p className="mr-1 font-bold">{tweet.username}</p>
						<p className="hidden text-sm text-gray-500 sm:inline">
							@{tweet.username.replace(/\s+/g, "").toLowerCase()}
						</p>
						<TimeAgo
							className="text-sm text-gray-500"
							date={tweet._createdAt}
						/>
					</div>
					<p className="pt-1">{tweet.text}</p>
					{tweet.tweetImage && (
						<img
							className="m-5 ml-0 mb-1 rounded-lg object-cover shadow-sm"
							src={tweet.tweetImage}
							alt="tweet"
						/>
					)}
				</div>
			</div>
			<div className="flex justify-between mt-5">
				<div className="flex cursor-pointer items-center space-x-3 text-gray-400">
					<ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
				</div>
				<div className="flex cursor-pointer items-center space-x-3 text-gray-400">
					<ArrowsRightLeftIcon className="h-5 w-5" />
				</div>
				<div className="flex cursor-pointer items-center space-x-3 text-gray-400">
					<HeartIcon className="h-5 w-5" />
				</div>
				<div className="flex cursor-pointer items-center space-x-3 text-gray-400">
					<ArrowUpTrayIcon className="h-5 w-5" />
				</div>
			</div>
		</div>
	);
};

export default TweetComponent;
