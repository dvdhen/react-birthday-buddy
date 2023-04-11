import data from "./data";
import { useState } from "react";

const BirthDays = () => {
    const [people, setPeople] = useState(data);

    const handleClick = () => {
        setPeople([]);
    }

    return (
        <section className="container">
            <h2>{people.length} Birthdays Today</h2>
            {people.map((person) => {
                const {image, name, age, id} = person;
                return (
                 <article className="person" key={id}>
                    <img src={image} alt="" />
                    <div>
                    <h4>{name}</h4>
                    <hp>{age} years</hp>
                    </div>
                 </article>
                )
            })}
           <button type="button" className="btn" onClick={handleClick}>Clear all</button>

            
        </section>
    )
}

export default BirthDays;