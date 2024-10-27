import React, { CSSProperties } from 'react';

// Define the interface for the button props
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  borderRadius?: string;
  padding?: string;
  hoverColor?: string;
}

// Define default styles for the button
const defaultButtonStyles: CSSProperties = {
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
};

// Reusable Button Component
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  primary = true,
  borderRadius = '8px',
  padding = '10px 20px',
  hoverColor
}) => {
  // Define the main button styles
  const buttonStyles: CSSProperties = {
    ...defaultButtonStyles,
    backgroundColor: primary ? 'pink' : '#2ecc71',
    borderRadius,
    padding,
  };

  // Define hover styles dynamically with inline events
  const [isHovered, setIsHovered] = React.useState(false);

  // Adjust background color on hover
  const finalButtonStyles: CSSProperties = {
    ...buttonStyles,
    backgroundColor: isHovered ? (hoverColor || (primary ? 'yellow' : 'silver')) : buttonStyles.backgroundColor,
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

  return (
    <button
      style={finalButtonStyles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default Button;
