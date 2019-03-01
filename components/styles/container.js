import styled from 'styled-components';


const Container__hover = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Container__boxShadow = styled(Container__hover)`
  height: inherit;
  z-index: 0;

  &:hover {
    -webkit-box-shadow: -1px 13px 42px -12px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 13px 42px -12px rgba(0,0,0,0.75);
    box-shadow: -1px 13px 42px -12px rgba(0,0,0,0.75);
  }
`;

const Container__fade = styled(Container__hover)`
  height: inherit;

  &:hover {
    filter: opacity(0.6);
  }
`;

export { Container__boxShadow, Container__fade, Container__hover }
