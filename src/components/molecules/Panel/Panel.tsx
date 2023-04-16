import React, { useContext } from 'react';
import { ThemeContext } from '@organisms/PracticeContextAPI/PracticeContextAPI';

interface Props {
  children: React.ReactNode;
  title: string;
}

const Panel = ({ children, title }: Props) => {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default Panel;
