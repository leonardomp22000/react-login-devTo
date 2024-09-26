import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginFunction } from "./api";
export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmited },
    reset,
    setFocus,
  } = useForm();

  // const [credenciales, setCredenciales] = useState([]);

  async function onSubmit(data) {
    try {
      console.log("Entra a la funcion");
      const res = await loginFunction(data);
      console.log(res.data?.token);
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.error("No se pudo ejecutar correctamente la funcion");
    }
  }

  return (
    <main>
      <section className="flex items-center flex-col ">
        <div>
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
            alt="Imagen devTo"
            className="flex items-center flex-col w-12 pb-6 pt-8"
          />
        </div>
        <h1 className="text-3xl font-bold">Join the DEV Community</h1>
        <h2 className="text-[#404040]">
          DEV Community is a community of 1,656,370 amazing developers
        </h2>
      </section>

      <form
        className="flex flex-col gap-12"
        onSubmit={handleSubmit(onSubmit())}
      >
        <input
          type="text"
          placeholder="name"
          name="name"
          className="border border-black"
          {...register("name", {
            required: { value: true, message: "Campo requerido" },
            minLength: { value: 3, message: "Minimo 3 caracteres" },
            maxLength: { value: 180, message: "Maximo 180 caracteres" },
          })}
        />
        <input
          type="email"
          placeholder="correo"
          name="correo"
          className="border border-black"
          {...register("email", {
            required: { value: true, message: "Campo requerido" },
            minLength: { value: 3, message: "Minimo 3 caracteres" },
            maxLength: { value: 180, message: "Maximo 180 caracteres" },
          })}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          className="border border-black"
          {...register("password", {
            required: { value: true, message: "Campo requerido" },
            minLength: { value: 3, message: "Minimo 3 caracteres" },
            maxLength: { value: 10, message: "Maximo 10 caracteres" },
          })}
        />
        <input type="submit" value="save" className="text-white bg-red-900">
          
        </input>
      </form>

      <form action="" method="post">
        <label htmlFor="POST-name">Nombre:</label>
        <input id="POST-name" type="text" name="name" />
        <input type="submit" value="Save" />
      </form>
    </main>
  );
}
