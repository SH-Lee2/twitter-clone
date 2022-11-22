import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
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
	const { data: session } = useSession();
	return (
		<div className="flex flex-col col-span-2 items-center px-4 md:items-start">
			<img
				className="m-3 h-10 w-10"
				src="https://links.papareact.com/drq"
				alt="logo"
			/>
			<SidebarRow Icon={HomeIcon} title="Home" />
			<SidebarRow Icon={HashtagIcon} title="Explore" />
			<SidebarRow Icon={BellIcon} title="Notifications" />
			<SidebarRow Icon={EnvelopeIcon} title="Messages" />
			<SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
			<SidebarRow
				onClick={session ? signOut : signIn}
				Icon={UserIcon}
				title={session ? "Sign out" : "Sign In"}
			/>
		</div>
	);
};

export default Sidebar;
