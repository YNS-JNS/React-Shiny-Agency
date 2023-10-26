// Importing Link from React router dom library:
import { Link } from 'react-router-dom';
// Importing styled-components library:
import styled from 'styled-components';
// Importing clors
import colors from './colors';

// Link:
export const StyledLink = styled(Link)`
   padding: 10px 15px;
   color: ${colors.secondary};
   text-decoration: none;
   font-size: 18px;
   text-align: center;
   ${(props) =>
      props.$isFullLink &&
      `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;
