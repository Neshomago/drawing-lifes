import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Palette, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CustomLogoCTA = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    style: "",
    colors: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Solicitud Enviada!",
      description: "Pronto nos pondremos en contacto contigo con tu diseño de logo personalizado.",
    });
    setOpen(false);
    setFormData({
      name: "",
      email: "",
      businessType: "",
      style: "",
      colors: "",
      description: "",
    });
  };

  return (
    <section className="my-20 px-6">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-accent via-secondary to-accent p-1 rounded-2xl shadow-[var(--shadow-soft)]">
        <div className="bg-card rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary">Servicio de Diseño Personalizado</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">
                ¿Necesitas un Logo Personalizado?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Trabaja directamente con nuestros artistas talentosos para crear un logo único que represente perfectamente tu marca
              </p>
            </div>
            
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-accent to-secondary hover:opacity-90 transition-opacity text-lg px-8">
                  <Palette className="mr-2 h-5 w-5" />
                  Comenzar
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Solicitud de Logo Personalizado</DialogTitle>
                  <DialogDescription>
                    Cuéntanos sobre tu visión y crearemos algo increíble
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Tu Nombre *</Label>
                      <Input 
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Juan Pérez"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico *</Label>
                      <Input 
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="juan@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessType">Tipo de Negocio/Proyecto *</Label>
                    <Input 
                      id="businessType"
                      required
                      value={formData.businessType}
                      onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      placeholder="ej., Startup Tecnológica, Cafetería, Canal de Gaming"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="style">Estilo Preferido *</Label>
                    <Select 
                      value={formData.style}
                      onValueChange={(value) => setFormData({...formData, style: value})}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un estilo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minimalist">Minimalista</SelectItem>
                        <SelectItem value="modern">Moderno</SelectItem>
                        <SelectItem value="vintage">Vintage</SelectItem>
                        <SelectItem value="playful">Divertido</SelectItem>
                        <SelectItem value="elegant">Elegante</SelectItem>
                        <SelectItem value="bold">Audaz y Colorido</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="colors">Colores Preferidos</Label>
                    <Input 
                      id="colors"
                      value={formData.colors}
                      onChange={(e) => setFormData({...formData, colors: e.target.value})}
                      placeholder="ej., Azul y Dorado, Rosa Pastel, Tema Oscuro"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descripción del Proyecto *</Label>
                    <Textarea 
                      id="description"
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      placeholder="Cuéntanos sobre tu proyecto, qué quieres transmitir, público objetivo, etc."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-gradient-to-r from-accent to-secondary hover:opacity-90 transition-opacity">
                    Enviar Solicitud
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomLogoCTA;
