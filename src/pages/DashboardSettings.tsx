
import React, { useState } from 'react';
import { Layout } from "@/components/layout/Layout";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Bell, CreditCard, Globe, Lock, Shield, User } from 'lucide-react';

const DashboardSettings = () => {
  const { language, setLanguage, languages } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const translations = {
    en: {
      title: "Settings",
      save: "Save Changes",
      saved: "Changes Saved",
      saving: "Saving...",
      sections: {
        profile: "Profile",
        notifications: "Notifications",
        privacy: "Privacy & Security",
        language: "Language & Region",
        payment: "Payment Methods"
      },
      profile: {
        personalInfo: "Personal Information",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        address: "Address",
        city: "City",
        postalCode: "Postal Code",
        country: "Country",
        updatePhoto: "Update Photo",
        twoFactor: "Two-Factor Authentication",
        twoFactorDesc: "Add an additional layer of security to your account"
      },
      notifications: {
        emailNotifications: "Email Notifications",
        pickupReminder: "Pickup Reminders",
        pickupReminderDesc: "Receive reminders about upcoming pickups",
        promotions: "Promotions & Discounts",
        promotionsDesc: "Get notified about new promotions and discounts",
        newsletter: "Newsletter",
        newsletterDesc: "Monthly sustainability tips and updates",
        appNotifications: "App Notifications",
        rewards: "Rewards & Points Updates",
        rewardsDesc: "Get notified about new points and rewards",
        community: "Community Updates",
        communityDesc: "Updates about community initiatives and events",
        education: "Educational Content",
        educationDesc: "New articles, tips, and educational content"
      },
      privacy: {
        accountSecurity: "Account Security",
        password: "Password",
        changePassword: "Change Password",
        dataPrivacy: "Data Privacy",
        analytics: "Analytics Sharing",
        analyticsDesc: "Share anonymous usage data to help us improve",
        marketing: "Marketing Permissions",
        marketingDesc: "Receive personalized marketing communications",
        thirdParty: "Third-party Sharing",
        thirdPartyDesc: "Allow sharing data with trusted partners",
        deleteAccount: "Delete Account",
        deleteDesc: "Permanently delete your account and all associated data",
        deleteAction: "Delete My Account"
      },
      payment: {
        addPayment: "Add Payment Method",
        savedCards: "Saved Cards",
        cardNumber: "Card Number",
        expiryDate: "Expiry Date",
        cvv: "CVV",
        removeCard: "Remove Card",
        addCard: "Add Card"
      }
    },
    es: {
      title: "Ajustes",
      save: "Guardar Cambios",
      saved: "Cambios Guardados",
      saving: "Guardando...",
      sections: {
        profile: "Perfil",
        notifications: "Notificaciones",
        privacy: "Privacidad y Seguridad",
        language: "Idioma y Región",
        payment: "Métodos de Pago"
      },
      profile: {
        personalInfo: "Información Personal",
        name: "Nombre Completo",
        email: "Correo Electrónico",
        phone: "Número de Teléfono",
        address: "Dirección",
        city: "Ciudad",
        postalCode: "Código Postal",
        country: "País",
        updatePhoto: "Actualizar Foto",
        twoFactor: "Autenticación de Dos Factores",
        twoFactorDesc: "Añade una capa adicional de seguridad a tu cuenta"
      },
      notifications: {
        emailNotifications: "Notificaciones por Correo",
        pickupReminder: "Recordatorios de Recogida",
        pickupReminderDesc: "Recibe recordatorios sobre próximas recogidas",
        promotions: "Promociones y Descuentos",
        promotionsDesc: "Recibe notificaciones sobre nuevas promociones y descuentos",
        newsletter: "Boletín Informativo",
        newsletterDesc: "Consejos mensuales de sostenibilidad y actualizaciones",
        appNotifications: "Notificaciones de la Aplicación",
        rewards: "Actualizaciones de Puntos y Recompensas",
        rewardsDesc: "Recibe notificaciones sobre nuevos puntos y recompensas",
        community: "Actualizaciones de la Comunidad",
        communityDesc: "Actualizaciones sobre iniciativas y eventos comunitarios",
        education: "Contenido Educativo",
        educationDesc: "Nuevos artículos, consejos y contenido educativo"
      },
      privacy: {
        accountSecurity: "Seguridad de la Cuenta",
        password: "Contraseña",
        changePassword: "Cambiar Contraseña",
        dataPrivacy: "Privacidad de Datos",
        analytics: "Compartir Analíticas",
        analyticsDesc: "Comparte datos de uso anónimos para ayudarnos a mejorar",
        marketing: "Permisos de Marketing",
        marketingDesc: "Recibe comunicaciones de marketing personalizadas",
        thirdParty: "Compartir con Terceros",
        thirdPartyDesc: "Permitir compartir datos con socios de confianza",
        deleteAccount: "Eliminar Cuenta",
        deleteDesc: "Eliminar permanentemente tu cuenta y todos los datos asociados",
        deleteAction: "Eliminar Mi Cuenta"
      },
      payment: {
        addPayment: "Añadir Método de Pago",
        savedCards: "Tarjetas Guardadas",
        cardNumber: "Número de Tarjeta",
        expiryDate: "Fecha de Vencimiento",
        cvv: "CVV",
        removeCard: "Eliminar Tarjeta",
        addCard: "Añadir Tarjeta"
      }
    }
  };
  
  // Default to English if the language is not supported
  const t = translations[language.code as keyof typeof translations] || translations.en;

  const handleSave = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: t.saved,
        description: "Your settings have been successfully updated.",
      });
    }, 1500);
  };

  const handleLanguageChange = (code: string) => {
    const newLanguage = languages.find(lang => lang.code === code);
    if (newLanguage) {
      setLanguage(newLanguage);
      toast({
        title: "Language Updated",
        description: `Your language preference has been set to ${newLanguage.name}.`,
      });
    }
  };

  return (
    <Layout>
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6 bg-background">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">{t.title}</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
            {/* Settings Tabs */}
            <Tabs defaultValue="profile" orientation="vertical" className="w-full">
              <TabsList className="flex flex-col h-full space-y-2 bg-transparent border-r pr-2 mr-2">
                <TabsTrigger value="profile" className="justify-start">
                  <User className="h-4 w-4 mr-2" />
                  {t.sections.profile}
                </TabsTrigger>
                <TabsTrigger value="notifications" className="justify-start">
                  <Bell className="h-4 w-4 mr-2" />
                  {t.sections.notifications}
                </TabsTrigger>
                <TabsTrigger value="privacy" className="justify-start">
                  <Shield className="h-4 w-4 mr-2" />
                  {t.sections.privacy}
                </TabsTrigger>
                <TabsTrigger value="language" className="justify-start">
                  <Globe className="h-4 w-4 mr-2" />
                  {t.sections.language}
                </TabsTrigger>
                <TabsTrigger value="payment" className="justify-start">
                  <CreditCard className="h-4 w-4 mr-2" />
                  {t.sections.payment}
                </TabsTrigger>
              </TabsList>

              {/* Profile Tab Content */}
              <TabsContent value="profile" className="space-y-6 flex-1">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.sections.profile}</CardTitle>
                    <CardDescription>
                      Update your personal information and profile settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-eco-soft flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://i.pravatar.cc/300" 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <Button variant="outline">{t.profile.updatePhoto}</Button>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">{t.profile.personalInfo}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t.profile.name}</label>
                          <Input defaultValue="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t.profile.email}</label>
                          <Input defaultValue="john.doe@example.com" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t.profile.phone}</label>
                          <Input defaultValue="+1 555 123 4567" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t.profile.address}</label>
                          <Input defaultValue="123 Green Street" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t.profile.city}</label>
                          <Input defaultValue="Eco City" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t.profile.postalCode}</label>
                          <Input defaultValue="12345" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t.profile.country}</label>
                          <Select defaultValue="us">
                            <SelectTrigger>
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="us">United States</SelectItem>
                              <SelectItem value="ca">Canada</SelectItem>
                              <SelectItem value="mx">Mexico</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="es">Spain</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{t.profile.twoFactor}</h3>
                        <p className="text-sm text-muted-foreground">{t.profile.twoFactorDesc}</p>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={handleSave} 
                      disabled={loading}
                      className="bg-eco-green hover:bg-eco-green-dark"
                    >
                      {loading ? t.saving : t.save}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Notifications Tab Content */}
              <TabsContent value="notifications" className="space-y-6 flex-1">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.sections.notifications}</CardTitle>
                    <CardDescription>
                      Manage your notification preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">{t.notifications.emailNotifications}</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{t.notifications.pickupReminder}</h4>
                            <p className="text-sm text-muted-foreground">{t.notifications.pickupReminderDesc}</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{t.notifications.promotions}</h4>
                            <p className="text-sm text-muted-foreground">{t.notifications.promotionsDesc}</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{t.notifications.newsletter}</h4>
                            <p className="text-sm text-muted-foreground">{t.notifications.newsletterDesc}</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">{t.notifications.appNotifications}</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{t.notifications.rewards}</h4>
                            <p className="text-sm text-muted-foreground">{t.notifications.rewardsDesc}</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{t.notifications.community}</h4>
                            <p className="text-sm text-muted-foreground">{t.notifications.communityDesc}</p>
                          </div>
                          <Switch />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{t.notifications.education}</h4>
                            <p className="text-sm text-muted-foreground">{t.notifications.educationDesc}</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={handleSave} 
                      disabled={loading}
                      className="bg-eco-green hover:bg-eco-green-dark"
                    >
                      {loading ? t.saving : t.save}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Privacy Tab Content */}
              <TabsContent value="privacy" className="space-y-6 flex-1">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.sections.privacy}</CardTitle>
                    <CardDescription>
                      Manage your security settings and data privacy preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">{t.privacy.accountSecurity}</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">{t.privacy.password}</label>
                          <div className="flex gap-2">
                            <Input type="password" value="••••••••••••" disabled className="bg-muted" />
                            <Button variant="outline">{t.privacy.changePassword}</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">{t.privacy.dataPrivacy}</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{t.privacy.analytics}</h4>
                            <p className="text-sm text-muted-foreground">{t.privacy.analyticsDesc}</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{t.privacy.marketing}</h4>
                            <p className="text-sm text-muted-foreground">{t.privacy.marketingDesc}</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{t.privacy.thirdParty}</h4>
                            <p className="text-sm text-muted-foreground">{t.privacy.thirdPartyDesc}</p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium text-destructive">{t.privacy.deleteAccount}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{t.privacy.deleteDesc}</p>
                      <Button variant="destructive">{t.privacy.deleteAction}</Button>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={handleSave} 
                      disabled={loading}
                      className="bg-eco-green hover:bg-eco-green-dark"
                    >
                      {loading ? t.saving : t.save}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Language Tab Content */}
              <TabsContent value="language" className="space-y-6 flex-1">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.sections.language}</CardTitle>
                    <CardDescription>
                      Change your language and regional preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Language</label>
                        <Select 
                          defaultValue={language.code}
                          onValueChange={handleLanguageChange}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {languages.map((lang) => (
                              <SelectItem key={lang.code} value={lang.code}>
                                <div className="flex items-center">
                                  <span className="mr-2">{lang.flag}</span>
                                  <span>{lang.name}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Time Zone</label>
                        <Select defaultValue="utc-8">
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utc-8">(UTC-08:00) Pacific Time (US & Canada)</SelectItem>
                            <SelectItem value="utc-5">(UTC-05:00) Eastern Time (US & Canada)</SelectItem>
                            <SelectItem value="utc-6">(UTC-06:00) Central Time (US & Canada)</SelectItem>
                            <SelectItem value="utc-7">(UTC-07:00) Mountain Time (US & Canada)</SelectItem>
                            <SelectItem value="utc+0">(UTC+00:00) London, Edinburgh</SelectItem>
                            <SelectItem value="utc+1">(UTC+01:00) Paris, Madrid</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Date Format</label>
                        <Select defaultValue="mdy">
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                            <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                            <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={handleSave} 
                      disabled={loading}
                      className="bg-eco-green hover:bg-eco-green-dark"
                    >
                      {loading ? t.saving : t.save}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/* Payment Tab Content */}
              <TabsContent value="payment" className="space-y-6 flex-1">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.sections.payment}</CardTitle>
                    <CardDescription>
                      Manage your payment methods and billing preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">{t.payment.savedCards}</h3>
                      
                      <div className="border rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center mr-3">
                              <span className="text-blue-600 font-bold text-sm">Visa</span>
                            </div>
                            <div>
                              <p className="font-medium">•••• •••• •••• 4242</p>
                              <p className="text-sm text-muted-foreground">Expires 09/24</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                            {t.payment.removeCard}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-4">{t.payment.addPayment}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-medium">{t.payment.cardNumber}</label>
                            <Input placeholder="0000 0000 0000 0000" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">{t.payment.expiryDate}</label>
                            <Input placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">{t.payment.cvv}</label>
                            <Input placeholder="123" />
                          </div>
                        </div>
                        <Button className="mt-4 bg-eco-green hover:bg-eco-green-dark">
                          {t.payment.addCard}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default DashboardSettings;
