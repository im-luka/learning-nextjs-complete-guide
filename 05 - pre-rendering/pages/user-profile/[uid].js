const UserIdPage = ({ id }) => {
  return <h2>{id}</h2>;
};

export const getServerSideProps = async (context) => {
  const {
    params: { uid },
  } = context;

  return {
    props: {
      id: "userid-" + uid,
    },
  };
};

export default UserIdPage;
