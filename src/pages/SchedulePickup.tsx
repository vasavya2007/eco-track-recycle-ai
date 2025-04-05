import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { CalendarDays, MapPin, Truck, Clock, Package, CheckCircle2, Info } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Translations object for multilingual support
const translations = {
  en: {
    title: "Schedule E-waste Pickup",
    subtitle: "Let us collect your electronic waste for proper recycling",
    addressDetails: "Address Details",
    streetAddress: "Street Address",
    city: "City",
    state: "State/Province",
    postalCode: "Postal Code",
    wasteDetails: "E-waste Details",
    wasteType: "Type of E-waste",
    wasteAmount: "Approximate Amount",
    wasteDescription: "Description",
    pickupTime: "Pickup Time",
    selectDate: "Select Date",
    timeSlot: "Time Slot",
    additionalInfo: "Additional Information",
    additionalNotes: "Additional Notes",
    schedulePickup: "Schedule Pickup",
    items: "items",
    successTitle: "Pickup Scheduled!",
    successMessage: "Your pickup has been scheduled. You will receive a confirmation email shortly.",
    small: "Small",
    medium: "Medium",
    large: "Large"
  },
  es: {
    title: "Programar recogida de residuos electrónicos",
    subtitle: "Permitanos recoger sus residuos electrónicos para un reciclaje adecuado",
    addressDetails: "Detalles de la dirección",
    streetAddress: "Dirección",
    city: "Ciudad",
    state: "Estado/Provincia",
    postalCode: "Código Postal",
    wasteDetails: "Detalles de residuos electrónicos",
    wasteType: "Tipo de residuo electrónico",
    wasteAmount: "Cantidad aproximada",
    wasteDescription: "Descripción",
    pickupTime: "Hora de recogida",
    selectDate: "Seleccionar fecha",
    timeSlot: "Franja horaria",
    additionalInfo: "Información adicional",
    additionalNotes: "Notas adicionales",
    schedulePickup: "Programar recogida",
    items: "artículos",
    successTitle: "¡Recogida programada!",
    successMessage: "Su recogida ha sido programada. Recibirá un correo electrónico de confirmación en breve.",
    small: "Pequeño",
    medium: "Mediano",
    large: "Grande"
  },
  fr: {
    title: "Planifier un ramassage de déchets électroniques",
    subtitle: "Laissez-nous collecter vos déchets électroniques pour un recyclage approprié",
    addressDetails: "Détails de l'adresse",
    streetAddress: "Adresse",
    city: "Ville",
    state: "État/Province",
    postalCode: "Code Postal",
    wasteDetails: "Détails des déchets électroniques",
    wasteType: "Type de déchet électronique",
    wasteAmount: "Quantité approximative",
    wasteDescription: "Description",
    pickupTime: "Heure de ramassage",
    selectDate: "Sélectionner une date",
    timeSlot: "Créneau horaire",
    additionalInfo: "Informations supplémentaires",
    additionalNotes: "Notes supplémentaires",
    schedulePickup: "Planifier le ramassage",
    items: "articles",
    successTitle: "Ramassage planifié!",
    successMessage: "Votre ramassage a été planifié. Vous recevrez un e-mail de confirmation sous peu.",
    small: "Petit",
    medium: "Moyen",
    large: "Grand"
  },
  de: {
    title: "Elektronikschrottabholung planen",
    subtitle: "Lassen Sie uns Ihre elektronischen Abfälle für das richtige Recycling abholen",
    addressDetails: "Adressdetails",
    streetAddress: "Straßenadresse",
    city: "Stadt",
    state: "Bundesland/Provinz",
    postalCode: "Postleitzahl",
    wasteDetails: "E-Abfall-Details",
    wasteType: "Art des Elektronikschrotts",
    wasteAmount: "Ungefähre Menge",
    wasteDescription: "Beschreibung",
    pickupTime: "Abholzeit",
    selectDate: "Datum auswählen",
    timeSlot: "Zeitfenster",
    additionalInfo: "Zusätzliche Informationen",
    additionalNotes: "Zusätzliche Notizen",
    schedulePickup: "Abholung planen",
    items: "Gegenstände",
    successTitle: "Abholung geplant!",
    successMessage: "Ihre Abholung wurde geplant. Sie erhalten in Kürze eine Bestätigungs-E-Mail.",
    small: "Klein",
    medium: "Mittel",
    large: "Groß"
  },
  // Add more languages as needed - abbreviated for brevity
  zh: {
    title: "安排电子垃圾回收",
    subtitle: "让我们收集您的电子废物进行适当回收",
    addressDetails: "地址详情",
    streetAddress: "街道地址",
    city: "城市",
    state: "州/省",
    postalCode: "邮政编码",
    wasteDetails: "电子废物详情",
    wasteType: "电子废物类型",
    wasteAmount: "大致数量",
    wasteDescription: "描述",
    pickupTime: "收集时间",
    selectDate: "选择日期",
    timeSlot: "时间段",
    additionalInfo: "附加信息",
    additionalNotes: "附加说明",
    schedulePickup: "安排收集",
    items: "物品",
    successTitle: "已安排收集！",
    successMessage: "您的收集已安排。您将很快收到确认电子邮件。",
    small: "小",
    medium: "中",
    large: "大"
  }
};

const SchedulePickup = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [wasteAmount, setWasteAmount] = useState([2]);
  const [step, setStep] = useState(1);
  
  // Get translations based on current language or fall back to English
  const t = translations[language.code as keyof typeof translations] || translations.en;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Display success message
    toast({
      title: t.successTitle,
      description: t.successMessage,
      duration: 5000,
    });
    
    // Move to success step
    setStep(2);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gradient-to-b from-white to-eco-soft/30">
        <div className="container max-w-4xl">
          {step === 1 ? (
            <>
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
                <p className="text-muted-foreground">{t.subtitle}</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-eco-blue" />
                      {t.addressDetails}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label htmlFor="street" className="block text-sm mb-1 font-medium">{t.streetAddress}</label>
                      <Input id="street" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm mb-1 font-medium">{t.city}</label>
                        <Input id="city" required />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm mb-1 font-medium">{t.state}</label>
                        <Input id="state" required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="postalCode" className="block text-sm mb-1 font-medium">{t.postalCode}</label>
                      <Input id="postalCode" required />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-eco-blue" />
                      {t.wasteDetails}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label htmlFor="wasteType" className="block text-sm mb-1 font-medium">{t.wasteType}</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="computers">Computers & Laptops</SelectItem>
                          <SelectItem value="phones">Phones & Tablets</SelectItem>
                          <SelectItem value="peripherals">Peripherals</SelectItem>
                          <SelectItem value="appliances">Small Appliances</SelectItem>
                          <SelectItem value="batteries">Batteries</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-3 font-medium">{t.wasteAmount}</label>
                      <div className="space-y-4">
                        <Slider 
                          value={wasteAmount} 
                          onValueChange={setWasteAmount} 
                          max={10} 
                          step={1} 
                          className="py-4"
                        />
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">{t.small}</span>
                          <span className="text-sm font-medium">{wasteAmount} {t.items}</span>
                          <span className="text-sm text-muted-foreground">{t.large}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="block text-sm mb-1 font-medium">{t.wasteDescription}</label>
                      <Textarea 
                        id="description" 
                        placeholder="Please describe the items you need to recycle"
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="h-5 w-5 text-eco-blue" />
                      {t.pickupTime}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm mb-3 font-medium">{t.selectDate}</label>
                        <div className="border rounded-md">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => 
                              date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 1))
                            }
                            className="rounded-md"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="timeSlot" className="block text-sm mb-1 font-medium">{t.timeSlot}</label>
                        <div className="space-y-2">
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">9:00 AM - 12:00 PM</SelectItem>
                              <SelectItem value="afternoon">12:00 PM - 3:00 PM</SelectItem>
                              <SelectItem value="evening">3:00 PM - 6:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                          
                          <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>Pickups available Monday-Saturday</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="h-5 w-5 text-eco-blue" />
                      {t.additionalInfo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <label htmlFor="notes" className="block text-sm mb-1 font-medium">{t.additionalNotes}</label>
                      <Textarea 
                        id="notes" 
                        placeholder="Any special instructions for pickup"
                        rows={3}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button type="submit" className="bg-eco-green hover:bg-eco-green-dark">
                      <Truck className="mr-2 h-4 w-4" />
                      {t.schedulePickup}
                    </Button>
                  </CardFooter>
                </Card>
              </form>
            </>
          ) : (
            <Card className="border-eco-green border-2">
              <CardContent className="pt-6 text-center flex flex-col items-center justify-center p-12 space-y-4">
                <div className="bg-eco-green bg-opacity-20 p-4 rounded-full">
                  <CheckCircle2 className="h-16 w-16 text-eco-green" />
                </div>
                <h2 className="text-2xl font-bold">{t.successTitle}</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {t.successMessage}
                </p>
                <div className="pt-4">
                  <Button onClick={() => window.location.href = '/dashboard'}>
                    Go to Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SchedulePickup;
