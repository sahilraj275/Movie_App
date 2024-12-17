import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-16 px-8">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-indigo-400">About MovieVerse</h1>
        <p className="text-lg mt-4 text-gray-300 max-w-2xl mx-auto">
          MovieVerse is your one-stop destination for exploring movies, TV
          shows, and more. Dive into detailed information about your favorite
          films and actors, discover new releases, and stay up-to-date with
          trending titles.
        </p>
      </header>

      <section className="w-full max-w-5xl">
        <div className="bg-zinc-800 rounded-lg shadow-xl p-8 mb-10">
          <h2 className="text-3xl font-semibold text-indigo-300 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            At MovieVerse, we aim to bring you closer to the world of cinema by
            offering an immersive experience where you can explore movie
            trailers, cast details, and more. From blockbuster hits to hidden
            gems, we make it easy for you to find your next watch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-800 rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-indigo-300 mb-4">
              Why MovieVerse?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Comprehensive details on movies, TV shows, and actors.</li>
              <li>Clean, intuitive UI for an enhanced user experience.</li>
              <li>Mobile-responsive design for seamless browsing.</li>
              <li>Curated collections, trailers, and recommendations.</li>
            </ul>
          </div>
          <div className="bg-zinc-800 rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-semibold text-indigo-300 mb-4">
              Key Features
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Search and discover movies and TV shows by category.</li>
              <li>
                Detailed cast and crew information with social media links.
              </li>
              <li>Responsive design with optimized image loading.</li>
              <li>
                Easy-to-navigate interface with custom dropdowns and cards.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl mt-12">
        <div className="bg-zinc-800 rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-semibold text-indigo-300 mb-4">
            Meet the Developer
          </h2>
          <p className="text-gray-300 leading-relaxed">
            This project was developed by Md Sahil Raj, a dedicated web
            developer and digital creator passionate about building immersive,
            visually engaging web applications.
          </p>
          <div className="flex items-center mt-6">
            <Link
              to="/portfolio"
              className="text-indigo-400 hover:text-indigo-300 underline"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
