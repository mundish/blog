import React from 'react';
import Layout from '../components/layout';
import StartLink from '../components/StartLink';
import Emoji from '../components/Emoji';

const NotFoundPage = () => (
  <Layout>
    <h1 className={'text-center py-4 text-3xl'}>404: Page not found</h1>
    <p className={'text-center mb-4'}>
      <Emoji emoji={'🙅‍♂️'} label={'nope'} />
      {' Nothing to see here '}
      <Emoji emoji={'🙅‍♂️'} label={'nope'} />
    </p>
    <StartLink />
  </Layout>
);

export default NotFoundPage;
