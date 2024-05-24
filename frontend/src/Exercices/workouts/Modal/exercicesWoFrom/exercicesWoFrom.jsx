import { Fragment, useState } from "react";
import './exercicesWoFrom.css';

export default function ExercicesWOForm() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedExercises, setSelectedExercises] = useState([]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleAddToCart = () => {
        // Logic to add selected exercises to cart
        console.log("Exercises added to cart:", selectedExercises);
    };

    return (
        <Fragment>
            <div className="parentWxercicesWOForm">
                <h3>Choose Exercises</h3>
                <input type="search" placeholder="Search exercise name" value={searchQuery} onChange={handleSearchChange} />
                <button onClick={handleAddToCart}>Add to Cart</button>
                <div>
                    {/* Mapping exercises here */}
                    {selectedExercises.map((exercise, index) => (
                        <div key={index}>
                            <h4>{exercise.name}</h4>
                            <p>{exercise.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}
