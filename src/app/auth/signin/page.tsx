import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Signin from '@/components/Signin';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';
type Props = { searchParams: { callbackUrl: string } };

export const metadata: Metadata = {
  title: 'Signin',
  description: 'Signup or Login to Binstagram',
};

export default async function SignInPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/');
  }
  const providers = (await getProviders()) ?? {};
  return (
    <section className='mt-24 flex justify-center'>
      <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />
    </section>
  );
}
