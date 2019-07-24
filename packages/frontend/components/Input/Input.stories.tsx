import React from 'react';

import { storiesOf } from '@storybook/react';

import { Input } from './component';

storiesOf('Inputs', module).add('input', () => (
  <div style={{ padding: '2rem' }}>
    <Input />
  </div>
));
