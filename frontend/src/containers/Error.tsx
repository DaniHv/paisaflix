import type { FC } from 'react';

import useLocale from 'hooks/useLocale';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { PageContainer } from 'components/UI';

const Erro: FC = () => {
  const { t } = useLocale();

  return (
    <Layout>
      <SEO title={t('page_error_title')} />

      <PageContainer
        title={t('page_error_title')}
        message={t('page_error_message')}
        buttonHome
      />
    </Layout>
  );
};

export default Erro;
