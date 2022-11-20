import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

const Home: NextPage = () => {
	return (
		<div className="mx-auto max-h-screen overflow-y-hidden lg:max-w-7xl">
			<Head>
				<title>Twitter clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="grid grid-cols-9">
				<Sidebar />

				<Feed />

				<Widgets />
			</main>
		</div>
	);
};

export default Home;
