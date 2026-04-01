import { useAdminData } from "../../hooks/useAdminData";

export function AdminPage() {
  const { data, isLoading, error } = useAdminData();

  if (isLoading) return <p>Loading admin data...</p>;
  if (error) return <p>Error loading admin data</p>;

  return (
    <div>
      <h1>Admin Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
