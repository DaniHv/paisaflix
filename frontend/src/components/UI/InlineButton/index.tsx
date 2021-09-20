import { forwardRef } from 'react';
import { useTheme } from '@emotion/react';

import { ButtonTag, AnchorTag } from './styles';
import { Loading } from 'components/UI';

type ButtonProps = React.HTMLProps<HTMLAnchorElement> &
  React.HTMLProps<HTMLButtonElement> & {
    isAnchor?: boolean;
    color?: string;
    isLoading?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
  };

const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  (
    { isAnchor, color = 'main', isLoading, onClick, children, ...props },
    ref,
  ) => {
    const theme = useTheme();

    const ButtonElement = isAnchor ? AnchorTag : ButtonTag;

    return (
      <ButtonElement
        color={color}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <Loading color={theme.colors[color]} size={20} />
        ) : (
          children
        )}
      </ButtonElement>
    );
  },
);

Button.displayName = 'Button';

export default Button;
