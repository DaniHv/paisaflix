import type { FC } from 'react';

import { Container, Label, Field, Error } from './styles';

type InputProps = React.HTMLProps<HTMLInputElement> & {
  id?: string;
  label?: string;
  error?: string;
};

const Input: FC<InputProps> = ({ id, label, error, children, ...props }) => (
  <Container>
    {label && <Label htmlFor={id}>{label}</Label>}

    <Field id={id} {...props} />

    {error && <Error>{error}</Error>}

    {children}
  </Container>
);

export default Input;
