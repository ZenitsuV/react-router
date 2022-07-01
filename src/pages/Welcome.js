import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Welcome = () => {
  let content = <p>Welcome new user</p>;

  return (
    <section>
      <h1>The Welcome Page</h1>
      <Routes>
        <Route path="welcome/new-user" element={content}></Route>
      </Routes>
    </section>
  );
};

export default Welcome;
