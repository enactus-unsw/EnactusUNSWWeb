import { Link } from 'react-router-dom';

interface EnactusButtonProps {
  to: string; 
  children: React.ReactNode; 
  className?: string; 
  target?: string,
  rel?: string,
}

const EnactusButton: React.FC<EnactusButtonProps> = ({ to, children, target = '', rel = '', className = '' }) => {
  return (
    <Link to={to} target={target} rel={rel}>
      <button
        className={`bg-[#2A2D32] text-center py-2 px-5 rounded-xl font-bold hover:bg-[#585E68] transition ease-in-out hover:-translate-y-1 hover:scale-110 ${className}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default EnactusButton;
