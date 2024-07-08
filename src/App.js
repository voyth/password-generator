import { useState } from "react";

import Layout from "./components/layout/Layout.jsx";
import PasswordDisplay from "./components/password-display/PasswordDisplay.jsx";
import Form from "./components/form/Form.jsx";

import "./styles.css";

export default function App() {
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <PasswordDisplay password={password} />
      <Form onGenerate={setPassword} />
    </Layout>
  );
}
