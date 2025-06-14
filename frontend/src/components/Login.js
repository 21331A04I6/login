import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3001/api/auth/login", form);

      // Save username in localStorage
      localStorage.setItem("userName", res.data.name);

      // Redirect to Dashboard
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed: " + err.response?.data?.msg || "Unknown error");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
