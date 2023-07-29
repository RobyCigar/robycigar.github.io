import React, { useEffect, useRef } from 'react';

const useClickOutside = (callback: any) => {
  const ref = useRef<any>();

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return ref;
};

export default useClickOutside;