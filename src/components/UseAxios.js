import useAxios from '../hooks/useAxios';

const UseAxios = () => {
  const { data, error, loading } = useAxios({
    method: 'get',
    url: 'posts',
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.error('error', error);
    return <p className="error">{error.message}</p>;
  }

  return (
    <div>
      {data.map(({ userId, id, title, body }) => (
        <div key={id} className="card">
          <p>{title}</p>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
};

export default UseAxios;
