// import Link from "next/link";
// import Image from "next/image";
// import React, { Suspense } from "react";
// import data from "../../../data.json";
// import { ProfileOrganizations } from "../components/orgs";
// import { RecentActivity } from "../components/recent-activity";
// import { getUser } from "../../app/data";

// const navigation = [
// 	{ name: "Projects", href: "/projects" },
// 	{ name: "Contact", href: "/contact" },
// ];

// export default function Home({ searchParams }) {

// 	return (
// 		<Suspense fallback={<p className="text-lg text-zinc-500">Loading...</p>}>
// 			<LandingComponent searchParams={searchParams} />
// 		</Suspense>
// 	)
// }

// const UserIcon = async ({ promise }) => {

// 	const user = await promise;

// 	return (
// 		<Image alt='👨‍💻' width={100} height={100} src={user.avatar_url || data.avatarUrl} className="float-right rounded-full mx-4" />
// 	);
// };

// const UserText = async ({ promise }) => {

// 	const user = await promise;

// 	return (
// 		<p>Hi, my name is {user.name || data.displayName}{'. '}{user.bio}</p>
// 	);
// };

// const TryYourself = ({ customUsername }) => {

// 	const href = customUsername ? '/' : '/search';

// 	return <Link
// 		href={href}
// 		className="text-lg duration-500 text-zinc-500 hover:text-zinc-300 border-dashed p-2 rounded border-2 border-zinc-500 hover:border-zinc-300"
// 	>
// 		{
// 			customUsername ? 'Showing: ' + customUsername + ', click to cancel ❌' : 'Try yourself'
// 		}
// 	</Link>;
// };

// const LandingComponent = async ({ searchParams: { customUsername } }) => {

// 	const username = customUsername || process.env.GITHUB_USERNAME || data.githubUsername;
// 	const promise = getUser(username);

// 	return (
// 		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
// 			<nav className="my-16 animate-fade-in">
// 				<ul className="flex items-center justify-center gap-4">
// 					{navigation.map((item) => (
// 						<Link
// 							key={item.href}
// 							href={item.href + (customUsername ? `?customUsername=${customUsername}` : '')}
// 							className="text-lg duration-500 text-zinc-500 hover:text-zinc-300"
// 						>
// 							{item.name}
// 						</Link>
// 					))}
// 					<TryYourself customUsername={customUsername} />
// 				</ul>
// 			</nav>
// 			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

// 			<h1 className="flex items-center z-10 text-4xl hover:scale-110 text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-white p-5">
// 				{username}
// 				<UserIcon promise={promise} />
// 			</h1>

// 			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
// 			<div className="my-16 text-center animate-fade-in">
// 				<h2 className="text-lg text-zinc-500">
// 					<Suspense fallback={<p>Loading...</p>}>
// 						<UserText promise={promise} />
// 						<ProfileOrganizations username={username} />
// 						<RecentActivity username={username} />
// 					</Suspense>
// 				</h2>
// 			</div>
// 		</div>
// 	);
// }

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Features = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const router = useRouter();

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const goBack = () => {
    setIsFullScreen(false);
    router.push('/');
  };

  if (isFullScreen) {
    return (
      <div className="fixed inset-0 bg-black text-white p-8">
        <h1 className="text-4xl mb-4">Your Portfolio</h1>
        {/* Add your portfolio content here */}
        <button
          onClick={goBack}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Wanna see your portfolio?</h1>
      <label className="switch">
        <input type="checkbox" onChange={toggleFullScreen} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Features;