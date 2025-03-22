export type CarItemProps = {
  id: number;
  brand: string;
  model: string;
  year: number;
}

export default function CarItem({ brand, model, year }: CarItemProps) {
  return (
      <div className="car-item">
          <p>{brand} {model} ({year})</p>
      </div>
  );
}