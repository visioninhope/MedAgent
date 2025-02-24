import { Card } from '@/components/composite/card/Card';

export function HomeScreen() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the App!</h1>
      <Card title="Hello World" description="This is a sample card." />
    </div>
  );
}
