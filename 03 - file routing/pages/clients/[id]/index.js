import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  console.log(router.query);

  const loadProject = () => {
    router.push({
      pathname: "/clients/[id]/[clientprojectId]",
      query: {
        id: router.query.id,
        clientprojectId: "some-project",
      },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProject}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
