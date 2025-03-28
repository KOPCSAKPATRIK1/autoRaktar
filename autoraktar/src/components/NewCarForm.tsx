import { useState } from "preact/hooks";
import { CarItemProps } from "../components/CarItem";
import { route } from "preact-router";
import Header from "./Header";

function NewCar() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    const storedCars = localStorage.getItem("carData");
    const cars = storedCars ? JSON.parse(storedCars) : [];

    let maxId = 0;
    for (const car of cars) {
      if (car.id > maxId) {
        maxId = car.id;
      }
    }

    const newCar = {
      id: maxId + 1,
      brand: brand,
      model: model,
      year: year,
      color: color,
    };

    cars.push(newCar);
    localStorage.setItem("carData", JSON.stringify(cars));

    route('/cars')
    
  };

  return (
    <div>
        <Header/>
        <form onSubmit={handleSubmit}>
            <label htmlFor="brand" className="form-label">Márka</label>
            <input type="text" id="brand" className="form-control" value={brand} onInput={(e) => {setBrand(e.target.)}}/>
            
        </form>
    </div>
  );
}

export default NewCar;