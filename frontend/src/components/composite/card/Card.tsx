import { Button } from '@/components/core/button/Button';

export function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
      <Button label="Learn More" />
    </div>
  );
}
