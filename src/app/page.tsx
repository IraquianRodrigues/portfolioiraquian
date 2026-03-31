import { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

// Lazy loading para componentes pesados
const LazyProjects = lazy(() => import('@/components/Projects'));
const LazyContact = lazy(() => import('@/components/Contact'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-10 w-10 border-2 border-orange-200 border-t-orange-500"></div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen noise-overlay">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />

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
