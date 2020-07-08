import styled from 'styled-components';
import { Button } from '@material-ui/core';

// Importa SVG como um componente do React
import { ReactComponent as MainLogo } from '../../assets/images/logo-react-zzaria.svg';

export const Container = styled.div`
  padding: 40px;
`;

export const Logo = styled(MainLogo)`
  width: 100%;
`;

export const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true,
})`
  /* Especificidade: ao declarar duas vezes a classe no CSS, consegue sobrescrever a classe desejada */
  && {
    padding: 16px;
    max-width: 480px;

    font-size: 24px;
    text-transform: none;
  }
`;
