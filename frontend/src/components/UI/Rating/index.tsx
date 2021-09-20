import type { FC } from 'react';

import { Rating as RatingTag, Star } from './styles';

type RatingProps = {
  rating: number;
};

const Rating: FC<RatingProps> = ({ rating }) => (
  <RatingTag>
    {[1, 2, 3, 4, 5].map((i) => {
      let type;

      if (rating >= i) {
        type = 'complete';
      } else if (rating <= i - 1) {
        type = 'empty';
      } else {
        type = 'medium';
      }

      return <Star key={i} type={type} />;
    })}
  </RatingTag>
);

export default Rating;
