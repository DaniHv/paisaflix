import { FC, useState } from 'react';
import { ArrowRight } from 'react-feather';

import { useLocale } from 'hooks';
import { Title, Form, ButtonContainer, Button, SuccessMessage } from './styles';
import { Loading, Input } from 'components/UI';

const NewsletterForm: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmited, setIsSubmited] = useState<boolean>(false);
  const { t } = useLocale();

  const handleFakeSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmited(true);
    }, 1500);
  };

  return (
    <>
      <Title>Join our newsletter</Title>

      {isSubmited ? (
        <SuccessMessage>{t('thank_you_newsletter')}</SuccessMessage>
      ) : (
        <Form onSubmit={handleFakeSubmit}>
          <Input
            type="email"
            placeholder={t('forms_email_placeholder')}
            disabled={isLoading}
          >
            <ButtonContainer>
              <Button>
                {isLoading ? (
                  <Loading size={20} color="#000000" />
                ) : (
                  <ArrowRight size={20} />
                )}
              </Button>
            </ButtonContainer>
          </Input>
        </Form>
      )}
    </>
  );
};

export default NewsletterForm;
