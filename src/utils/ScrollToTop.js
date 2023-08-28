import { useEffect } from 'react';

function ScrollToTop({ history }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (null);
}

export default (ScrollToTop);