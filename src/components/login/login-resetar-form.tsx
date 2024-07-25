'use client';

import passwordReset from '@/actions/password-reset';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '../forms/button';
import Input from '../forms/input';
import ErrorMessage from '../helper/error-message';
import styles from './login-form.module.css';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Resetando...</Button>
      ) : (
        <Button>Resetar senha</Button>
      )}
    </>
  );
}

export default function LoginResetarForm({
  keyToken,
  login,
}: {
  login: string;
  keyToken: string;
}) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <form action={action} className={styles.form}>
      <Input label="Nova Senha" name="password" type="password" />
      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
