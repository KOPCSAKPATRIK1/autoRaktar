import { useEffect, useState } from "preact/hooks";
import { route } from "preact-router";
import Header from "../components/Header";

interface CarDetailProps {
  id?: string;
  path?: string;
}

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  color: string;
}

const CarDetail = ({ id }: CarDetailProps) => {
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    // Autó adatok betöltése localStorage-ból
    const storedCars = localStorage.getItem("carData");
    if (storedCars) {
      const carsArray = JSON.parse(storedCars);
      const foundCar = carsArray.find(
        (c: Car) => c.id === parseInt(id || "0", 10)
      );

      setCar(foundCar);
    }
  }, [id]);

  const handleBack = () => {
    route("/cars");
  };

  const getImageUrl = () => {
    const imageUrl = new URL(
      `../assets/${car.brand.toLowerCase()}${car.model.toLowerCase()}${
        car.year
      }${car.color.toLowerCase()}.jpg`,
      import.meta.url
    ).href;
    return imageUrl;
  };

  return (
    <div>
      <Header />
      <div className="col mb-3">
        <button className="btn btn-outline-primary m-4" onClick={handleBack}>
          Vissza a listához
        </button>
        {car ? (
          <div className="card ">
            <img src={getImageUrl()} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{car.model}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{car.brand}</li>
              <li className="list-group-item">{car.year}</li>
              <li className="list-group-item">{car.color}</li>
            </ul>
          </div>
        ) : (
          <div className="alert alert-info">
            Az autó adatainak betöltése folyamatban van...
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetail;
