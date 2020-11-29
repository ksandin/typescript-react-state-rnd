import { useEffect, useState } from "react";

export const useNow = (precision: number = 1000) => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), precision);
    return () => clearInterval(intervalId);
  }, [precision]);
  return now;
};
