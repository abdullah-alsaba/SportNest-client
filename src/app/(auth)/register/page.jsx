import Register from '@/components/Register/Register';
import React from 'react';

export const metadata = {
  title: "SportNest - Register",
  description: "Create a new SportNest account.",
};

const RegisterPage = () => {
    return (
        <div>
            <Register/>
        </div>
    );
};

export default RegisterPage;