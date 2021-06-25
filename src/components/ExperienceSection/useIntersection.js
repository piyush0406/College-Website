import { useState, useEffect } from 'react'

const useIntersection = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => {
        setIntersecting(entry.isIntersecting);
     }, {threshold:0.17} ) 

  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
      // eslint-disable-next-line
  }, [])

  return isIntersecting
};

export default useIntersection