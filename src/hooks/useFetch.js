import { useState, useEffect } from 'react';

// hook that fetches data from db
const useFetch = (url) => {
    const [data, setData] = useState([]); // variable and function to store data
    const [isPending, setIsPending] = useState(true); // variable and function to check loading status
    const [error, setError] = useState(null); //variable and function to check error status

    // useEffect on the url; returns resulting 'data', 'isPending', and 'error' properties in an object
    useEffect(() => {
        const abortCont = new AbortController(); // allows aborting DOM requests

        // fetching process with a time delay; don't use in production??
        setTimeout(() => {
            // fetch data using url
            fetch(url, { signal: abortCont.signal })
            // if response is not ok, return Error; otherwise return the response parsed to a JSON object
            .then(res => {
                if(!res.ok)
                {
                    throw Error('Could not fetch data for that resource');
                }
                return res.json();
            })
            // set data, set isPending to false, set Error to null
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            // catch errors
            .catch((err) => {
                if(err.name==='AbortError') {
                    console.log('Fetch aborted');
                }
                else {
                    setError(err.message);
                    setIsPending(false);
                }
            })
        }, 5);

        return () => abortCont.abort();
    },[url]);

    return {data, isPending, error}; //returns resulting properties in an object
}

export default useFetch;