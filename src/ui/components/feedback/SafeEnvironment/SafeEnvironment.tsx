import React from 'react';
import { SafeEnvironmentContainer } from './SafeEnvironment.style';
import { Container } from '@material-ui/core';

// import { Container } from './styles';

const SafeEnvironment: React.FC = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>Ambiente Seguro</Container>
    </SafeEnvironmentContainer>
  );
};

export default SafeEnvironment;
