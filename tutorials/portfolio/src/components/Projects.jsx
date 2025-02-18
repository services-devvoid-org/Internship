import React from "react";

function Projects() {
  const projects = [
    {
      name: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with features like user authentication, product catalog, shopping cart, and secure payment integration. Implemented real-time inventory tracking and order management system with responsive design for all devices.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    },
    {
      name: "AI Image Generator",
      description:
        "Created a web application that generates unique images using AI. Integrated with OpenAI's DALL-E API, featuring custom prompt engineering, image manipulation, and social sharing capabilities. Includes user galleries and favorite collections.",
      tags: ["Next.js", "OpenAI API", "TailwindCSS", "PostgreSQL"],
    },
    {
      name: "Real-Time Chat Application",
      description:
        "Developed a real-time messaging platform with features like group chats, direct messages, and file sharing. Implemented WebSocket for instant message delivery, user presence indicators, and message encryption for privacy.",
      tags: ["Socket.io", "React", "Node.js", "Firebase", "WebRTC"],
    },
    {
      name: "Task Management Dashboard",
      description:
        "Built a comprehensive project management tool with drag-and-drop task organization, team collaboration features, and automated deadline reminders. Includes detailed analytics and progress tracking visualizations.",
      tags: ["Vue.js", "Vuex", "Python", "Django", "Docker"],
    },
    {
      name: "Fitness Tracking App",
      description:
        "Mobile-first application for tracking workouts, nutrition, and fitness goals. Features include custom workout plans, progress charts, and integration with popular fitness devices. Implemented machine learning for personalized recommendations.",
      tags: ["React Native", "TypeScript", "GraphQL", "AWS"],
    },
    {
      name: "Weather Forecast Dashboard",
      description:
        "Created an interactive weather dashboard that provides real-time weather updates, forecasts, and severe weather alerts. Integrated multiple weather APIs for accurate data and implemented geolocation for automatic location detection.",
      tags: ["JavaScript", "Weather API", "Chart.js", "PWA"],
    },
  ];

  return (
    <div className="w-full h-screen flex">
      <div className="px-36 my-auto">
        <h1 className="text-4xl font-semibold mb-10">My Projects</h1>
        <div className="grid grid-cols-3 gap-6">
          {projects.map((project) => {
            return (
              <div className="bg-gray-300 px-10 py-4 rounded-lg hover:scale-105 duration-200 ease-in-out">
                <h4 className="text-xl font-semibold">{project.name}</h4>
                <p className="mt-4">{project.description}</p>
                <div className="flex-wrap flex gap-1 mt-4">
                  {project.tags.map((tag) => {
                    return (
                      <div className="bg-gradient-to-br text-sm from-blue-400 to-purple-400 rounded-lg px-4 py-2">
                        {tag}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
