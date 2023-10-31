# Implementing Thunks

## Install Redux-Thunk

```
npm i redux-thunk
```

## Add Proxy

In your package.json add:

```
"proxy": "proxy url here"
```

## Add Thunk to Middleware

```
import thunk from 'redux-thunk'

...boilerplate code

applyMiddleware(thunk, logger)
```

## Create Thunks

```
const myThunk = () => async (disptach) => {
    const res = await fetch(...);

    if (res.ok) {
        const data = await res.json();
        dispatch(action(data));
        return data;
    }
    return res;
}
```
