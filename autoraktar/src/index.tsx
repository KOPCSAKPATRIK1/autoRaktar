import "bootstrap/dist/css/bootstrap.min.css";
import { render } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { CarItemProps } from './components/Car';
import CarItem from './components/Car';
import Header from './components/Header';

export function App() {
	const [cars, setCars] = useState<CarItemProps[]>([]);

	useEffect(() => {
		// Load cars from localStorage on component mount
		const storedCars = localStorage.getItem('carItems');
		if (storedCars) {
			setCars(JSON.parse(storedCars));
		} else {
			// If no cars in localStorage, initialize with default data
			const defaultCars: CarItemProps[] = [
				{ id: 1, brand: "Toyota", model: "Corolla", year: 2018 },
				{ id: 2, brand: "Honda", model: "Civic", year: 2020 },
				{ id: 3, brand: "Ford", model: "Mustang", year: 2019 },
				{ id: 4, brand: "BMW", model: "X5", year: 2021 },
				{ id: 5, brand: "Audi", model: "A4", year: 2022 }
			];
			localStorage.setItem('carItems', JSON.stringify(defaultCars));
			setCars(defaultCars);
		}
	}, []);

	return (
		<div>
			<Header />
			<div>
				<h1>Autó Lista</h1>
				<div className="car-container">
					{cars.map((car) => (
						<CarItem
							key={car.id}
							id={car.id}
							brand={car.brand}
							model={car.model}
							year={car.year}
						/>
					))}
				</div>
			</div>

		</div>
	);
}



render(<App />, document.getElementById('app'));
