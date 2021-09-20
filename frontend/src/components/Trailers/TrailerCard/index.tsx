import { FC } from 'react';
import { PlayCircle } from 'react-feather';

import { Trailer } from 'types';
import { Card, Overlay } from './styles';

type TrailerCardProps = {
  image?: string;
  position?: number;
  isSkeleton?: boolean;
};

const TrailerCard: FC<TrailerCardProps> = ({ image, position, isSkeleton }) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  if (isSkeleton) {
    return (
      <Card
        variants={item}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    );
  }

  return (
    <Card
      variants={item}
      image={image}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Overlay whileHover={{ opacity: 1 }}>
        <PlayCircle size={48} />
      </Overlay>

      {position && <span>{String(position).padStart(2, '0')}</span>}
    </Card>
  );
};

export default TrailerCard;
