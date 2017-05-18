import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../../components/header';

export default _ => (
  <main className="wrapper">
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>On Projects</title>
    </Head>
    <Header activePage="blog" />
    <header className="Content">
      <h3 className="h3">On Projects</h3>
      <p>
        As my first blog post in over several months, I wanted to touch upon
        the concept of side projects and maybe even jump into what makes them
        so darn difficult.
      </p>
    </header>
    <article className="Content">
      <section>
        <h3 className="mono">Side Projects</h3>
        <p>
          Side projects are most consistently the things that every web developer
          will talk about. If you run into another web developer on your way to Starbucks
          you will most definitely talk about side projects at some point in your
          conversation.
        </p>
        <p>
          They are the part of our lives as web developers that keep us so excited about
          the our work. Being able to explore different ideas and actuall make things
          while doing this exploring is one of the reasons I personally love web development
          so much.
        </p>
        <p>
          Even though I really enjoy working on these side projects, they can sometimes
          be really difficult to deal with. Every step of the process I find difficult
          to go through with.
        </p>
        <h5 className="mono underline">The Side Project Lifecycle</h5>
        <ol>
          <li>The Idea 💡</li>
          <li>The Implementation: 🛠️</li>
          <li>The Completion ✅</li>
        </ol>
        <p>
          I encounter issues in all three steps listed above. The first and third are by and
          far the most difficult steps to actually accomplish. Coming up with a fresh and new
          idea to implement is the second hardest thing I do as a web developer (the first is vertically
          centering things in IE8-11 😄). I consistently need to fall back to helpful repos like
          this one <a
            href="https://github.com/melanierichards/just-build-websites"
            className="link"
          >
            on website ideas
          </a>
          , and if you have read many of the blog posts on my website you will know
          that articles about side projects outnumber the actual number of side projects
          about 30 to one.
        </p>
        <p>
          The second hardest thing to actually finish on that list is the completion stage.
          I always get about a quarter or half-way into a project and then decide to ambandon
          it either because I got tired of the idea, or because I just
          {` didn't `}
          want to work on it anymore.
        </p>
      </section>
      <section>
        <h3 className="mono">Side Projects are fucking hard</h3>
        <p>
          Putting in the effort to continue to do what you do at work, but at home
          and on your time is terrible. I have been trying to stress the need for me
          personally to have a really strict cutoff between work and personal time
          and so far it has worked out alright. But now that I am building projects with
          the same technology that I build my side projects with it gets increasingly
          difficult to notice the difference between work and play.
        </p>
        <p>
          As with every other piece of content I create, I
          {` don't `}
          have a solid
          ending yet for this blog post. And since I would rather push it out in its
          current state then let it sit here in my editor and collect digital dust
          I will leave you the reader with this:
        </p>
        <ul>
          <li>Be careful with your time management</li>
          <li>
            Work on things that interest you truly, not just things that are the new hot shit
          </li>
          <li>Taking breaks is always ok. 👌🏼</li>
        </ul>
      </section>
    </article>
    <style jsx>{`
      .wrapper {
        margin-top: 3rem;
        max-width: var(--width, 45rem);
        margin-left: auto;
        margin-right: auto;
      }
      .h3 {
        font-size: 4rem;
      }
      .mono {
        font-family: monospace;
      }
      .Content * + *,
      .Content {
        margin-top: 1rem;
      }
      .Content {
        line-height: 1.8;
      }
      .underline {
        text-decoration: underline;
      }
    `}</style>
  </main>
);
