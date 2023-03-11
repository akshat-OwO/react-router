import { useLoaderData, useParams } from "react-router-dom";

const CareerDetails = () => {
    const { id } = useParams();
    const career = useLoaderData();

    return (
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint sapiente totam non? Dicta voluptate eos, tenetur accusamus natus, laudantium numquam blanditiis quis, dolor excepturi dolorum nesciunt illum fugiat. Illum!</p>
            </div>
        </div>
    );
}
 
export default CareerDetails;

// loader function
export const careerDetailsLoader = async ( { params } ) => {
    const { id } = params;

    const res = await fetch('http://localhost:4000/careers/' + id);

    return res.json();
}