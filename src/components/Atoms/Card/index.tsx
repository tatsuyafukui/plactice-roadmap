import React, { HTMLAttributes } from 'react';
import style from './style.module.scss';

const Card: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <div {...props} className={[style.root, className].join(' ')} />;
};

export default Card;
