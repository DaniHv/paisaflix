import type { FC } from 'react';

import useLocale from 'hooks/useLocale';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import PageContainer from 'components/UI/PageContainer';

const NotFound: FC = () => {
  const { t } = useLocale();

  return (
    <Layout>
      <SEO title={t('page_notfound_title')} />

      <PageContainer
        title={t('page_notfound_title')}
        message={t('page_notfound_message')}
        buttonHome
      />
    </Layout>
  );
};

export default NotFound;
