import React from 'react';
import If from './If';
import { IconButton } from '@material-ui/core';

export default ({ hide, children, onClick }) => (
  <If test={!hide}>
    <IconButton onClick={onClick}>{children}</IconButton>
  </If>
);
