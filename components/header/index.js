import React from 'react'
import Link from 'next/link'

const activeLinkClass = 'mh2 no-underline f4 link green'
const linkClass = 'mh2 no-underline black f4 link'

const Anchor = ({ active, children, href }) =>
	<a href={href} className={active ? activeLinkClass : linkClass}>{children}</a>

const Header = ({ activePage }) =>
	<header className="flex flex-row-ns flex-column justify-around items-center">
		<h1 className="dib"><Link href="/"><a className="f2 no-underline black">Matt Hamlin</a></Link></h1>
		<nav className="ml2">
			<ul className="header__list list flex-row justify-between items-center">
				<li className="dib">
					<Link href="/blog" prefetch>
						<Anchor active={activePage === 'blog'} href="/blog">
							✍️ Blog
						</Anchor>
					</Link>
				</li>
				<li className="dib">
					<Link href="/projects" prefetch>
						<Anchor active={activePage === 'projects'} href="/projects">
							✨ Projects
						</Anchor>
					</Link>
				</li>
				<li className="dib">
					<Link href="/travel" prefetch>
						<Anchor active={activePage === 'travel'} href="/travel">
							✈️ Travel
						</Anchor>
					</Link>
				</li>
			</ul>
		</nav>
	</header>

export default Header
