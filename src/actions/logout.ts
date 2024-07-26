'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function loagout() {
  cookies().delete('token');
  redirect('/login');
}
