import Link from "next/link";
import Image from "next/image";
import React, { Suspense } from "react";
import data from "../../../data.json";
import { ProfileOrganizations } from "./components/orgs";
import { RecentActivity } from "./components/recent-activity";
import { getUser } from "./data";
import ResetButton from "./components/ResetButton.jsx";

const navigation = [
	{ name: "Projects", href: "/app/projectsbygit" },
	{ name: "Contact", href: "/app/contactbygit" },
];

export default function Home({ searchParams }) {
	const customUsername = searchParams.customUsername;
	const timestamp = searchParams.timestamp || Date.now();
	const username = customUsername || process.env.GITHUB_USERNAME || data.githubUsername;

	return (
		<Suspense fallback={<p className="text-lg text-zinc-500">Loading...</p>}>
			<div key={`${username}-${timestamp}`} className="relative w-full h-full">
				<ResetButton customUsername={customUsername} />
                <LandingComponent username={username} customUsername={customUsername} timestamp={timestamp}/>
            </div>
		</Suspense>
	)
}

const UserIcon = async ({ promise }) => {

	const user = await promise;

	return (
		<Image alt='👨‍💻' width={90} height={90} src={user.avatar_url || data.avatarUrl} className="float-right rounded-full mx-4 lg:w-40 lg:h-40 md:w-28 md:h-28 w-12 h-12 sm:w-20 sm:h-20" />
	);
};

const UserText = async ({ promise }) => {

	const user = await promise;

	return (
		<p>Hi, my name is {user.name || data.displayName}{'. '}{user.bio}</p>
	);
};

const TryYourself = ({ customUsername, timestamp }) => {

	const href = customUsername 
    ? `?customUsername=${customUsername}&timestamp=${timestamp}&animate=true` 
    : `/app/search?timestamp=${timestamp}`;

	return <Link
		href={href}
		className="text-lg duration-500 text-zinc-500 hover:text-zinc-300 border-dashed p-2 rounded border-2 border-zinc-500 hover:border-zinc-300"
	>
		{
			customUsername ? 'Showing: ' + customUsername : 'Try yourself'
		}
	</Link>;
};

const LandingComponent = async ({  username, customUsername,timestamp }) => {

	// const username = customUsername || process.env.GITHUB_USERNAME || data.githubUsername;
	const promise = getUser(username);

	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href + (customUsername ? `?customUsername=${customUsername}` : '')}
							className="text-lg duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
					<TryYourself customUsername={customUsername} timestamp={timestamp} />
				</ul>
			</nav>
			<div className="w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 animate-glow" />
			<h1 className="flex items-center z-10 text-4xl hover:scale-110 text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl lg:text-9xl whitespace-nowrap bg-clip-text bg-white p-5">
				{username}
				<UserIcon promise={promise} />
			</h1>
			<div className="w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 animate-glow" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-lg text-zinc-500">
					<Suspense fallback={<p>Loading...</p>}>
						<UserText promise={promise} />
						<ProfileOrganizations username={username} />
						<RecentActivity username={username} />
					</Suspense>
				</h2>
			</div>
		</div>
	);
}
