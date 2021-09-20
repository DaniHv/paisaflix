import { FC } from 'react';
import { PlayCircle } from 'react-feather';

import { Trailer } from 'types';
import { useLocale } from 'hooks';
import Section from 'components/UI/Section';
import { Grid } from './styles';
import { TrailerCard } from 'components/Trailers';

type FeaturedTrailersProps = {
  loading: boolean;
  trailers: Trailer[];
};

const FeaturedTrailers: FC<FeaturedTrailersProps> = ({ loading, trailers }) => {
  const { t } = useLocale();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <Section title={t('featured_trailers')} viewMore="/trailers">
      <Grid variants={container} initial="hidden" animate="show">
        {loading
          ? [...Array(4)].map((_item, i) => <TrailerCard key={i} isSkeleton />)
          : trailers.map((trailer, i) => (
              <TrailerCard
                key={trailer.id}
                image={trailer.image}
                position={i + 1}
              />
            ))}
      </Grid>
    </Section>
  );
};

export default FeaturedTrailers;
