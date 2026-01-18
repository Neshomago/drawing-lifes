import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DialogExample = () => {
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
        <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="hidden md:inline-flex">Logo Personalizado</Button>
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
    ) 
}

export default DialogExample;