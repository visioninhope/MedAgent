import { Button } from './Button';
import { Heart } from 'lucide-react';

export default {
  title: 'Core/Button',
  component: Button,
};

export const Default = () => <Button label="Click Me" />;

export const WithIcon = () => (
  <Button label="Next">
     <Heart className="h-6 w-6" />
  </Button>
);

export const IconOnly = () => (
  <Button>
     <Heart className="h-6 w-6" /> {/*not really working at the moment, but ignore for now*/}
  </Button>
);
