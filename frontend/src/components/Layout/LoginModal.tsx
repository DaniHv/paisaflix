import { FC, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { useAuth, useLayout, useLocale } from 'hooks';
import AuthModal from 'components/Layout/AuthModal';
import { Button, Input, Center } from 'components/UI';

const LoginModal: FC = () => {
  const { loginModal, registerModal } = useLayout();
  const { setAccessToken, setUser } = useAuth();
  const { t } = useLocale();
  const [error, setError] = useState<null | string>(null);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().trim().required(t('forms_field_required')),
    password: Yup.string().trim().required(t('forms_field_required')),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      console.log('submitting');
      try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/login`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: values.email.trim().toLowerCase(),
            password: values.password.trim(),
          }),
        }).then((response) => response.json());

        if (!data.error) {
          setAccessToken(data.accessToken);
          setUser(data.user);
          loginModal.onClose();
        } else {
          setError(t(`forms_errors_${data.error}`));
        }
      } catch (error) {
        setError(t('error_network'));
      }
    },
  });

  return (
    <AuthModal title={t('auth_login')} onClose={loginModal.onClose}>
      <form onSubmit={formik.handleSubmit}>
        <Input
          label={t('forms_email')}
          type="email"
          name="email"
          placeholder={t('forms_email_placeholder')}
          id="login_email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
          required
        />

        <Input
          label={t('forms_password')}
          type="password"
          name="password"
          placeholder={t('forms_password_placeholder')}
          id="login_password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
          required
        />

        {error && <p>{error}</p>}

        <Center>
          <Button type="submit" isLoading={formik.isSubmitting} padding="sm">
            {t('auth_login')}
          </Button>
        </Center>
      </form>

      <a
        onClick={() => {
          loginModal.onClose();
          registerModal.onOpen();
        }}
      >
        {t('auth_register_instead')}
      </a>
    </AuthModal>
  );
};

export default LoginModal;
