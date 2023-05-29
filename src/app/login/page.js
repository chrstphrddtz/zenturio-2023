import axios from "axios";
import LoginForm from "../components/LoginForm";

export default async function LoginPage() {
  async function handleLogin(username, password, errorMessage) {
    "use server";

    try {
      const response = await axios.post("http://18.196.82.11/api/token/", {
        username,
        password,
      });

      return response.data;
    } catch (error) {
      console.error(error, errorMessage);
    }
  }

  return (
    <main>
      <LoginForm onSubmit={handleLogin} />
    </main>
  );
}
