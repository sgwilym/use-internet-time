import { useState, useEffect } from "react";
import { now } from "dot-beat-time";

type InternetTimeHookOptions = {
  fractional?: boolean;
};

function useInternetTime(options?: InternetTimeHookOptions) {
  const isFractional = options && options.fractional;

  const [time, setTime] = useState(now(isFractional));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(now(isFractional));
    }, 864);

    return () => {
      clearInterval(interval);
    };
  }, [isFractional]);

  return time;
}

export default useInternetTime;
