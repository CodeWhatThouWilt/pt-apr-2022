import fruits from "./mockData/fruits.json";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import FruitsIndex from "./components/FruitsIndex";
import FruitShow from "./components/FruitShow";
import FruitForm from "./components/FruitForm";
import FavoriteFruit from "./components/FavoriteFruit";
import SetFavoriteFruit from "./components/SetFavoriteFruit";

function App() {
    return (
        <>
            <h1>Welcome to Fruits App</h1>
            <Navigation />
            <Switch>
                <Route exact path="/">
                    <FruitsIndex fruits={fruits} />
                </Route>
                <Route path="/fruits/new">
                    <FruitForm fruits={fruits} />
                </Route>
                <Route path="/fruits/:fruitId(\d+)">
                    <FruitShow fruits={fruits} />
                </Route>
                <Route path="/fav-fruit">
                    <FavoriteFruit fruits={fruits} />
                </Route>
                <Route path="/set-fav-fruit">
                    <SetFavoriteFruit fruits={fruits} />
                </Route>
                <Route>
                    <h1>Page Not Found</h1>
                </Route>
            </Switch>
        </>
    );
}

export default App;
