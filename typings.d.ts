export interface Tweet extends TweetBody {
	_id: string;
	_createAt: string;
	_updateAt: string;
	_rev: string;
	_type: "tweet"; // 참조하는 스키마 이름
	blockTweet: boolean;
}

export type TweetBody = {
	text: string;
	username: string;
	profileImage: string;
	image?: string;
};
