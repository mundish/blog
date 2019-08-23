import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';

export default ({ children }) => (
  <>
    <Helmet title={'>mundi.sh'} />
    <div className="m-0 max-w-2xl mx-auto p-5 min-h-screen flex flex-col">
      <Header />
      <div className={'flex-grow'}>{children}</div>
      <footer className={'text-center pt-4 mt-8 border-t'}>
        Thanks for reading
      </footer>
    </div>
  </>
);
