
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon, Clock, MapPin, CheckCircle2, Package, Plus, Minus } from 'lucide-react';
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const SchedulePickup = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
  });
  const [items, setItems] = useState([{ name: '', category: '', quantity: 1 }]);
  const [notes, setNotes] = useState('');
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { toast } = useToast();

  const timeSlots = [
    '9:00 AM - 11:00 AM',
    '11:00 AM - 1:00 PM',
    '1:00 PM - 3:00 PM',
    '3:00 PM - 5:00 PM',
    '5:00 PM - 7:00 PM',
  ];

  const deviceCategories = [
    'Computer/Laptop',
    'Smartphone/Tablet',
    'TV/Monitor',
    'Printer/Scanner',
    'Kitchen Appliance',
    'Audio Equipment',
    'Gaming Console',
    'Battery',
    'Cable/Charger',
    'Other'
  ];

  const handleAddItem = () => {
    setItems([...items, { name: '', category: '', quantity: 1 }]);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleItemChange = (index: number, field: string, value: string | number) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  const handleAddressChange = (field: string, value: string) => {
    setAddress({ ...address, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Pickup scheduled successfully!",
        description: `Your e-waste pickup has been scheduled for ${date && format(date, 'PPP')}, ${time}.`,
      });
    }, 1500);
  };

  const goToStep = (newStep: number) => {
    if (newStep === 2 && (!date || !time)) {
      toast({
        variant: "destructive",
        title: "Missing information",
        description: "Please select a date and time for your pickup.",
      });
      return;
    }
    
    if (newStep === 3 && (!address.street || !address.city || !address.state || !address.zip)) {
      toast({
        variant: "destructive",
        title: "Missing information",
        description: "Please complete your address information.",
      });
      return;
    }
    
    if (newStep === 4 && items.some(item => !item.name || !item.category)) {
      toast({
        variant: "destructive",
        title: "Missing information",
        description: "Please provide details for all items.",
      });
      return;
    }
    
    setStep(newStep);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 bg-accent/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Schedule E-Waste Pickup</h1>
            <p className="text-muted-foreground mb-8">
              Let us collect your electronic waste from your doorstep for responsible recycling
            </p>
            
            {!isSuccess ? (
              <div className="bg-white rounded-xl shadow-sm p-6">
                {/* Progress Steps */}
                <div className="flex justify-between mb-8 relative">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted -translate-y-1/2 z-0"></div>
                  
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex flex-col items-center relative z-10">
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                          step === i 
                            ? 'bg-eco-green text-white'
                            : step > i 
                              ? 'bg-eco-green text-white'
                              : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {step > i ? <CheckCircle2 className="h-5 w-5" /> : i}
                      </div>
                      <p className={`text-sm mt-2 ${step === i ? 'font-medium' : 'text-muted-foreground'}`}>
                        {i === 1 && "Schedule"}
                        {i === 2 && "Location"}
                        {i === 3 && "Items"}
                        {i === 4 && "Confirm"}
                      </p>
                    </div>
                  ))}
                </div>
                
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Date & Time */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold mb-4">Select Pickup Date & Time</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Select Date
                          </label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="w-full justify-start text-left"
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, 'PPP') : <span>Pick a date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                disabled={(date) => {
                                  // Disable dates in the past
                                  const today = new Date();
                                  today.setHours(0, 0, 0, 0);
                                  return date < today;
                                }}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Select Time Slot
                          </label>
                          <Select onValueChange={(value) => setTime(value)}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a time slot">
                                <div className="flex items-center">
                                  <Clock className="mr-2 h-4 w-4" />
                                  {time || "Select a time slot"}
                                </div>
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((slot) => (
                                <SelectItem key={slot} value={slot}>
                                  {slot}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 2: Address */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold mb-4">Pickup Location</h2>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Street Address
                          </label>
                          <Input 
                            value={address.street}
                            onChange={(e) => handleAddressChange('street', e.target.value)}
                            placeholder="Enter your street address"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              City
                            </label>
                            <Input 
                              value={address.city}
                              onChange={(e) => handleAddressChange('city', e.target.value)}
                              placeholder="City"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">
                              State
                            </label>
                            <Input 
                              value={address.state}
                              onChange={(e) => handleAddressChange('state', e.target.value)}
                              placeholder="State"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            ZIP Code
                          </label>
                          <Input 
                            value={address.zip}
                            onChange={(e) => handleAddressChange('zip', e.target.value)}
                            placeholder="ZIP Code"
                          />
                        </div>
                        
                        <div className="flex items-start gap-2 mt-2">
                          <MapPin className="h-5 w-5 text-eco-green mt-0.5" />
                          <p className="text-sm text-muted-foreground">
                            Our drivers will contact you 30 minutes before arrival at your location.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 3: Items */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold mb-4">E-Waste Items</h2>
                      
                      <div className="space-y-4">
                        {items.map((item, index) => (
                          <Card key={index}>
                            <CardContent className="pt-6">
                              <div className="flex justify-between items-center mb-4">
                                <h3 className="font-medium">Item {index + 1}</h3>
                                {items.length > 1 && (
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleRemoveItem(index)}
                                  >
                                    <Minus className="h-4 w-4 text-destructive" />
                                  </Button>
                                )}
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium mb-2">
                                    Item Name
                                  </label>
                                  <Input 
                                    value={item.name}
                                    onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                                    placeholder="e.g. Old Laptop"
                                  />
                                </div>
                                
                                <div>
                                  <label className="block text-sm font-medium mb-2">
                                    Category
                                  </label>
                                  <Select 
                                    onValueChange={(value) => handleItemChange(index, 'category', value)}
                                    value={item.category}
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {deviceCategories.map((category) => (
                                        <SelectItem key={category} value={category}>
                                          {category}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                                
                                <div>
                                  <label className="block text-sm font-medium mb-2">
                                    Quantity
                                  </label>
                                  <Input 
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
                                  />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                        
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleAddItem}
                          className="w-full"
                        >
                          <Plus className="mr-2 h-4 w-4" />
                          Add Another Item
                        </Button>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Special Instructions (Optional)
                          </label>
                          <Textarea 
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Any special instructions for our pickup team..."
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 4: Confirm */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold mb-4">Confirm Your Pickup</h2>
                      
                      <Card>
                        <CardContent className="pt-6">
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <CalendarIcon className="h-5 w-5 text-eco-green" />
                              <div>
                                <p className="font-medium">Pickup Date & Time</p>
                                <p className="text-muted-foreground">
                                  {date && format(date, 'PPP')} • {time}
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <MapPin className="h-5 w-5 text-eco-green" />
                              <div>
                                <p className="font-medium">Pickup Location</p>
                                <p className="text-muted-foreground">
                                  {address.street}, {address.city}, {address.state} {address.zip}
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                              <Package className="h-5 w-5 text-eco-green" />
                              <div>
                                <p className="font-medium">Items for Recycling</p>
                                <ul className="text-muted-foreground">
                                  {items.map((item, index) => (
                                    <li key={index}>
                                      {item.quantity}x {item.name} ({item.category})
                                    </li>
                                  ))}
                                </ul>
                                {notes && (
                                  <div className="mt-2">
                                    <p className="font-medium">Special Instructions</p>
                                    <p className="text-muted-foreground">{notes}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <div className="border-t pt-4">
                        <p className="text-sm text-muted-foreground mb-4">
                          By confirming this pickup, you agree to our Terms of Service and Privacy Policy. 
                          Our team will handle your e-waste responsibly and in accordance with environmental regulations.
                        </p>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-eco-green hover:bg-eco-green-dark"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Scheduling..." : "Confirm Pickup"}
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {/* Navigation Buttons */}
                  {step < 4 && (
                    <div className="mt-8 flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => goToStep(step - 1)}
                        disabled={step === 1}
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={() => goToStep(step + 1)}
                      >
                        Continue
                      </Button>
                    </div>
                  )}
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-eco-green/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-eco-green" />
                </div>
                
                <h2 className="text-2xl font-bold mb-2">Pickup Scheduled!</h2>
                <p className="text-muted-foreground mb-6">
                  Your e-waste pickup has been successfully scheduled for {date && format(date, 'PPP')}, {time}.
                </p>
                
                <div className="bg-eco-soft p-4 rounded-lg mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-eco-green mt-1" />
                    <div className="text-left">
                      <p className="font-medium">Pickup Location</p>
                      <p className="text-muted-foreground">
                        {address.street}, {address.city}, {address.state} {address.zip}
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6">
                  A confirmation email has been sent to your registered email address. 
                  You can view and manage your pickups in your dashboard.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" asChild>
                    <a href="/dashboard">View in Dashboard</a>
                  </Button>
                  <Button className="bg-eco-green hover:bg-eco-green-dark" asChild>
                    <a href="/">Return to Home</a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SchedulePickup;
