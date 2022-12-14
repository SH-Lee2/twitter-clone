import React, { useState } from "react";

import { toast } from "react-hot-toast";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import TweetBox from "./TweetBox";
import { Tweet } from "../typings";
import TweetComponent from "./TweetComponent";
import { fetchTweets } from "../utils/fetchTweets";

interface Props {
	tweets: Tweet[];
}

const Feed = ({ tweets: tweetsProp }: Props) => {
	const [tweets, setTweets] = useState<Tweet[]>(tweetsProp);

	const handleRefresh = async () => {
		const refreshToast = toast.loading("Refreshing...");
		const tweets = await fetchTweets();
		setTweets(tweets);

		toast.success("Feed Updated!", {
			id: refreshToast,
		});
	};

	return (
		<div className="col-span-7 scrollbar-hide max-h-screen overflow-y-scroll border-x lg:col-span-5">
			<div className="flex items-center justify-between">
				<h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
				<ArrowPathIcon
					onClick={handleRefresh}
					className="h-8 w-8 mr-5 mt-5 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
				/>
			</div>

			<div>
				<TweetBox setTweets={setTweets} />
			</div>

			<div>
				{tweets.map((tweet) => (
					<TweetComponent key={tweet._id} tweet={tweet} />
				))}
			</div>
		</div>
	);
};

export default Feed;
