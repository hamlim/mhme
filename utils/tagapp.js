import React from 'react';
import Link from 'next/link';

const TagApp = ({feed}) => {
  let tagSet = new Set();
	feed.forEach(post => {
		if (post.tags) {
			for (let tag of post.tags) {
				if (tag != undefined) {
					tagSet.add(tag);
				}
			}
		}
	});
	let tagArr = [...tagSet];
	return (
		<section className="wrap">
			{tagArr.map((tag, index) => {
				return (
					<ul key={index} className="list">
						<h4 id={tag.toLowerCase()} className="header">{tag}</h4>
						{feed.map((post, index) => {
							if (post.hasOwnProperty('tags') && post.tags.includes(tag)) {
								return (
									<li key={index}><Link href={
										post.route ? post.route : 
										{ pathname: '/blog/post', query: { slug: `${post.slug}` }}}><a className="link">{post.title}</a></Link></li>
								);
							}
						})}
					</ul>
				);
			})}
      <style jsx>{`
        .wrap {
          margin-top: 3rem;
        }

        .link {
          color: var(--a, #F08080);
        }

        .header {
          text-decoration: underline;
          font-size: 1.35rem;
          margin-bottom: 1rem;
        }

        .list {
          list-style-type: none;
          margin-bottom: 2rem;
        }
      `}</style>
		</section>
	)
};

export default TagApp;
