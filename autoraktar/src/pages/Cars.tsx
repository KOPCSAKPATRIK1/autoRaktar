import { useEffect, useState } from "preact/hooks";
import Header from "../components/Header";
import ViewToggle from "../components/ViewToggle";
import CarItem from "../components/CarItem";

const defaultCars = [
  { id: 1, brand: "Toyota", model: "Corolla", year: 2018, color: "Red" },
  { id: 2, brand: "Honda", model: "Civic", year: 2020, color: "Black" },
  { id: 3, brand: "Ford", model: "Mustang", year: 2019, color: "Blue" },
  { id: 4, brand: "BMW", model: "X5", year: 2021, color: "Red" },
  { id: 5, brand: "Audi", model: "A4", year: 2022, color: "Grey" },
];

const Cars = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Adatok kiolvasása localStorage-ból
    const storedCars = localStorage.getItem("carData");

    if (storedCars) {
      // Ha van adat, betöltjük
      setCars(JSON.parse(storedCars));
    } else {
      // Ha még nincs, akkor az alapértelmezett adatokat mentjük
      localStorage.setItem("carData", JSON.stringify(defaultCars));
      setCars(defaultCars);
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <ViewToggle onViewChange={setIsGridView} />
        <div
          className={
            isGridView
              ? "row row-cols-1 row-cols-md-2 row-cols-lg-3"
              : "row row-cols-1"
          }
        >
          {cars.map((car) => (
            <CarItem
              key={car.id}
              id={car.id}
              brand={car.brand}
              model={car.model}
              year={car.year}
              color={car.color}
              isGridView={isGridView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
