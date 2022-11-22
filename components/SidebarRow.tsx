import React, { SVGProps } from "react";

interface Props {
	Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
	title: string;
	onClick?: () => {};
}

const SidebarRow = ({ Icon, title, onClick }: Props) => {
	return (
		<div
			onClick={() => onClick?.()}
			className="flex items-center space-x-2 max-w-fit
    px-4 py-3 rounded-full transition-all duration-200 cursor-pointer group hover:bg-gray-100"
		>
			<Icon className="h-6 w-6" />
			<p className="hidden text-base font-light md:inline-flex lg:text-xl group-hover:text-twitter">
				{title}
			</p>
		</div>
	);
};

export default SidebarRow;
