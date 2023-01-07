import { useEffect, useState } from "react";
import useSWR from "swr";

const LastSalesPage = ({ sales: propsSales }) => {
  const [sales, setSales] = useState(propsSales);

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_KEY}sales.json`,
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const mySales = [];
      for (const key in data) {
        mySales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(mySales);
    }
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(false);
  //   fetch(
  //     `${process.env.NEXT_PUBLIC_API_KEY}sales.json`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const mySales = [];
  //       for (const key in data) {
  //         mySales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }

  //       setSales(mySales);
  //       setIsLoading(false);
  //     });
  // }, []);

  // if (isLoading) {
  //   return <p>loading...</p>;
  // }

  // if (!sales) {
  //   return <p>no data.</p>;
  // }

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !sales) {
    return <p>loading...</p>;
  }

  return (
    <ul>
      {sales?.map((sale) => (
        <li key={sale.id}>
          {sale.username} - {sale.volume}$
        </li>
      ))}
    </ul>
  );
};

export const getStaticProps = async (context) => {
  console.log(context);
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}sales.json`);
  const data = await response.json();

  const mySales = [];
  for (const key in data) {
    mySales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: {
      sales: mySales,
    },
    revalidate: 10,
  };
};

export default LastSalesPage;
