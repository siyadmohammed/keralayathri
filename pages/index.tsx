import Head from 'next/head';
import Navbar from '@/Navbar';
import Footer from '@/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>TravelX | Explore</title>
      </Head>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Welcome to TravelX</h1>
      </main>
      <Footer />
    </>
  );
}
