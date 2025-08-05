
const Header = () => {
  return (
    <header className="w-full flex items-center py-4 px-8 relative bg-[rgba(27,39,53,0.5)]">
      <h1
        className="text-2xl font-bold tracking-wide text-white text-shadow-lg/30"
      >
        portfolio
      </h1>
      <nav className="ml-auto text-white">
        <ul className="flex space-x-6"><a href="https://github.com/wojtoppin" target="_blank">Wojciech Polit</a></ul>
      </nav>
    </header>
  );
};

export default Header;
