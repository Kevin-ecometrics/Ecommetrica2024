import { useState } from "react";
import axios from "axios";
import "@components/KeyFrames.css";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://ecommetrica.com/api/contact", {
        name,
        email,
        message,
      });
      toast.success("Mensaje enviado correctamente");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className=" flex justify-center items-center flex-col px-8 py-16 mb-16 relative"
      id="contact"
    >
      <div className="h-24 w-24 bg-[#861453] animate-div-2 absolute top-0 left-64 hidden xl:block"></div>
      <h1 className="text-2xl text-[#861453] font-bold text-center md:w-[30%] mb-4">
        Nos encantaría trabajar en tu proyecto
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold mb-12">
        Ponte en Contacto con Nosotros
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-8 gap-4">
        <div>
          <h1 className="md:w-[70%] font-light mb-4">
            Llena la forma para ponernos en contacto o llamar de: 9:00 a.m. a
            6:00 p.m de Lunes a Viernes. para comenzar a darle vida a tus
            proyectos.
          </h1>
          <div className="flex gap-4 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            <div className="flex flex-col">
              {" "}
              <h2 className="text-[#861453] text-xl font-bold">
                Llama o agenda
              </h2>
              <p className="text-[#861453] text-2xl font-bold mb-8">
                <a className="hover:underline" href="tel:+526646429633">
                  +52 664 6429 633
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            <div className="flex flex-col">
              <h2 className="text-[#861453] text-xl font-bold">Correo</h2>
              <p className="text-[#861453] text-2xl font-bold">
                <a
                  className="hover:underline"
                  href="mailto:juanmanuel@ecommetrica.com"
                >
                  juanmanuel@ecommetrica.com{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-full focus:outline-none  p-2 border shadow-xl rounded-lg mb-6"
            />
            <input
              type="email"
              placeholder="Correo"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full focus:outline-none stroke-none p-2 border shadow-xl rounded-lg mb-6"
            />
            <textarea
              type="text"
              placeholder="Mensaje"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="w-full focus:outline-none stroke-none p-2 border shadow-xl rounded-lg mb-6"
            />
            <button
              className="bg-[#861453] hover:bg-opacity-80 text-white rounded-lg"
              disabled={loading}
            >
              <div className="flex gap-4 items-center font-bold px-6 py-2">
                <h1>{loading ? "Enviando..." : "Enviar"} </h1>
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.8374 1.16259L8.31563 10.6863M1.20982 7.20953L17.5563 1.02158C17.6152 0.999018 17.6795 0.99402 17.7412 1.00719C17.803 1.02035 17.8596 1.05112 17.9042 1.09577C17.9489 1.14043 17.9797 1.19705 17.9928 1.25881C18.006 1.32057 18.001 1.38483 17.9784 1.44381L11.7917 17.7935C11.7671 17.8556 11.7241 17.9087 11.6684 17.9456C11.6128 17.9825 11.5471 18.0014 11.4804 17.9999C11.4136 17.9984 11.3489 17.9765 11.295 17.9371C11.2411 17.8977 11.2005 17.8427 11.1787 17.7796L8.42433 10.9908C8.39222 10.8946 8.33818 10.8072 8.26647 10.7355C8.19476 10.6637 8.10736 10.6097 8.01117 10.5776L1.22372 7.82509C1.15977 7.80382 1.10397 7.76329 1.06394 7.70907C1.02391 7.65486 1.0016 7.58959 1.00008 7.5222C0.998562 7.45482 1.0179 7.38861 1.05544 7.33264C1.09299 7.27667 1.14691 7.23367 1.20982 7.20953Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </button>
          </form>
          <Toaster position="top-right" />
        </div>
      </div>
      <div className="h-32 z-30 w-20 bg-[#861453] animate-div absolute bottom-[-140px] right-32 hidden xl:block"></div>
      <div className="border-4 border-[#D9D9D9] bottom-[-280px] z-20 left-4 absolute h-64 w-96"></div>
    </section>
  );
}

export default Contact;
