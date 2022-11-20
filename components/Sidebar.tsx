import React from "react";

import {
	BellIcon,
	HashtagIcon,
	BookmarkIcon,
	UserIcon,
	HomeIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/outline";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
	return (
		<div className="flex flex-col">
			<img
				className="h-10 w-10"
				src="https://links.papareact.com/drq"
				alt="logo"
			/>
			<SidebarRow Icon={HomeIcon} title="Home" />
			<SidebarRow Icon={HashtagIcon} title="Explore" />
			<SidebarRow Icon={BellIcon} title="Notifications" />
			<SidebarRow Icon={EnvelopeIcon} title="Messages" />
			<SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
			<SidebarRow Icon={UserIcon} title="Sign In" />
		</div>
	);
};

export default Sidebar;
