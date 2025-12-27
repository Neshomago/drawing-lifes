import { MessageCircle } from "lucide-react";

const WhatsAppFloatButton = () => {
  const phoneNumber = "1234567890"; // Reemplaza con tu número de WhatsApp (formato internacional sin +)
  const message = "Hola, me interesa solicitar un logo personalizado";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppFloatButton;
