import React from 'react';
import { type ButtonProps } from '@/interfaces';
import clsx from 'clsx';

const Button: React.FC<ButtonProps> = ({
  size,
  shape,
  children,
  onClick,
  className = '',
  type = 'button',
}) => {
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'bg-blue-600 text-white font-medium transition duration-200 hover:bg-blue-700',
        sizeClasses[size],
        shape,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
