import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/header';

export default () => (
  <main className="Projects">
    <Head>
      <title>My Projects</title>
    </Head>
    <Header activePage="projects" />
    <article className="wrapper">
      <h3 className="title">My Projects</h3>
      <ul className="projects">
        <li className="project">
          <h4><Link href='/'><a className="link">MattHamlin.me</a></Link></h4>
          <p className="description">
            This website is one of the largest time sinks for me. I consistently spend time testing out other
            techniques, tools, and technologies on this. Over the past two months I have dropped all work on
            anything else (outside of my actual job of course) to revamp this website.
          </p>
        </li>
        <li className="project">
          <h4><a className="link" href="https://goexploring.today/Future-Grid/">Future-Grid</a></h4>
          <p className="description">
            Future-Grid is a complete forward facing css grid system. It is built to support IE8 and up, and uses flexbox, and is also the first and 
            only CSS Grid grid framework. I built this in the span of a short weekend as a test for myself and also as a way to learn more about 
            CSS Grid.
          </p>
        </li>
        <li className="project">
          <h4><a className="link" href="https://goexploring.today">Goexploring.today</a></h4>
          <p className="description">
            Goexploring.today is like my garage, its where I store all my side projects that I have worked on,
            I am in the process of moving some of the projects into their own domains but for now they all live on
            that domain.
          </p>
        </li>
        <li className="project">
          <h4><a className="link" href="https://goexploring.today/colors">Colors</a></h4>
          <p className="description">
            Colors was one of my first React projects, and it stands as one of my few projects that uses technology that
            only really evergreen browsers support (right now the bleeding edge of the project is the <code>fetch</code> api.)
          </p>
        </li>
        <li className="project">
          <h4><a className="link" href="https://goexploring.today/Dollar">Dollar</a></h4>
          <p className="description">
            Dollar was one of my first full on projects. And to this date I still consider it as one of the most ambitious projects
            I have worked on by myself. It involved a lot of crappy JS when I first made it but I am working on refactoring it to
            use react and redux. I think at the moment of writing this it is extremely broken, but I plan on getting back to it
            after I polish off the rest of this website.
          </p>
        </li>
        <li className="project">
          <h4><a className="link" href="https://goexploring.today/bundles">Bundles</a></h4>
          <p className="description">
            Bundles was I believe the first project that I worked on full time, I think Dollar superseeds it in a few places mainly
            because Dollar was more a fully functioning webapp. Bundles still works to this date, however it never really got to
            a place where I was comfortable with it. I ended up spending more and more time building out Dollar over Bundles.
          </p>
        </li>
      </ul>
    </article>
    <style jsx>{`
      .wrapper {
        margin: 1rem;
        max-width: var(--width, 45rem);
      }

      .title {
        font-size: 3rem;
        text-align: center;
      }

      .link {
        color: var(--gray);
        text-decoration: none;
      }

      .link:hover,
      .link:focus {
        color: var(--gray-muted);
      }

      .description {
        font-size: 1.2rem;
        padding: 1em;
      }
      .projects {
        list-style: none;
      }
      .project {
        margin: 1em;
        padding: 1em;
        border: solid 4px var(--gray);
        border-radius: 1em;
      }

      @media screen and (min-width: 30rem) {
        .wrapper {
          margin: 1rem auto;
        }
      }

    `}</style>
  </main>
)