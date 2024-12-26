import Hero from './sections/Hero';
import Featured from './sections/Featured';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import CallToAction from './sections/CallToAction';

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <Services />
      <Testimonials />
      <CallToAction />
    </main>
  );
}