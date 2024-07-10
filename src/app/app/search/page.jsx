import { ArrowLeftIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import UserSearch from "../components/search-input";
import './custom-styles.css';

// TODO: make it edge once Turbopack supports it.
export const runtime = 'nodejs';

export default function Home({
	searchParams: { customUsername },
}) {

	const username = customUsername || process.env.GITHUB_USERNAME;

	return (
		<div className="custom-container">
			<div className="custom-header">
				<Link
					href={"/app"}
					className="custom-link"
				>
					<ArrowLeftIcon className="custom-icon" />
				</Link>
			</div>
			<nav className="custom-nav" />
			<div className="custom-glow-line-left" />
			<h1 className="custom-search-container">
				<UserSearch user={username} />
			</h1>
			<div className="custom-glow-line-right" />
		</div>
	);	
}
