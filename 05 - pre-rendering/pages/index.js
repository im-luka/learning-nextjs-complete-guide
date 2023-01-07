import path from "path";
import fs from "fs/promises";
import Link from "next/link";
import LastSalesPage from "./last-sales";

const HomePage = ({ products }) => {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link
              href={{ pathname: "/products/[pid]", query: { pid: product.id } }}
            >
              {product.title}
            </Link>
          </li>
        ))}
      </ul>

      <p>
        <Link href={`/user-profile`}>user profile</Link>
      </p>

      <LastSalesPage />
    </>
  );
};

export const getStaticProps = async (context) => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
};

export default HomePage;
