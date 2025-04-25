'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Storage, { STORAGE_KEYS } from './storage';

export default function Links() {
  const [visitedLinks, setVisitedLinks] = useState<string[]>([]);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Load visited links from storage
    const loadVisitedLinks = () => {
      const cached = Storage.get(STORAGE_KEYS.VISITED_LINKS);
      if (cached) {
        setVisitedLinks(cached);
      }
    };

    loadVisitedLinks();
  }, []);

  const handleLinkClick = (href: string) => {
    const newVisited = [...new Set([...visitedLinks, href])];
    setVisitedLinks(newVisited);
    Storage.set(STORAGE_KEYS.VISITED_LINKS, newVisited);
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 4.5 + (i * 0.2),
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const iconSize = 28; // Standardized size for all icons

  const links = [
    { 
      href: "https://github.com/jmlakshmisagar", 
      icon: "fa-brands fa-github", 
      newTab: true,
      tooltip: "Check out my GitHub repositories",
      size: iconSize
    },
    { 
      href: "https://www.linkedin.com/in/jmlakshmisagar/", 
      icon: "fa-brands fa-linkedin", 
      newTab: true,
      tooltip: "Connect with me on LinkedIn",
      size: iconSize
    },
    { 
      href: "mailto:jmlakshmisagar@gmail.com", 
      icon: "fa-solid fa-envelope", 
      newTab: true,
      tooltip: "Send me an email",
      size: iconSize
    },
    { 
      href: "https://leetcode.com/jmlakshmisagar/", 
      icon: "leetcode-icon",
      newTab: true,
      tooltip: "View my LeetCode profile",
      size: iconSize
    },
    { 
      href: "https://drive.google.com/drive/folders/1YGDN4fFEDHPwQp2s2JgAzoylafnoVI6I?usp=sharing", 
      icon: "fa-regular fa-file",
      isResume: true,
      newTab: true, // Changed to true for better UX
      tooltip: "View my resume",
      size: iconSize
    }
  ];

  return (
    <motion.div 
      className="center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4.5, duration: 0.5 }}
    >
      <ul>
        {links.map((link, index) => (
          <motion.li
            key={link.href} // Changed to href for more reliable key
            custom={index}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            className={`${link.isResume ? 'resume-link' : ''} ${
              visitedLinks.includes(link.href) ? 'visited' : ''
            }`}
          >
            <a 
              href={link.href} 
              target={link.newTab ? "_blank" : "_self"}
              rel={link.newTab ? "noopener noreferrer" : undefined}
              className={`tooltip-wrapper ${link.isResume ? 'resume-button' : ''}`}
              onClick={() => handleLinkClick(link.href)}
              data-tooltip={link.tooltip}
            >
              {link.icon === 'leetcode-icon' ? (
                <Image
                  src="/images/leetcode-svgrepo-com.svg"
                  alt="LeetCode"
                  width={link.size}
                  height={link.size}
                  className="leetcode-icon"
                  priority={true}
                  loading="eager"
                />
              ) : (
                <i className={`${link.icon} icon-${link.size}`}></i>
              )}
              {link.isResume && <span className="sr-only">Resume</span>}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}