import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaMedium,
} from "react-icons/fa";

function Socials() {
  const socials = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/your-profile",
      logo: FaLinkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/your-username",
      logo: FaGithub,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/your-handle",
      logo: FaTwitter,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/your-profile",
      // logo: FaInstagram,
    },
    {
      name: "Medium",
      url: "https://medium.com/@your-username",
      logo: FaMedium,
    },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col translate-x-[84%]">
      {socials.map((social) => {
        const Icon = social.logo;
        // null check
        return (
          <div className="flex text-4xl gap-x-6 hover:-translate-x-[84%] transition-transform ease-in-out duration-500">
            {Icon && <Icon />}
            <a
              href={social.url}
              key={social.name}
              className="text-right w-full"
            >
              {social.name}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Socials;
