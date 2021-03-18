import React, {  useEffect } from 'react';
import Thumbnail from '../Thumbnail';
import DotIcon from '../DotIcon';

const Carousel = ({ children, time }) => {
  const [index, setIndex] = React.useState(0);
  const keys = children.map((child, index) => index);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (index + 1) % keys.length;
      setIndex(newIndex);
    }, time);
    return () => clearInterval(interval);
  });
  
  const _slides = () => {
    return children.map((child, idx) => (
      <Thumbnail key={idx} id={idx} selectedKey={index}>
        {child}
      </Thumbnail>
    ));
  }

  const _sliderDots = () => {
    return keys.map(key => (
      <span key={key} onClick={() => setIndex(key)}>
        {<DotIcon selected={key === index} />}
      </span>
    ));
  }

  return (
    <div className="border-dashed border-2 border-gray-100 p-5 m-auto flex justify-center">
      <div className="grid grid-flow-row auto-rows-max">
        <div className="min-h-100">
          { _slides() }
        </div>
        <div className="flex justify-center mt-2">
          { _sliderDots() }
        </div>
      </div>
    </div>
  );
}

export default Carousel;