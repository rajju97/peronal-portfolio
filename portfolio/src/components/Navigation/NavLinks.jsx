import React from 'react';

export default function NavLinks({ activeSection, isMobile, setIsMenuOpen }) {
  const sections = ["home", "about", "experience", "projects", "contact"];
  
  const handleClick = (e, section) => {
    e.preventDefault();
    if (isMobile) setIsMenuOpen(false);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ul className={isMobile ? "space-y-3" : "flex space-x-8"}>
      {sections.map((section) => (
        <li key={section}>
          <a 
            href={`#${section}`} 
            onClick={(e) => handleClick(e, section)}
            className={`${isMobile ? 'block py-2' : ''} capitalize hover:text-blue-400 ${activeSection === section ? "text-blue-400 font-medium" : ""}`}
          >
            {section}
          </a>
        </li>
      ))}
    </ul>
  );
}