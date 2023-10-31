import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPerson } from "./store/people";

const PersonDetails = () => {
    const dispatch = useDispatch();
    const { personId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState([]);

    const currPerson = useSelector((state) => state.people[personId]);
    console.log(currPerson);
    useEffect(() => {
        dispatch(fetchPerson(personId))
            .then(() => setIsLoading(false))
            .catch(async (res) => {
                const data = await res.json();
                setErrors(data);
            });
    }, [dispatch, personId]);

    return (
        <section>
            <h1>{currPerson.name}</h1>
            <h2>{currPerson?.birth_year}</h2>
        </section>
    );
};

export default PersonDetails;
