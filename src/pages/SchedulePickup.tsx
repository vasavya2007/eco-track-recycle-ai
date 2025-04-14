import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

const SchedulePickup = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [wasteAmount, setWasteAmount] = useState([2]);
  const [step, setStep] = useState(1);
  const [timeSlot, setTimeSlot] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [wasteType, setWasteType] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState('');
  
  const t = translations[language.code as keyof typeof translations] || translations.en;
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast({
        variant: "destructive",
        title: "Missing date",
        description: "Please select a pickup date",
      });
      return;
    }
    
    if (!timeSlot) {
      toast({
        variant: "destructive",
        title: "Missing time slot",
        description: "Please select a time slot",
      });
      return;
    }
    
    if (!user) {
      toast({
        variant: "destructive",
        title: "Authentication required",
        description: "Please sign in to schedule a pickup",
      });
      return;
    }
    
    try {
      let pickupHour = 9;
      
      if (timeSlot === 'afternoon') {
        pickupHour = 12;
      } else if (timeSlot === 'evening') {
        pickupHour = 15;
      }
      
      const pickupDateTime = new Date(date);
      pickupDateTime.setHours(pickupHour, 0, 0, 0);
      
      const address = `${street}, ${city}, ${state} ${postalCode}`;
      
      const fullNotes = `Waste Type: ${wasteType}\nWaste Amount: ${wasteAmount} items\nDescription: ${description}\n\nAdditional Notes: ${notes}`;
      
      const { error } = await supabase
        .from('pickups')
        .insert({
          user_id: user.id,
          address: address,
          pickup_date: pickupDateTime.toISOString(),
          status: 'scheduled',
          notes: fullNotes
        });
      
      if (error) throw error;
      
      toast({
        title: t.successTitle,
        description: t.successMessage,
        duration: 5000,
      });
      
      setStep(2);
    } catch (error) {
      console.error('Error scheduling pickup:', error);
      toast({
        variant: "destructive",
        title: "Error scheduling pickup",
        description: "Please try again later.",
      });
    }
  };
  
  return (
    <ProtectedRoute>
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
                        <Input 
                          id="street" 
                          value={street}
                          onChange={(e) => setStreet(e.target.value)}
                          required 
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-sm mb-1 font-medium">{t.city}</label>
                          <Input 
                            id="city" 
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required 
                          />
                        </div>
                        <div>
                          <label htmlFor="state" className="block text-sm mb-1 font-medium">{t.state}</label>
                          <Input 
                            id="state" 
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required 
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="postalCode" className="block text-sm mb-1 font-medium">{t.postalCode}</label>
                        <Input 
                          id="postalCode" 
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                          required 
                        />
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
                        <Select value={wasteType} onValueChange={setWasteType}>
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
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
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
                              className="rounded-md pointer-events-auto"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="timeSlot" className="block text-sm mb-1 font-medium">{t.timeSlot}</label>
                          <div className="space-y-2">
                            <Select value={timeSlot} onValueChange={setTimeSlot}>
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
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
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
                    <Button onClick={() => navigate('/dashboard')}>
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
    </ProtectedRoute>
  );
};

export default SchedulePickup;
