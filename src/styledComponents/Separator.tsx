import { styled } from '@mui/material/styles';

import colors from '../consts/colors';

export const Separator = styled('div')({
  height: 40,
  marginRight: 20,
  marginLeft: 20,
  borderLeft: `1px solid ${colors.main}`,
});
