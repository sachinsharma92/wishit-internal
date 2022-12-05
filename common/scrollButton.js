import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollButton = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 600) {
      setVisible(true)
    }
    else if (scrolled <= 600) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, [])



  return (
    <>
      {visible ? <button className='btn-scroll' onClick={scrollToTop}>< FaArrowUp size={15} /></button > : null
      }
    </>
  );
}

export default ScrollButton;