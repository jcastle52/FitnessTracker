import useQuery from "../api/useQuery";
import DisplayActivity from "./DisplayActivity";
import { useAuth } from "../auth/AuthContext";
import ActivityForm from "./ActivityForm";

export default function ActivitiesPage() {
  const { data, loading, error } = useQuery("/activities", "activities");
  const { token } = useAuth();

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading...</h1>;
  if (data) {
    return (
      <>
        <h1>Activities</h1>
        <p>Imagine all the activities!</p>
        <ul>
          {data.map((element) =>
            <DisplayActivity key={element.id} name={element.name} id={element.id} token={token}/>
          )}
        </ul>
          <ActivityForm token={token}/>
      </>
    );
  }
}
