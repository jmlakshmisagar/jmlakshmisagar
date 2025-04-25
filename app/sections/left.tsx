'use client';

import { motion } from 'framer-motion';

export default function LeftSection({ onClose }: { onClose: () => void }) {
  const projects = [
    {
      title: "Employee-Management-Auto-Code-Generator",
      shortDescription: "Developed during Mphasis internship - A prototype web application that automates code generation for employee management systems, streamlining client project development.",
      technologies: ["Angular", "Node.js", "Express", "MySQL"],
      type: "Internship Project",
      client: "Mphasis Chennai & Bengaluru",
    },
    {
      title: "Smart-Irrigation-and-Fartigation-in-Arecanut-Farm", 
      shortDescription: "Developed at CISCO-RVCE CoE IoT - An IoT-driven smart irrigation system for arecanut farms using PERN stack, enabling real-time monitoring and automated control.",
      technologies: ["PostgreSQL", "Express", "React", "Node.js","Docker","GitHub Actions"],
      type: "Research Project",
      client: "CISCO-RVCE CoE IoT - JJ Infrastructure",
      github: "https://github.com/CISCO-RVCE-CoE-IoT/Smart-Irrigation-and-Fartigation-in-Arecanut-Farm",
    },
    {
      title: "Eazymass - Effortless Weight Tracker V3",
      shortDescription: "Effortless Weight Tracking User-Friendly Interface Valuable Insights and Analytics Responsive Design for Various Devices Secure Login and Signup Functionality",
      technologies: ["Next.js", "shadcn UI","Tailwind CSS", "Firebase"],
      github: "https://github.com/jmlakshmisagar/Eazymass",
      live: "https://jmlakshmisagar.github.io/EazymassLive/"
    },
    {
      title: "Seat-Allotment-Process",
      shortDescription: "A seat allocation system that assigns students seats based on rank, preferred college, category, and priority according to KEA guidelines, streamlining the merit-based process.",
      technologies: ["Python", "Jupyter Notebook"],
      github: "https://github.com/jmlakshmisagar/Seat-Allotment-Process",
      document: "https://docs.google.com/document/d/1Hvexg4bYJE3dR4D8qfbN8_UiG5Wa8zVPIgNJe1SioUs/edit?tab=t.0"
    },
  ];

  return (
    <motion.div
      className="section-content jakarta"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <motion.button 
        className="close-button"
        onClick={onClose}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(188, 170, 164, 0.2)" }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="close-icon">X</span>
      </motion.button>
      <div className="section-inner">
        <h1 className="section-title fondamento">Selected Projects</h1>
        <div className="projects-container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className={`project-card ${project.type ? `project-${project.type.toLowerCase()}` : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="project-header">
                  <h2 className='fondamento'>{project.title}</h2>
                  {project.client && (
                    <div className="project-badge">{project.client}</div>
                  )}
                </div>
                <p className="project-description">{project.shortDescription}</p>
                <div className="project-footer">
                  <div className="tech-stack">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link tooltip-wrapper" data-tooltip="View Source Code">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    )}
                    {project.document && (
                      <a href={project.document} target="_blank" rel="noopener noreferrer" className="project-link tooltip-wrapper" data-tooltip="View Documentation">
                        <i className="fa-regular fa-file-lines"></i>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link tooltip-wrapper" data-tooltip="View Live Demo">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}