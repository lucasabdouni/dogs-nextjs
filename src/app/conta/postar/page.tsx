import ContaPhotoPost from '@/components/conta/conta-photo-post';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Postar | Minha Conta',
  description: 'Logue na sua conta no dogs',
};

export default function PostarPage() {
  return <ContaPhotoPost />;
}
