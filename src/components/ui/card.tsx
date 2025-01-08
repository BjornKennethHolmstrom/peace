import React from 'react';
import classNames from 'classnames';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  return (
    <div
      className={classNames(
        'bg-white shadow rounded-lg p-4',
        className,
        onClick && 'cursor-pointer hover:shadow-md transition-shadow'
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;

