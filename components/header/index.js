import React from 'react'
import Link from 'next/link'

const activeLinkClass = 'header__link no-underline black f4 green'
const linkClass = 'header__link no-underline black f4'

const Anchor = ({ active, children, href }) =>
	<a href={href} className={active ? activeLinkClass : linkClass}>{children}</a>

const Header = ({ activePage }) =>
	<header className="header flex-row justify-around items-center">
		<h1><Link href="/"><a className="f2 no-underline black">Matt Hamlin</a></Link></h1>
		<nav className="header__nav">
			<ul className="header__list list flex-row justify-between items-center">
				<li>
					<Link href="/blog" prefetch>
						<Anchor active={activePage === 'blog'} href="/blog">
							Blog
						</Anchor>
					</Link>
				</li>
				<li>
					<Link href="/projects" prefetch>
						<Anchor active={activePage === 'projects'} href="/projects">
							Projects
						</Anchor>
					</Link>
				</li>
				<li>
					<Link href="/travel" prefetch>
						<Anchor active={activePage === 'travel'} href="/travel">
							Travel
						</Anchor>
					</Link>
				</li>
			</ul>
		</nav>
		<style jsx global>
			{`
      .header {
        height: 10rem;

        display: grid;
        grid-template-columns: 1fr;

        max-width: var(--width);
        margin: auto;
      }

      .header__link:hover,
      .header__link:focus,
      .name:hover,
      .name:focus {
        text-decoration: underline;
        color: var(--a);
      }

      .header__list > li {
        display: inline-block;
      }

      @media screen and (min-width: 27rem) {
        .header__link {
          padding: 0 .5em;
        }
      }

      @media screen and (min-width: 45rem) {
        .header {
          grid-template-columns: 1fr 1fr;
        }
      }
    `}
		</style>
	</header>

export default Header
