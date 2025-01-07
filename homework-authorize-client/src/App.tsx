import React, { useState } from 'react';
import { LoginForm } from "./LoginForm";
import axios, {AxiosError} from 'axios';

function App() {

  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/Login", {}, {
        auth: {
          username: encodeURIComponent(formData.login),
          password: encodeURIComponent(formData.password)
        }
      });
      alert("Добро пожаловать, " + formData.login);
    }
    catch(e)
    {
      const error = e as AxiosError;
      alert("Ошибка авторизации пользователя: "+ formData.login + "\n" + error.message)
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm onChange={handleChange} onSubmit={handleSubmit}/>
      </div>
  </div>
  );
}

export default App;
