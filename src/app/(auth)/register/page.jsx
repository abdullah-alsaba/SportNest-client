import Register from '@/components/Register/Register';
import React, { Suspense } from 'react';

export const metadata = {
  title: "SportNest - Register",
  description: "Create a new SportNest account.",
};

const RegisterPage = () => {
    return (
        <div>
            <Suspense fallback={
                <div className="min-h-screen bg-[#f5f7ff] flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
                </div>
            }>
                <Register/>
            </Suspense>
        </div>
    );
};

export default RegisterPage;