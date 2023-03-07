import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
//   const [searchText, setSearchText] = useState('');
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  
  useEffect(() => {

    const abortController = new AbortController();

      fetch(url, { signal: abortController.signal })
        .then(res => {
          if(!res.ok) {
            throw Error("This page doesn't exist");
          }
          return res.json()
        })
        .then(data => {
          setData(data.results);
          setError(null);
          setIsPending(true);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setIsPending(false);
            setError(err.message);
          }
        })
        
    return () => abortController.abort();

  }, [url])

    return ( 
        { data, isPending, error}
     );
    }
 
export default useFetch;