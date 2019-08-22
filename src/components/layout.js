import React from 'react';
import Header from './Header';

export default ({ children }) => (
  <div className="m-0 max-w-3xl mx-auto p-5 min-h-screen flex flex-col">
    <Header />
    <div className={'flex-grow'}>{children}</div>
    <footer className={'text-center'}>Thanks for reading</footer>
  </div>
);
