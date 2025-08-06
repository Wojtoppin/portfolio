import React from "react";

// Simple SVG icons for LinkedIn and GitHub
const LinkedInIcon = () => (
  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="inline-block align-middle mr-2 text-emerald">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="inline-block align-middle mr-2 text-silver">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex items-center py-4 px-4 sm:px-8 bg-gradient-to-r from-indigo-900 via-gray-900 to-cyan-900 relative">
      {/* Left side: professional note */}
      <div className="flex-1 text-left text-white pr-4 sm:pr-8">
        {/* Long text for desktop, short for mobile */}
        <p className="hidden sm:block text-xl font-bold mb-2 text-[#50C878] drop-shadow-lg">
          Let's Connect!
        </p>
        <p className="hidden sm:block text-md font-medium leading-relaxed text-gray-200">
          Whether you have a question, a creative idea, or a vision for collaboration, I’m always excited to hear from fellow innovators and professionals.
          <span className="block mt-2 text-emerald font-semibold">
            I welcome opportunities to contribute, learn, and grow together.
          </span>
          <span className="block mt-2 text-silver">
            Reach out to discuss new projects, share your thoughts, or simply say hello—your message is valued and appreciated!
          </span>
        </p>
        {/* Short text for mobile */}
        <p className="sm:hidden text-lg font-bold mb-2 text-[#50C878] drop-shadow-lg">
          Contact Me
        </p>
        <p className="sm:hidden text-md font-medium leading-relaxed text-gray-200">
          Let's connect and collaborate! Feel free to reach out anytime.
        </p>
      </div>
      {/* Divider */}
      <div className="h-24 w-px bg-gradient-to-b from-cyan-400 via-indigo-400 to-emerald mx-4 sm:mx-8" />
      {/* Right side: contact links */}
      <div className="flex flex-col items-end text-white space-y-4">
        <a
          href="https://www.linkedin.com/in/wojciech-polit-908b76367/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald transition text-lg font-semibold flex items-center"
        >
          <LinkedInIcon />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
        <a
          href="mailto:wojtopofficial@gmail.com"
          className="hover:text-cyan-300 transition text-lg font-semibold"
        >
          <span className="hidden sm:inline">wojtopofficial@gmail.com</span>
          <span className="sm:hidden">Mail</span>
        </a>
        <a
          href="https://github.com/wojtoppin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-silver transition text-lg font-semibold flex items-center"
        >
          <GitHubIcon />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;