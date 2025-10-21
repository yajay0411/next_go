import React from 'react';

import './MaxWidthContainerLayout.scss';

interface IMaxWidthContainerLayoutProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: number | string;
}

const MaxWidthContainerLayout: React.FC<IMaxWidthContainerLayoutProps> = ({
  children,
  className = '',
  maxWidth = 1048,
}) => {
  const style = {
    [`--${className ? className : 'mwc-wrapper'}-max-width` as string]:
      typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
  };
  return (
    <>
      <div className={className ? className : 'mwc-wrapper'} style={style}>
        {children}
      </div>
    </>
  );
};

export default MaxWidthContainerLayout;
