import React, { useState } from "react";
import ReactDOM from "react-dom/client";

let fetchResolver;

function App() {
    const [data, setData] = useState(null);

    function fetchDogs() {
        return new Promise((resolve) => {
            fetch("https://dog.ceo/api/breeds/image/random")
                .then((response) => response.json())
                .then((result) => setData(result));
            fetchResolver = resolve;
        });
    }

    if (data && fetchResolver) {
        fetchResolver(data);
        fetchResolver = null;
    }

    function onClick(event) {
        event.preventDefault();

        fetchDogs()
            .then((result) => setTimeout(() => window.open("https://www.google.com", "_blank"), 0))
            .catch((error) => console.error(error));
    }

    return <button onClick={onClick}>Click me</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
