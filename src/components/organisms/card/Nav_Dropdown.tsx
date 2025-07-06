import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

//There is definitely a way to make this usable other places by passing the style in instead of having it hard coded here but I gave up -Iris
export type DropdownItem = {
  label: string;
  to: string;
};



const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className='sm:hidden 'style={styles.dropdown} ref={dropdownRef}>
      <button  onClick={toggleDropdown} style={styles.button}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </button>
      <div  style={{
        ...styles.content,
        ...(isOpen ? styles.contentVisible : {})
      }}>
                 <Link to="/about-us" onClick={toggleDropdown} className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2  px-2  block text-right">ABOUT US</Link>
          <Link to="/our-team"  onClick={toggleDropdown} className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 px-2 block text-right" text-right>OUR TEAM</Link>
          <Link to="/projects"  onClick={toggleDropdown} className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 px-2 block text-right">PROJECTS</Link>
          <Link to="/events"  onClick={toggleDropdown} className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 px-2 block text-right">EVENTS</Link>
          <Link to="/sponsors-partners" onClick={toggleDropdown} className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 px-2  block text-right">SPONSORS</Link>
          <Link to="/contact-us" onClick={toggleDropdown} className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 px-2 block text-right ">CONTACT</Link>
          <Link
            to={{ pathname: "/", hash: "#join-us" }}
            rel="noopener noreferrer"
            className="font-Montserrat text-[#2A2D32] text-xl hover:underline font-bold py-2 px-2 block text-right"
          >
            JOIN US
          </Link>
      </div>
    </div>
  );
};


const styles = {
  dropdown: {
    position: 'relative' as const,
  },
  button: {
    cursor: 'pointer',
  },
  content: {
    display: 'none',
    position: 'absolute' as const, //I do not know why it wants position as a const -Iris
    backgroundColor: 'white',
    minWidth: '160px',
    minHeight: '100px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxShadow: '0px 8px 16px rgba(0,0,0,0.1)',
    zIndex: 1,
    marginTop: '5px',
    right: '10px'
  },
  contentVisible: {
    display: 'block',
  },
  link: {
    color: 'black',
    padding: '10px 14px',
    textDecoration: 'none',
    display: 'block',
  },
};

export default Dropdown;




