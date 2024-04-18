import { useLoaderData } from "react-router-dom";
import SingleCard from "./SingleCard";


const Cards = () => {
    const cards = useLoaderData();
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {cards.map(card => <SingleCard cardInfo={card} key={card.id}></SingleCard>)}
        </div>
    );
};

export default Cards;