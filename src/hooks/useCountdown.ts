import { useState, useEffect } from "react";

const useCountdown = (targetDate: string) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date(targetDate);
    if (isNaN(eventDate.getTime())) {
      console.error("Tanggal tidak valid:", targetDate);
      return;
    }

    const updateCountdown = () => {
      const now = new Date();
      const timeDiff = eventDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return countdown;
};

export default useCountdown;
