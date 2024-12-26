import Overview from './sections/Overview';
import SportMarketing from './sections/SportMarketing';
import EventManagement from './sections/EventManagement';
import AthleteRepresentation from './sections/AthleteRepresentation';
import Consulting from './sections/Consulting';

export default function Services() {
  return (
    <main className="pt-20">
      <Overview />
      <SportMarketing />
      <EventManagement />
      <AthleteRepresentation />
      <Consulting />
    </main>
  );
}