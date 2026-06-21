import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { Github } from './Icons';

const Projects = () => {
  const projects = [
    {
      title: "Shadow Guard",
      subtitle: "AI Prompt Injection Detection System",
      description: "An AI-powered cybersecurity platform that detects prompt injection attacks and unsafe LLM inputs in real time. Built to secure generative AI applications.",
      tags: ["React.js", "FastAPI", "Python", "SQLite"],
      github: "https://github.com/ayush17042007/shadowguard-ai-firewall",
      demo: "https://shadowguard-ai-firewall.vercel.app/",
      featured: true
    },
    {
      title: "Venture Intel",
      subtitle: "Agentic AI Startup Research Platform",
      description: "An Agentic AI prototype designed to automate startup due diligence and comprehensive investment research. Leverages AI agents to gather, analyze, and summarize market data.",
      tags: ["React.js", "JavaScript", "AI Agents"],
      github: "#",
      demo: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Showcasing my recent work in full-stack development and AI applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-primary/50 transition-colors duration-300 flex flex-col h-full"
            >
              <div className="p-8 flex-grow flex flex-col relative">
                {/* Decorative background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0 transition-transform duration-500 group-hover:scale-110"></div>
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="p-3 bg-slate-800 rounded-xl text-primary">
                    <Folder size={24} />
                  </div>
                  <div className="flex gap-4">
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative z-10 flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary mb-4 font-medium">{project.subtitle}</p>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-800/80 text-slate-300 text-xs font-mono rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
