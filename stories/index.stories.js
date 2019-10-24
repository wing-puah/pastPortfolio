import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, ButtonRound } from '../components/styles/button';

storiesOf('Button', module)
  .add('normal', () => <Button />)
  .add('round', () => <ButtonRound />)
