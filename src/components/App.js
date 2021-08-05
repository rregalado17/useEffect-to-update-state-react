// create your App component here
import React, { useEffect, useState } from 'react' 

function App() {

    const [doggo, setDoggo] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((res) => res.json())
            .then((data) => {
                setDoggo(data.message)
                setIsLoaded(true)
            });
    }, []);

    if(!isLoaded) return <h3>Loading...</h3>
    return <p><img src={doggo} alt="A Random Dog"/></p>
}


export default App