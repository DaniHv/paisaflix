import type { FC } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

import Container from 'components/UI/Container';
import useLocale from 'hooks/useLocale';
import InlineButton from 'components/UI/InlineButton';

const SectionTag = styled.section`
  position: relative;
  padding: 4rem 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

type SectionProps = {
  title: string;
  viewMore?: string;
};

const Section: FC<SectionProps> = ({ title, viewMore, children }) => {
  const { t } = useLocale();

  return (
    <SectionTag>
      <Container>
        <Header>
          <h2>{title}</h2>

          {viewMore && (
            <Link href={viewMore} passHref>
              <InlineButton isAnchor>{t('section_viewmore')}</InlineButton>
            </Link>
          )}
        </Header>

        {children}
      </Container>
    </SectionTag>
  );
};

export default Section;
