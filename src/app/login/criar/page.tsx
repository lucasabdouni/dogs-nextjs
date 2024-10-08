import LoginCriarForm from '@/components/login/login-criar-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crie sua conta',
  description: 'Crie sua conta no dogs',
};

export default async function CriarPage() {
  return (
    <div className="animeleft">
      <h1 className="title">Cadastre-se</h1>
      <LoginCriarForm />
    </div>
  );
}
