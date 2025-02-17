import React from "react";

function About() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-200 to-gray-400 flex px-36">
      <div className="my-auto flex flex-col">
        <h1 className="text-5xl font-semibold">About Me</h1>
        <div className="flex gap-x-20">
          <div className="text-justify">
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            itaque excepturi suscipit omnis provident laborum saepe at! Sequi
            voluptates eum aliquam tempore culpa perferendis. Et repudiandae
            nulla quaerat recusandae sint?
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero sint
            beatae a recusandae laborum perspiciatis iure ducimus at, repellat
            veritatis iste eos magnam ex voluptatibus non id sed, eveniet nihil!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            aut blanditiis! Ea iure quo quod? Voluptates molestias rem in ipsa
            vero neque, dolorem quidem qui iusto consequatur ad officiis
            architecto.
          </div>
          <div>
            <div className="w-56 h-auto aspect-square bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
