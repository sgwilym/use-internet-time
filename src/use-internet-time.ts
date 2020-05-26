import { useState, useEffect } from "react";
import { now } from "dot-beat-time";

type InternetTimeHookOptions = {
  fractional?: boolean;
  ssr?: boolean;
};

function useInternetTime(options?: InternetTimeHookOptions) {
  const isFractional = options && options.fractional;
  const ssr = options && options.ssr;

  const [time, setTime] = useState(ssr ? "" : now(isFractional));

  useEffect(() => {
    if (ssr) setTime(now(isFractional));

    const interval = setInterval(() => {
      setTime(now(isFractional));
    }, 864);

    return () => {
      clearInterval(interval);
    };
  }, [isFractional, ssr]);

  return time;
}

export default useInternetTime;
