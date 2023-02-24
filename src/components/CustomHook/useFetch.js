import { useState, useEffect } from "react";

//passes url as a prop so when the custom hook is used in seperate files it can be linked to different relevant data files
const useFetch = (url) => {
    const [data,setData] = useState(null);
    //isLoading set to true so when content is loading a message displays to inform the customer that the content is loading, -
    //- this is removed below if the data loads or alternativley if there is an error
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch(url)
            .then(res => {
                // if data !res.ok(data response is not ok) then throws the below error message
                if(!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                // returns the json file
              return res.json();
            })
            // if Data from the json file has loaded ok then we set the data and remove any loading/error messages
            .then(data => {
                setData(data)
                setIsLoading(false);
                setError(null);
            })
            // catches previously thrown error and displays it to the screen. removes the displayed loading message as nothing is loading.
            .catch((err => {
                setIsLoading(false);
                setError(err.message);
            }))
    }, [url]);


// returns data - data we're trying to fetch, isLoading - which is true or false depending on if the data is loading,
// and error - if the data is unable to load.
    return { data, isLoading, error }
}

export default useFetch;

// custom hook is passed into the file, data prop is renamed, json server url is passed in, in place of the url prop
// remember to import 'useFetch' if using this.
    // const {data, isLoading, error} = useFetch('http://localhost:8000/');
