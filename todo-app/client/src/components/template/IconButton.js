import React from 'react';
import If from './If';
import { IconButton } from '@material-ui/core';

export default ({ hide, children }) => (
  <If test={!hide}>
    <IconButton>{children}</IconButton>
  </If>
);
