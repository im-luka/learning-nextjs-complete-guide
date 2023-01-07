import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const {
    query: { projectId },
  } = useRouter();

  console.log(projectId);

  return <div>The Portfolio Project Page</div>;
};

export default PortfolioProjectPage;
