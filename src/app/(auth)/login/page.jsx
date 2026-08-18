import LogIn from '@/components/LogIn/LogIn';
import React, { Suspense } from 'react';

export const metadata = {
  title: "SportNest - Login",
  description: "Log in to your SportNest account.",
};

const LogInPage = () => {
    return (
        <div>
            <Suspense fallback={
                <div className="min-h-screen bg-[#f5f7ff] flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
                </div>
            }>
                <LogIn/>
            </Suspense>
        </div>
    );
};

export default LogInPage;