import About from './sections/About';
import Team from './sections/Team';
import Values from './sections/Values';
import Careers from './sections/Careers';
import Contact from './sections/Contact';

export default function Company() {
  return (
    <main className="pt-20">
      <About />
      <Team />
      <Values />
      <Careers />
      <Contact />
    </main>
  );
}