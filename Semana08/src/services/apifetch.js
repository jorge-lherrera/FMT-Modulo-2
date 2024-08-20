export async function getUsers() {
  const response = await fetch("http://localhost:3000/users", {
    method: "GET",
  });
  const data = await response.json();

  getUsers(response);

  return data;
}
