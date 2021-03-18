import React from 'react';

const DotIcon = ({ selected }) => {
  const activeColor = "rgba(65,150,212)";
  const inactiveColor = "rgba(208, 224, 240)";
  const fillColor = selected ? activeColor : inactiveColor;

  return (
    <svg className="px-1 animate-pulse" width="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill={fillColor} d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
    </svg>
  );
}

export default DotIcon;