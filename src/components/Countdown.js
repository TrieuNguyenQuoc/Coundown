import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const [time, setTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const countdown = setInterval(() => {
            setTime(prevTime => {
                let { hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    seconds--;
                } else {
                    if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                    } else {
                        if (hours > 0) {
                            hours--;
                            minutes = 59;
                            seconds = 59;
                        } else {
                            clearInterval(countdown);
                        }
                    }
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => {
            clearInterval(countdown);
        };
    }, []);

    const formatTime = (time) => {
        return time.toString().padStart(2, '0');
    };

    return (
        <div>
            <h1>Countdown</h1>
            <p>{`${formatTime(time.hours)}:${formatTime(time.minutes)}:${formatTime(time.seconds)}`}</p>
        </div>
    );
};

export default Countdown;
