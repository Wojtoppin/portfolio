const Header = () => {
  return (
    <header className="w-full flex items-center py-6 px-8 relative bg-gradient-to-r from-cyan-900 via-gray-900 to-indigo-900 shadow-lg">
      <h1 className="text-3xl font-extrabold tracking-wide text-[#BFA181] drop-shadow-lg">
        My <span className="text-[#50C878]">Portfolio</span>
      </h1>
      <nav className="ml-auto text-white">
        <ul className="flex space-x-6 items-center">
          <li>
            <a
              href="https://github.com/wojtoppin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-lg font-semibold hover:text-emerald transition"
            >
              {/* GitHub Icon */}
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="inline-block align-middle mr-2 text-silver"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Wojciech Polit
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
