'use server';

import { USER_POST } from '@/functions/api';
import apiError from '@/functions/api-error';
import { redirect } from 'next/navigation';
import login from './login';

export default async function userPost(state: {}, formData: FormData) {
  const username = formData.get('username') as string | null;
  const email = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;

  try {
    if (!username || !password || !email) throw new Error('Preencha os dados');
    if (password.length < 6)
      throw new Error('A senha deve ter mais de 6 digitos.');
    const { url } = USER_POST();

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    console.log(response);

    if (!response.ok) throw new Error('Email ou usuário ja cadastrados.');

    const { ok } = await login({ ok: true, error: '' }, formData);

    if (!ok) {
      redirect('/login');
    }

    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}
