import React from 'react';
import Box from '../../Box';
import Loader from '../../Loader';

export const TableLoader = () => (
  <Box
    width="100%"
    height="100%"
    align="center"
    verticalAlign="middle"
    padding={2}
  >
    <Loader size="medium" />
  </Box>
);

TableLoader.displayName = 'Table.Loader';
