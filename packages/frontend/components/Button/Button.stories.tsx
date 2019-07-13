import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './';
import { LinkButton } from './LinkButton';

storiesOf('Button', module)
  .add('button', () => (
    <div>
      <Button>Click Me</Button>
    </div>
  ))
  .add('link button', () => <LinkButton href="#">Click Me</LinkButton>);
