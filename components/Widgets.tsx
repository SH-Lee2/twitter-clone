import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
const Widgets = () => {
	return (
		<div className="hidden mt-2 px-2 lg:inline col-span-2">
			<div className="flex items-center space-x-2 rounded-full p-3 my-2 bg-gray-100">
				<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
				<input
					className="bg-transparent flex-1 outline-none"
					type="text"
					placeholder="Search Twitter"
				/>
			</div>
			<TwitterTimelineEmbed
				sourceType="profile"
				screenName="elonmusk"
				options={{ height: 600 }}
			/>
		</div>
	);
};

export default Widgets;
