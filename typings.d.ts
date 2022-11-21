export interface Tweet extends TweetBody {
	_id: string;
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	_type: "tweet"; // 참조하는 스키마 이름
	blockTweet: boolean;
}

export type TweetBody = {
	text: string;
	username: string;
	profileImage: string;
	tweetImage?: string;
};

export interface Comment extends CommentBody {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: "comment";
	_updatedAt: string;
	tweet: {
		_ref: string;
		_type: "reference";
	};
}

export type CommentBody = {
	comment: string;
	tweetId: string;
	username: string;
	profileImg: string;
};
