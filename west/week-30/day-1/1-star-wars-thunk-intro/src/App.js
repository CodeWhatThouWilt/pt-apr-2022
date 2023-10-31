import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, NavLink } from "react-router-dom";
import { loadPeople } from "./store/people";
import PersonDetails from "./PersonDetails";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPeople());
    }, [dispatch]);

    const people = useSelector((state) => state.people);
    const peopleArr = Object.values(people);

    return (
        <>
            <nav>
                <ul>
                    {peopleArr.map((person) => (
                        <li key={person.id}>
                            <NavLink to={`/people/${person.id}`}>
                                {person.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <Switch>
                <Route exact path="/">
                    <h1>Select a Star Wars Character</h1>
                </Route>
                <Route path="/people/:personId">
                    <PersonDetails />
                </Route>
            </Switch>
        </>
    );
}

export default App;
