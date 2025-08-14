import { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Lazy loading para componentes pesados
const LazyProjects = lazy(() => import('@/components/Projects'));
const LazyContact = lazy(() => import('@/components/Contact'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />

      {/* Lazy loading para melhorar performance */}
      <Suspense fallback={<LoadingSpinner />}>
        <LazyProjects />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <LazyContact />
      </Suspense>

      <Footer />
    </main>
  );
}
