const UserProfilePage = ({ username }) => {
  return (
    <>
      <h1>{username}</h1>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;

  return {
    props: { username: "Lux" },
  };
};

export default UserProfilePage;
