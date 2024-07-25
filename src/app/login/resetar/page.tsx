import LoginResetarForm from '@/components/login/login-resetar-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resetar a senha | Dogs',
  description: 'Resete a sua senha',
};

type ResetarSerachParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function ResetarPage({
  searchParams,
}: ResetarSerachParams) {
  return (
    <section className="animeLeft">
      <h1 className="title">Resete a senha</h1>
      <LoginResetarForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </section>
  );
}
