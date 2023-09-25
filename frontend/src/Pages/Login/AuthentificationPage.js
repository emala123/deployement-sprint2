// AuthenticationPage.js

import React, { useState } from 'react';
import StudentLogin from './StudentLogin';
import EmployerLogin from './EmployerLogin';

const AuthenticationPage = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (credentials) => {
    // Simulate authentication (replace with actual API calls)
    // For this example, we'll just set the user based on role
    setUser({ role: credentials.role });
  };

  const renderLoginForm = () => {
    if (!user) {
      return (
        <>
          <StudentLogin onLogin={handleLogin} />
          <EmployerLogin onLogin={handleLogin} />
        </>
      );
    } else if (user.role === 'student') {
      return <p>Welcome, Student!</p>;
    } else if (user.role === 'employer') {
      return <p>Welcome, Employer!</p>;
    }
  };

  return (
    <div>
      <h1>Authentication Page</h1>
      {renderLoginForm()}
    </div>
  );
};

export default AuthenticationPage;
