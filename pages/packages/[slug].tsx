import { useRouter } from 'next/router';
import Head from 'next/head';

export default function PackageDetail() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{slug} | Travel Package</title>
      </Head>
      <main className="p-6">
        <h1 className="text-2xl font-bold">Package: {slug}</h1>
      </main>
    </>
  );
}
