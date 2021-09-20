import type { FC } from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { PageContainer, Loading as LoadingAnimation } from 'components/UI';

const Loading: FC = () => (
  <Layout>
    <SEO />

    <PageContainer>
      <LoadingAnimation />
    </PageContainer>
  </Layout>
);

export default Loading;
