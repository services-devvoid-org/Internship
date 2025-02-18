import React from "react";

function Navbar() {
  const navbarItems = ["Home", "About", "Projects"];

  return (
    <div className="w-full bg-gray-400 px-36 py-6 flex justify-between">
      <h1 className="text-3xl font-semibold">Portfolio</h1>
      <div className="flex gap-x-8 font-light">
        {navbarItems.map((navbarItem) => {
          return <button>{navbarItem}</button>;
        })}
      </div>
    </div>
  );
}

export default Navbar;
