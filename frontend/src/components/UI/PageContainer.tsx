import { FC } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

import { Button, Container } from 'components/UI';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

const Message = styled.p`
  margin-top: 2rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

type PageContainerProps = {
  title?: string;
  message?: string;
  buttonHome?: boolean;
};

const PageContainer: FC<PageContainerProps> = ({
  title,
  message,
  buttonHome,
  children,
}) => (
  <Section>
    <Container>
      {title && <Title>{title}</Title>}

      {message && <Message>{message}</Message>}

      {children}

      {buttonHome && (
        <Buttons>
          <Link href="/" passHref>
            <Button isAnchor>Go Home</Button>
          </Link>
        </Buttons>
      )}
    </Container>
  </Section>
);

export default PageContainer;
