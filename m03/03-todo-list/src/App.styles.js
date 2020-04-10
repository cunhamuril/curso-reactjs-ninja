import styled from "styled-components";
import Switch from "react-switch";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 0 auto;
  min-height: 520px;

  width: 100%;
  max-width: 1000px;
`;

export const SwitchCustom = styled(Switch)`
  bottom: 15px;
  position: absolute;
  align-self: flex-start;

  box-shadow: 0 0 12px #0033;
`;
