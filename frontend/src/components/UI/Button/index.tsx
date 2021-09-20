import { forwardRef } from 'react';
import { useTheme } from '@emotion/react';

import { ButtonTag, AnchorTag } from './styles';
import { Loading } from 'components/UI';

type ButtonProps = React.HTMLProps<HTMLAnchorElement> &
  React.HTMLProps<HTMLButtonElement> & {
    isAnchor?: boolean;
    padding?: 'sm' | 'md' | 'lg' | 'xl';
    bgColor?: string;
    textColor?: string;
    fullWidth?: boolean;
    isLoading?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
  };

const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  (
    {
      isAnchor,
      padding = 'md',
      bgColor = 'main',
      textColor = 'darkText',
      isLoading = false,
      onClick,
      children,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();

    const ButtonElement = isAnchor ? AnchorTag : ButtonTag;

    return (
      <ButtonElement
        padding={padding}
        bgColor={bgColor}
        textColor={textColor}
        isLoading={isLoading}
        whileHover={{
          scale: 1.05,
          boxShadow: `0 0 5px ${theme.colors[bgColor]}`,
        }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <Loading color={theme.colors[textColor]} size={20} />
        ) : (
          children
        )}
      </ButtonElement>
    );
  },
);

Button.displayName = 'Button';

export default Button;
