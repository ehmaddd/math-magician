import { useState, useEffect } from 'react';

const Quotes = () => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=learning', {
          headers: {
            'X-Api-Key': 'baoB69sSSBvXDFb2gkXx6w==5nrM0rh00PkzY7G0',
          },
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="quote">
      <ul>
        {data.map((item) => (
          <>
            <code> &quot; </code>
            <li key={item.author}>
              {item.quote}
            </li>
            <code className="code-2"> &nbsp; &quot; </code>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Quotes;
