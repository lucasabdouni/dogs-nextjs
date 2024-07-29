import statsGet from '@/actions/stats-get';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

//laze-loading
const ContaEstatisticas = dynamic(
  () => import('@/components/conta/conta-estatisticas'),
  {
    loading: () => <p>Carregando...</p>,
    ssr: false, // Disable SSR for this component
  },
);

export const metadata: Metadata = {
  title: 'Estatisticas | Minha Conta',
  description: 'Logue na sua conta no dogs',
};

export default async function EstatisticaPage() {
  const { data } = await statsGet();

  if (!data) return null;

  return (
    <section>
      <ContaEstatisticas data={data} />
    </section>
  );
}
