import { NextPage } from 'next';
import Router from 'next/router';
import React from 'react';

import CommonHead from '../components/CommonHead';
import CommonProviders from '../components/CommonProviders';
import Page from '../pages/index';

Router.router = {
  /* eslint-disable @typescript-eslint/no-empty-function */
  prefetch: async () => {},
  push: async () => {},
  /* eslint-enable @typescript-eslint/no-empty-function */
} as never;

export default { title: 'Mui Index' };

// eslint-disable-next-line react/function-component-definition
export const page: NextPage = () => (
  <CommonHead>
    <CommonProviders>
      <Page />
    </CommonProviders>
  </CommonHead>
);
