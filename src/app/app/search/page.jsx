import { ArrowLeftIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import UserSearch from "../components/search-input";
import './custom-styles.css';

export const runtime = 'nodejs';

export default function Home({
	searchParams: { customUsername },
}) {

	const username = customUsername || process.env.GITHUB_USERNAME;
	
	return (
		<div className="flex flex-col items-center w-full h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<div className="absolute top-6 left-6 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-10 lg:left-10">
				<Link href="/app" className="text-zinc-400 hover:text-zinc-200 transition-colors duration-200">
					<ArrowLeftIcon className="w-6 h-6" />
				</Link>
			</div>
			<nav className="animate-fade-in" style={{marginBottom:280}}> 
			</nav>
			<div className="w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 animate-glow" />
			<h1 className="my-8 text-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
				<UserSearch user={username}/>
			</h1>
			<div className="w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 animate-glow" />
		</div>
	);
}
