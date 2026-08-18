import LogIn from '@/components/LogIn/LogIn';
import React from 'react';

export const metadata = {
  title: "SportNest - Login",
  description: "Log in to your SportNest account.",
};

const LogInPage = () => {
    return (
        <div>
            <LogIn/>
        </div>
    );
};

export default LogInPage;