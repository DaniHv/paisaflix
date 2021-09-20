import type { FC } from 'react';

import useLocale from 'hooks/useLocale';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { PageContainer } from 'components/UI';

const Unauthenticated: FC = () => {
  const { t } = useLocale();

  return (
    <Layout>
      <SEO title={t('page_unauthenticated_title')} />

      <PageContainer
        title={t('page_unauthenticated_title')}
        message={t('page_unauthenticated_message')}
        buttonHome
      />
    </Layout>
  );
};

export default Unauthenticated;
