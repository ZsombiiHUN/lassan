import { useEffect, useState } from 'react';

export const useClientCheck = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMounted(true);
    }
  }, []);

  return mounted;
}; 