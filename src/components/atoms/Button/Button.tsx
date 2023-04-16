import React, { useContext } from 'react';
import { ThemeContext } from '@components/organisms/PracticeContextAPI/PracticeContextAPI';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: Props) => {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
