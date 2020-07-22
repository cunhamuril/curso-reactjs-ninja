import styled from 'styled-components';
import { Toolbar as MaterialToolbar } from '@material-ui/core';

import { ReactComponent as MainLogo } from '../../assets/images/logo-react-zzaria.svg';

export const LogoContainer = styled.div`
  flex-grow: 1;
`;

export const Logo = styled(MainLogo)`
  width: 200px;
  height: 50px;

  path {
    fill: #fff;
  }

  line {
    stroke: #fff;
  }
`;

export const Toolbar = styled(MaterialToolbar)`
  width: 100%;
  max-width: 960px;

  margin: 0 auto;
`;

export const Content = styled.main`
  padding: 20px;
`;
