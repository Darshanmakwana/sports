import Programs from './sections/Programs';
import Success from './sections/Success';
import Training from './sections/Training';
import Management from './sections/Management';
import Opportunities from './sections/Opportunities';

export default function Athletes() {
  return (
    <main className="pt-20">
      <Programs />
      <Success />
      <Training />
      <Management />
      <Opportunities />
    </main>
  );
}