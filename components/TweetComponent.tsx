import React, { useEffect, useState } from "react";
import { CommentBody, Tweet } from "../typings";
import TimeAgo from "react-timeago";
import {
	ArrowsRightLeftIcon,
	ArrowUpTrayIcon,
	ChatBubbleOvalLeftEllipsisIcon,
	HeartIcon,
} from "@heroicons/react/24/outline";
import { Comment } from "../typings";
import { useSession } from "next-auth/react";
import { fetchComments } from "../utils/fetchComments";
import toast from "react-hot-toast";

interface Props {
	tweet: Tweet;
}

const TweetComponent = ({ tweet }: Props) => {
	const { data: session } = useSession();
	const [comments, setComments] = useState<Comment[]>([]);
	const [commentBoxVisible, setCommentBoxVisible] = useState<boolean>(false);
	const [input, setInput] = useState<string>("");

	const refreshComments = async () => {
		const comments: Comment[] = await fetchComments(tweet._id);
		setComments(comments);
	};

	useEffect(() => {
		refreshComments();
	}, []);

	const postComemnt = async () => {
		const tweetInfo: CommentBody = {
			comment: input,
			username: session?.user?.name || "Unknown User",
			profileImg: session?.user?.image || "https://links.papareact.com/gll",
			tweetId: tweet._id,
		};

		const result = await fetch(`/api/addComment`, {
			body: JSON.stringify(tweetInfo),
			method: "POST",
		});

		const json = await result.json();
		const newComments = await fetchComments(tweet._id);
		setComments(newComments);

		toast(json.message, {
			icon: "🚀",
		});

		return json;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		postComemnt();

		setInput("");
		setCommentBoxVisible(false);
	};

	return (
		<div className="flex flex-col space-x-3 border-y p-5 border-gray-100">
			<div className="flex space-x-3">
				<img
					className="h-10 w-10 rounded-full object-cover"
					src={tweet.profileImage || "https://links.papareact.com/gll"}
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
					<ChatBubbleOvalLeftEllipsisIcon
						onClick={() => session && setCommentBoxVisible(!commentBoxVisible)}
						className="h-5 w-5"
					/>
					<p>{comments.length}</p>
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

			{commentBoxVisible && (
				<form onSubmit={handleSubmit} className="mt-3 flex space-x-3">
					<input
						className="flex-1 rounded-lg bg-gray-100 p-2 outline-none"
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Write a comment..."
					/>
					<button
						disabled={!input}
						className="text-twitter disabled:text-gray-200"
						type="submit"
					>
						Post
					</button>
				</form>
			)}
			{comments?.length > 0 && (
				<div className="my-2 mt-5 max-h-44 space-y-5 scrollbar-hide overflow-y-scroll border-t border-gray-100 p-5">
					{comments.map((comment) => (
						<div key={comment._id} className="relative flex space-x-2">
							<hr className="absolute left-5 top-10 h-8 border-x border-twitter/30" />
							<img
								className="mt-2 h-7 w-7 rounded-full object-cover"
								src={comment.profileImg}
								alt="profile"
							/>
							<div>
								<div className="flex items-center space-x-1">
									<p className="mr-1 font-bold">{comment.username}</p>
									<p className="hidden text-sm text-gray-500 lg:inline">
										@{comment.username.replace(/\s+/g, "").toLowerCase()}
									</p>
									<TimeAgo
										className="text-sm text-gray-500"
										date={comment._createdAt}
									/>
								</div>
								<p>{comment.comment}</p>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default TweetComponent;
