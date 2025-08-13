import useMutation from "../api/useMutation";

export default function ActivityForm({ token }) {
  const { mutate, loading, error } = useMutation("POST", "/activities", ["activities"]);

  const addActivity = (formData) => {
    const name = formData.get("name");
    const description = formData.get("description");
    mutate({ name, description });
  };
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>;
  if (token) {
    return (
      <form action={addActivity}>
        <label>
          Activity Name
          <input type="text" name="name" required />
        </label>
        <label>
          Description
          <input type="text" name="description" required />
        </label>
        <button>Add</button>
        {error && <output>{error}</output>}
      </form>
    );
  }
}
