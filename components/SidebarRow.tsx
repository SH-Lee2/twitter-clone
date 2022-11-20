import React, { SVGProps } from "react";

interface Props {
	Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
	title: string;
}

const SidebarRow = ({ Icon, title }: Props) => {
	return (
		<div
			className="flex items-center space-x-2 max-w-fit
    px-4 py-3 rounded-full transition-all duration-200 cursor-pointer group hover:bg-gray-100"
		>
			<Icon className="h-6 w-6" />
			<p className="group-hover:text-twitter">{title}</p>
		</div>
	);
};

export default SidebarRow;
