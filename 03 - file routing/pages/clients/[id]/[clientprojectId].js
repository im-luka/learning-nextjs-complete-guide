import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();

  console.log(router.query);

  return <div>SelectedClientProjectPage</div>;
};

export default SelectedClientProjectPage;
