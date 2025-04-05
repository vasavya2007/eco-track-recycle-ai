
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  User,
  Settings,
  Bell,
  Shield,
  CreditCard,
  BadgeCheck,
  Star,
  Medal,
  Upload,
  Save,
  LogOut,
} from 'lucide-react';

// Add translations
const translations = {
  en: {
    profile: "Profile",
    personalInfo: "Personal Information",
    preferences: "Preferences",
    security: "Security",
    billingPayment: "Billing & Payment",
    myAccount: "My Account",
    editProfile: "Edit Profile",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone Number",
    location: "Location",
    changeAvatar: "Change Avatar",
    saveChanges: "Save Changes",
    cancel: "Cancel",
    notifications: "Notifications",
    emailNotifications: "Email Notifications",
    smsNotifications: "SMS Notifications",
    appNotifications: "App Notifications",
    marketingEmails: "Marketing Emails",
    changePassword: "Change Password",
    currentPassword: "Current Password",
    newPassword: "New Password",
    confirmPassword: "Confirm New Password",
    updatePassword: "Update Password",
    paymentMethods: "Payment Methods",
    addPaymentMethod: "Add Payment Method",
    billingHistory: "Billing History",
    viewAll: "View All",
    rewards: "Rewards & Achievements",
    rewardsEarned: "Rewards Earned",
    pointsBalance: "Points Balance",
    totalRecycled: "Total Recycled",
    recyclingStreak: "Recycling Streak",
    achievements: "Achievements",
    signOut: "Sign Out",
    profileUpdated: "Profile Updated Successfully",
    passwordChanged: "Password Changed Successfully"
  },
  es: {
    profile: "Perfil",
    personalInfo: "Información Personal",
    preferences: "Preferencias",
    security: "Seguridad",
    billingPayment: "Facturación y Pago",
    myAccount: "Mi Cuenta",
    editProfile: "Editar Perfil",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Correo Electrónico",
    phone: "Número de Teléfono",
    location: "Ubicación",
    changeAvatar: "Cambiar Avatar",
    saveChanges: "Guardar Cambios",
    cancel: "Cancelar",
    notifications: "Notificaciones",
    emailNotifications: "Notificaciones por Correo",
    smsNotifications: "Notificaciones SMS",
    appNotifications: "Notificaciones de la Aplicación",
    marketingEmails: "Correos de Marketing",
    changePassword: "Cambiar Contraseña",
    currentPassword: "Contraseña Actual",
    newPassword: "Nueva Contraseña",
    confirmPassword: "Confirmar Contraseña",
    updatePassword: "Actualizar Contraseña",
    paymentMethods: "Métodos de Pago",
    addPaymentMethod: "Añadir Método de Pago",
    billingHistory: "Historial de Facturación",
    viewAll: "Ver Todo",
    rewards: "Recompensas y Logros",
    rewardsEarned: "Recompensas Ganadas",
    pointsBalance: "Saldo de Puntos",
    totalRecycled: "Total Reciclado",
    recyclingStreak: "Racha de Reciclaje",
    achievements: "Logros",
    signOut: "Cerrar Sesión",
    profileUpdated: "Perfil Actualizado Exitosamente",
    passwordChanged: "Contraseña Cambiada Exitosamente"
  },
  fr: {
    profile: "Profil",
    personalInfo: "Informations Personnelles",
    preferences: "Préférences",
    security: "Sécurité",
    billingPayment: "Facturation et Paiement",
    myAccount: "Mon Compte",
    editProfile: "Modifier le Profil",
    firstName: "Prénom",
    lastName: "Nom",
    email: "Adresse Email",
    phone: "Numéro de Téléphone",
    location: "Localisation",
    changeAvatar: "Changer d'Avatar",
    saveChanges: "Enregistrer",
    cancel: "Annuler",
    notifications: "Notifications",
    emailNotifications: "Notifications par Email",
    smsNotifications: "Notifications SMS",
    appNotifications: "Notifications de l'Application",
    marketingEmails: "Emails Marketing",
    changePassword: "Changer le Mot de Passe",
    currentPassword: "Mot de Passe Actuel",
    newPassword: "Nouveau Mot de Passe",
    confirmPassword: "Confirmer le Mot de Passe",
    updatePassword: "Mettre à Jour le Mot de Passe",
    paymentMethods: "Moyens de Paiement",
    addPaymentMethod: "Ajouter un Moyen de Paiement",
    billingHistory: "Historique de Facturation",
    viewAll: "Voir Tout",
    rewards: "Récompenses et Réussites",
    rewardsEarned: "Récompenses Gagnées",
    pointsBalance: "Solde de Points",
    totalRecycled: "Total Recyclé",
    recyclingStreak: "Série de Recyclage",
    achievements: "Réussites",
    signOut: "Déconnexion",
    profileUpdated: "Profil Mis à Jour avec Succès",
    passwordChanged: "Mot de Passe Changé avec Succès"
  },
  // More languages would be added here
  zh: {
    profile: "个人资料",
    personalInfo: "个人信息",
    preferences: "偏好设置",
    security: "安全",
    billingPayment: "账单和付款",
    myAccount: "我的账户",
    editProfile: "编辑资料",
    firstName: "名",
    lastName: "姓",
    email: "电子邮箱",
    phone: "电话号码",
    location: "位置",
    changeAvatar: "更换头像",
    saveChanges: "保存更改",
    cancel: "取消",
    notifications: "通知",
    emailNotifications: "电子邮件通知",
    smsNotifications: "短信通知",
    appNotifications: "应用通知",
    marketingEmails: "营销邮件",
    changePassword: "更改密码",
    currentPassword: "当前密码",
    newPassword: "新密码",
    confirmPassword: "确认新密码",
    updatePassword: "更新密码",
    paymentMethods: "支付方式",
    addPaymentMethod: "添加支付方式",
    billingHistory: "账单历史",
    viewAll: "查看全部",
    rewards: "奖励和成就",
    rewardsEarned: "已获奖励",
    pointsBalance: "积分余额",
    totalRecycled: "总回收量",
    recyclingStreak: "连续回收记录",
    achievements: "成就",
    signOut: "退出登录",
    profileUpdated: "个人资料已成功更新",
    passwordChanged: "密码已成功更改"
  }
};

// Mock data for the profile
const mockUserData = {
  firstName: "Alex",
  lastName: "Johnson",
  email: "alex.johnson@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  avatar: "https://i.pravatar.cc/300",
  points: 3250,
  totalRecycled: "84.5kg",
  streak: 12,
  // More user data would be added here
};

// Mock achievements
const mockAchievements = [
  {
    title: "First Recycling",
    icon: "🌱",
    description: "Complete your first e-waste recycling",
    earned: true,
    date: "2024-12-10"
  },
  {
    title: "Recycling Expert",
    icon: "🏆",
    description: "Recycle 10 different types of devices",
    earned: true,
    date: "2025-01-22"
  },
  {
    title: "Earth Defender",
    icon: "🌍",
    description: "Prevent 50kg of e-waste from landfills",
    earned: true,
    date: "2025-02-15"
  },
  {
    title: "Consistency Champion",
    icon: "🔄",
    description: "Recycle for 10 consecutive weeks",
    earned: true,
    date: "2025-03-01"
  },
  {
    title: "Community Leader",
    icon: "👥",
    description: "Invite 5 friends to the platform",
    earned: false
  },
  {
    title: "Tech Recycler Master",
    icon: "💻",
    description: "Recycle 100kg of e-waste",
    earned: false
  },
];

const Profile = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(mockUserData);
  
  // Get translations based on current language or fall back to English
  const t = translations[language.code as keyof typeof translations] || translations.en;
  
  const handleSaveProfile = () => {
    // In a real application, this would save to a backend
    setEditing(false);
    
    toast({
      title: t.profileUpdated,
      description: new Date().toLocaleTimeString(),
    });
  };
  
  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would update the password
    toast({
      title: t.passwordChanged,
      description: new Date().toLocaleTimeString(),
    });
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gradient-to-b from-white to-eco-soft/30">
        <div className="container">
          <h1 className="text-3xl font-bold mb-6">{t.profile}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 mb-6">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={formData.avatar} />
                      <AvatarFallback>{formData.firstName.charAt(0) + formData.lastName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h2 className="text-xl font-semibold">{formData.firstName} {formData.lastName}</h2>
                      <p className="text-muted-foreground">{formData.email}</p>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-1">
                    <div className="text-center space-y-1 mb-4">
                      <div className="text-3xl font-bold text-eco-green">{formData.points}</div>
                      <div className="text-sm text-muted-foreground">{t.pointsBalance}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="text-center p-2 bg-muted rounded-lg">
                        <div className="font-semibold">{formData.totalRecycled}</div>
                        <div className="text-xs text-muted-foreground">{t.totalRecycled}</div>
                      </div>
                      <div className="text-center p-2 bg-muted rounded-lg">
                        <div className="font-semibold">{formData.streak} days</div>
                        <div className="text-xs text-muted-foreground">{t.recyclingStreak}</div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <Button variant="outline" className="w-full flex items-center gap-2" onClick={() => window.location.href = "/"}>
                    <LogOut className="h-4 w-4" />
                    {t.signOut}
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="personal-info">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="personal-info" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">{t.personalInfo}</span>
                  </TabsTrigger>
                  <TabsTrigger value="preferences" className="flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    <span className="hidden sm:inline">{t.preferences}</span>
                  </TabsTrigger>
                  <TabsTrigger value="security" className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span className="hidden sm:inline">{t.security}</span>
                  </TabsTrigger>
                  <TabsTrigger value="rewards" className="flex items-center gap-2">
                    <Medal className="h-4 w-4" />
                    <span className="hidden sm:inline">{t.rewards}</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="personal-info">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle>{t.personalInfo}</CardTitle>
                          <CardDescription>{t.myAccount}</CardDescription>
                        </div>
                        {!editing && (
                          <Button variant="outline" onClick={() => setEditing(true)}>
                            {t.editProfile}
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      {editing ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">{t.firstName}</Label>
                              <Input 
                                id="firstName" 
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">{t.lastName}</Label>
                              <Input 
                                id="lastName" 
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email">{t.email}</Label>
                            <Input 
                              id="email" 
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="phone">{t.phone}</Label>
                            <Input 
                              id="phone" 
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="location">{t.location}</Label>
                            <Input 
                              id="location" 
                              name="location"
                              value={formData.location}
                              onChange={handleInputChange}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label>{t.changeAvatar}</Label>
                            <div className="flex items-center gap-4">
                              <Avatar>
                                <AvatarImage src={formData.avatar} />
                                <AvatarFallback>{formData.firstName.charAt(0) + formData.lastName.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <Button variant="outline" className="flex items-center gap-2">
                                <Upload className="h-4 w-4" />
                                {t.changeAvatar}
                              </Button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-sm text-muted-foreground mb-1">{t.firstName}</div>
                              <div>{formData.firstName}</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground mb-1">{t.lastName}</div>
                              <div>{formData.lastName}</div>
                            </div>
                          </div>
                          
                          <Separator />
                          
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">{t.email}</div>
                            <div>{formData.email}</div>
                          </div>
                          
                          <Separator />
                          
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">{t.phone}</div>
                            <div>{formData.phone}</div>
                          </div>
                          
                          <Separator />
                          
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">{t.location}</div>
                            <div>{formData.location}</div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                    {editing && (
                      <CardFooter className="flex justify-end space-x-2">
                        <Button variant="outline" onClick={() => setEditing(false)}>
                          {t.cancel}
                        </Button>
                        <Button className="bg-eco-green hover:bg-eco-green-dark" onClick={handleSaveProfile}>
                          <Save className="mr-2 h-4 w-4" />
                          {t.saveChanges}
                        </Button>
                      </CardFooter>
                    )}
                  </Card>
                </TabsContent>
                
                <TabsContent value="preferences">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.notifications}</CardTitle>
                      <CardDescription>Configure how you receive notifications</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{t.emailNotifications}</div>
                          <div className="text-sm text-muted-foreground">Receive emails about your activity</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="email-notifications" checked />
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{t.smsNotifications}</div>
                          <div className="text-sm text-muted-foreground">Receive text messages for important updates</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="sms-notifications" />
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{t.appNotifications}</div>
                          <div className="text-sm text-muted-foreground">In-app notifications and alerts</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="app-notifications" checked />
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{t.marketingEmails}</div>
                          <div className="text-sm text-muted-foreground">Receive marketing emails and offers</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="marketing-emails" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-eco-green hover:bg-eco-green-dark ml-auto">
                        <Save className="mr-2 h-4 w-4" />
                        {t.saveChanges}
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="security">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.changePassword}</CardTitle>
                      <CardDescription>Update your password to keep your account secure</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleChangePassword} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">{t.currentPassword}</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-2">
                          <Label htmlFor="new-password">{t.newPassword}</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">{t.confirmPassword}</Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                        
                        <Button type="submit" className="w-full">
                          {t.updatePassword}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="rewards">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.achievements}</CardTitle>
                      <CardDescription>Recognize your environmental contributions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mockAchievements.map((achievement, index) => (
                          <div 
                            key={index} 
                            className={`p-4 rounded-lg border ${achievement.earned ? 'border-eco-green/50 bg-eco-green/5' : 'border-dashed opacity-70'}`}
                          >
                            <div className="flex items-start gap-3">
                              <div className="text-3xl">{achievement.icon}</div>
                              <div>
                                <div className="font-medium flex items-center gap-2">
                                  {achievement.title}
                                  {achievement.earned && <BadgeCheck className="h-4 w-4 text-eco-green" />}
                                </div>
                                <div className="text-sm text-muted-foreground">{achievement.description}</div>
                                {achievement.earned && (
                                  <div className="text-xs text-muted-foreground mt-1">
                                    Earned on {new Date(achievement.date).toLocaleDateString()}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
