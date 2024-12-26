import Upcoming from './sections/Upcoming';
import Past from './sections/Past';
import Services from './sections/Services';
import Gallery from './sections/Gallery';
import Registration from './sections/Registration';

export default function Events() {
  return (
    <main className="pt-20">
      <Upcoming />
      <Past />
      <Services />
      <Gallery />
      <Registration />
    </main>
  );
}