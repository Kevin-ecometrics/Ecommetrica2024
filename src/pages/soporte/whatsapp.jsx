import { FloatingWhatsApp } from "react-floating-whatsapp";

function Whatsapp() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="526646429633"
        accountName="Ecommetrica"
        avatar="/logo.png"
        chatMessage="Hola, ¿En qué podemos ayudarte?"
        placeholder="Escribe tu mensaje..."
        showPopup={true}
        statusMessage="Estamos en línea"
        headerTitle="Chatea con nosotros en WhatsApp"
        notification={true}
        notificationDelay={60}
        notificationSound={true}
      />
    </div>
  );
}

export default Whatsapp;
