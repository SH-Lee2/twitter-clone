// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../sanity/lib/sanity.client";
import { groq } from "next-sanity";
import { Tweet } from "../../typings";

const feedQueury = groq`
	*[_type == "tweet" && !blockTweet]{
		_id,
		...
	} | order(_createdAt desc)
`;

type Data = {
	tweets: Tweet[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const tweets: Tweet[] = await client.fetch(feedQueury);
	res.status(200).json({ tweets });
}
