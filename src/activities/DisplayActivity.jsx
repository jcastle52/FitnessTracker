import useMutation from "../api/useMutation";

export default function DisplayActivity({ name, id, token }) {
  const { mutate, loading, error } = useMutation(
    "DELETE",
    "/activities/" + id,
    ["activities"]
  );

  const RemoveActivity = () => {
    mutate();
  };
  if (loading) return <h1>Loading...</h1>;
  if (token) {
    return (
      <li>
        <p>{name}</p>
        {error ? <button>{error}</button> : <button onClick={RemoveActivity}>Delete</button>}
      </li>
    );
  } else return <li key={id}>{name}</li>;
}
