// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/sanity.client";
import { Comment } from "../../typings";

const feedQueury = groq`
	*[_type == "comment" && references(*[_type=="tweet" && _id ==$tweetId]._id)]{
		_id,
		...
	} | order(_createdAt desc)
`;

type Data = {
	comments: Comment[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const { tweetId } = req.query;
	const comments: Comment[] = await client.fetch(feedQueury, {
		tweetId,
	});
	res.status(200).json({ comments });
}
