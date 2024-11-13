// components/OnlineStatus.tsx

import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const OnlineStatus: React.FC = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
            toast.success('You are back online!');
        };

        const handleOffline = () => {
            setIsOnline(false);

            toast.error('You are offline. Some features may not be available.');
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // Cleanup listeners on component unmount
        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return null; // This component doesn't render anything visually
};

export default OnlineStatus;
