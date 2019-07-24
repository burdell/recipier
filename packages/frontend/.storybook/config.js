import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { Global } from '@emotion/core';

import { CssReset } from '../components/Layout/reset.styles';
import { LayoutStyles, BodyStyles } from '../components/Layout/styles';

addDecorator(s => (
  <div style={{ padding: '1rem;' }}>
    <Global styles={CssReset} />
    <LayoutStyles>
      <BodyStyles>
        <div style={{ padding: '1rem;' }}>{s()}</div>
      </BodyStyles>
    </LayoutStyles>
  </div>
));

const req = require.context('../', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
