
import React from 'react';
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Laptop, 
  Smartphone, 
  Cpu, 
  Truck, 
  Building, 
  Users, 
  BarChart, 
  ShieldCheck, 
  Award,
  ChevronRight,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const { language } = useLanguage();
  const { toast } = useToast();

  const translations = {
    en: {
      title: "Our Services",
      subtitle: "Comprehensive e-waste management solutions for individuals and businesses",
      explore: "Explore",
      learnMore: "Learn More",
      getStarted: "Get Started",
      contact: "Contact Us",
      schedule: "Schedule a Pickup",
      tabs: {
        individual: "For Individuals",
        business: "For Businesses",
        community: "For Communities"
      },
      sections: {
        services: "Core Services",
        howItWorks: "How It Works",
        benefits: "Benefits",
        testimonials: "Testimonials"
      },
      individual: {
        services: [
          {
            title: "Home Pickup",
            description: "Convenient pickup service from your doorstep",
            icon: Truck
          },
          {
            title: "Device Recognition",
            description: "AI-powered device identification and valuation",
            icon: Smartphone
          },
          {
            title: "Rewards Program",
            description: "Earn points for every device recycled",
            icon: Award
          },
          {
            title: "Data Security",
            description: "Certified data wiping and destruction services",
            icon: ShieldCheck
          }
        ],
        steps: [
          {
            title: "Schedule a Pickup",
            description: "Choose a convenient date and time for our team to collect your e-waste"
          },
          {
            title: "Prepare Your Devices",
            description: "Gather all your unwanted electronics and backup important data"
          },
          {
            title: "AI Analysis",
            description: "Our system analyzes and categorizes your devices"
          },
          {
            title: "Tracking & Rewards",
            description: "Track your environmental impact and earn Green Points for rewards"
          }
        ],
        benefits: [
          "Convenient home pickup service",
          "Track your personal environmental impact",
          "Earn rewards for sustainable choices",
          "Access to recycling education resources",
          "Certified data destruction for privacy",
          "Digital recycling certificates"
        ]
      },
      business: {
        services: [
          {
            title: "Corporate Collection",
            description: "Bulk e-waste collection for businesses",
            icon: Building
          },
          {
            title: "IT Asset Management",
            description: "Complete tracking and reporting of IT assets",
            icon: Laptop
          },
          {
            title: "Compliance Reporting",
            description: "Documentation for regulatory compliance",
            icon: BarChart
          },
          {
            title: "Data Security",
            description: "Enterprise-grade data destruction services",
            icon: ShieldCheck
          }
        ],
        steps: [
          {
            title: "Initial Consultation",
            description: "Assessment of your e-waste volumes and specific requirements"
          },
          {
            title: "Customized Plan",
            description: "Development of a tailored recycling strategy for your business"
          },
          {
            title: "Implementation",
            description: "Regular collection schedule and employee education"
          },
          {
            title: "Reporting & Analytics",
            description: "Detailed impact reports and compliance documentation"
          }
        ],
        benefits: [
          "Comprehensive IT asset management",
          "Regulatory compliance documentation",
          "Cost-effective bulk recycling",
          "Enhanced corporate sustainability metrics",
          "Employee engagement programs",
          "Brand reputation enhancement"
        ]
      },
      community: {
        services: [
          {
            title: "Community Drives",
            description: "Organized e-waste collection events",
            icon: Users
          },
          {
            title: "Educational Workshops",
            description: "Sustainability education for communities",
            icon: Users
          },
          {
            title: "School Programs",
            description: "Specialized programs for educational institutions",
            icon: Building
          },
          {
            title: "Impact Reporting",
            description: "Detailed environmental impact analytics",
            icon: BarChart
          }
        ],
        steps: [
          {
            title: "Program Design",
            description: "Customized program based on community needs and goals"
          },
          {
            title: "Community Engagement",
            description: "Promotional materials and community outreach strategy"
          },
          {
            title: "Event Implementation",
            description: "Professional management of collection drives and events"
          },
          {
            title: "Impact Reporting",
            description: "Detailed reporting on environmental and community benefits"
          }
        ],
        benefits: [
          "Strengthen community environmental initiatives",
          "Educational resources for schools and organizations",
          "Collective impact tracking and celebration",
          "Competition and gamification options",
          "Fundraising opportunities through recycling",
          "Community recognition and awards"
        ]
      },
      testimonials: [
        {
          quote: "EcoTrack made recycling my old electronics incredibly easy. The pickup service was prompt, and I love being able to see my environmental impact.",
          author: "Sarah J.",
          role: "Individual User"
        },
        {
          quote: "Implementing EcoTrack's business solution has streamlined our IT asset disposal process and significantly enhanced our sustainability reporting.",
          author: "Michael T.",
          role: "IT Director, TechCorp Inc."
        },
        {
          quote: "The community recycling drive was a huge success. The team at EcoTrack handled everything professionally and made the entire process seamless.",
          author: "Lisa M.",
          role: "Community Organizer"
        }
      ]
    },
    es: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones integrales de gestión de residuos electrónicos para individuos y empresas",
      explore: "Explorar",
      learnMore: "Saber Más",
      getStarted: "Comenzar",
      contact: "Contáctenos",
      schedule: "Programar una Recogida",
      tabs: {
        individual: "Para Individuos",
        business: "Para Empresas",
        community: "Para Comunidades"
      },
      sections: {
        services: "Servicios Principales",
        howItWorks: "Cómo Funciona",
        benefits: "Beneficios",
        testimonials: "Testimonios"
      },
      individual: {
        services: [
          {
            title: "Recogida a Domicilio",
            description: "Servicio de recogida conveniente desde tu puerta",
            icon: Truck
          },
          {
            title: "Reconocimiento de Dispositivos",
            description: "Identificación y valoración de dispositivos con IA",
            icon: Smartphone
          },
          {
            title: "Programa de Recompensas",
            description: "Gana puntos por cada dispositivo reciclado",
            icon: Award
          },
          {
            title: "Seguridad de Datos",
            description: "Servicios certificados de borrado y destrucción de datos",
            icon: ShieldCheck
          }
        ],
        steps: [
          {
            title: "Programar una Recogida",
            description: "Elige una fecha y hora conveniente para que nuestro equipo recoja tus residuos electrónicos"
          },
          {
            title: "Prepara tus Dispositivos",
            description: "Reúne todos tus dispositivos electrónicos no deseados y haz copias de seguridad de datos importantes"
          },
          {
            title: "Análisis de IA",
            description: "Nuestro sistema analiza y categoriza tus dispositivos"
          },
          {
            title: "Seguimiento y Recompensas",
            description: "Haz seguimiento de tu impacto ambiental y gana Puntos Verdes para recompensas"
          }
        ],
        benefits: [
          "Servicio conveniente de recogida a domicilio",
          "Seguimiento de tu impacto ambiental personal",
          "Gana recompensas por elecciones sostenibles",
          "Acceso a recursos educativos sobre reciclaje",
          "Destrucción certificada de datos para privacidad",
          "Certificados digitales de reciclaje"
        ]
      },
      business: {
        services: [
          {
            title: "Recogida Corporativa",
            description: "Recogida de residuos electrónicos a gran escala para empresas",
            icon: Building
          },
          {
            title: "Gestión de Activos TI",
            description: "Seguimiento y reporte completo de activos informáticos",
            icon: Laptop
          },
          {
            title: "Informes de Cumplimiento",
            description: "Documentación para cumplimiento normativo",
            icon: BarChart
          },
          {
            title: "Seguridad de Datos",
            description: "Servicios de destrucción de datos de nivel empresarial",
            icon: ShieldCheck
          }
        ],
        steps: [
          {
            title: "Consulta Inicial",
            description: "Evaluación de los volúmenes de residuos electrónicos y requisitos específicos"
          },
          {
            title: "Plan Personalizado",
            description: "Desarrollo de una estrategia de reciclaje adaptada para tu empresa"
          },
          {
            title: "Implementación",
            description: "Calendario regular de recogida y educación de empleados"
          },
          {
            title: "Reportes y Analítica",
            description: "Informes detallados de impacto y documentación de cumplimiento"
          }
        ],
        benefits: [
          "Gestión integral de activos informáticos",
          "Documentación de cumplimiento normativo",
          "Reciclaje a gran escala económico",
          "Mejora de métricas de sostenibilidad corporativa",
          "Programas de participación de empleados",
          "Mejora de la reputación de la marca"
        ]
      },
      community: {
        services: [
          {
            title: "Campañas Comunitarias",
            description: "Eventos organizados de recogida de residuos electrónicos",
            icon: Users
          },
          {
            title: "Talleres Educativos",
            description: "Educación en sostenibilidad para comunidades",
            icon: Users
          },
          {
            title: "Programas Escolares",
            description: "Programas especializados para instituciones educativas",
            icon: Building
          },
          {
            title: "Informes de Impacto",
            description: "Analítica detallada de impacto ambiental",
            icon: BarChart
          }
        ],
        steps: [
          {
            title: "Diseño del Programa",
            description: "Programa personalizado según las necesidades y objetivos de la comunidad"
          },
          {
            title: "Participación Comunitaria",
            description: "Materiales promocionales y estrategia de divulgación comunitaria"
          },
          {
            title: "Implementación de Eventos",
            description: "Gestión profesional de campañas de recogida y eventos"
          },
          {
            title: "Informes de Impacto",
            description: "Informes detallados sobre beneficios ambientales y comunitarios"
          }
        ],
        benefits: [
          "Fortalecer iniciativas ambientales comunitarias",
          "Recursos educativos para escuelas y organizaciones",
          "Seguimiento y celebración del impacto colectivo",
          "Opciones de competición y gamificación",
          "Oportunidades de recaudación de fondos mediante reciclaje",
          "Reconocimiento y premios comunitarios"
        ]
      },
      testimonials: [
        {
          quote: "EcoTrack hizo que reciclar mis viejos dispositivos electrónicos fuera increíblemente fácil. El servicio de recogida fue puntual, y me encanta poder ver mi impacto ambiental.",
          author: "Sara J.",
          role: "Usuario Individual"
        },
        {
          quote: "Implementar la solución empresarial de EcoTrack ha agilizado nuestro proceso de eliminación de activos informáticos y ha mejorado significativamente nuestros informes de sostenibilidad.",
          author: "Miguel T.",
          role: "Director de TI, TechCorp Inc."
        },
        {
          quote: "La campaña de reciclaje comunitaria fue un gran éxito. El equipo de EcoTrack manejó todo de manera profesional e hizo que todo el proceso fuera fluido.",
          author: "Luisa M.",
          role: "Organizadora Comunitaria"
        }
      ]
    }
  };

  // Default to English if the language is not supported
  const t = translations[language.code as keyof typeof translations] || translations.en;

  const handleSchedule = () => {
    toast({
      title: "Redirecting to Schedule",
      description: "Taking you to our scheduling page.",
    });
  };

  return (
    <Layout>
      <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <Tabs defaultValue="individual" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="individual" className="text-sm md:text-base">
              <Users className="h-4 w-4 mr-2 hidden sm:inline" />
              {t.tabs.individual}
            </TabsTrigger>
            <TabsTrigger value="business" className="text-sm md:text-base">
              <Building className="h-4 w-4 mr-2 hidden sm:inline" />
              {t.tabs.business}
            </TabsTrigger>
            <TabsTrigger value="community" className="text-sm md:text-base">
              <Users className="h-4 w-4 mr-2 hidden sm:inline" />
              {t.tabs.community}
            </TabsTrigger>
          </TabsList>

          {/* Individual Services */}
          <TabsContent value="individual">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-eco-green/80 to-eco-green mb-12 rounded-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:p-10 text-white md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.tabs.individual}</h2>
                  <p className="mb-6">
                    Our convenient e-waste recycling services make it easy for individuals to responsibly dispose of unwanted electronics while earning rewards.
                  </p>
                  <div className="flex gap-4">
                    <Button 
                      asChild 
                      className="bg-white text-eco-green hover:bg-white/90"
                      onClick={handleSchedule}
                    >
                      <Link to="/schedule-pickup">
                        {t.schedule}
                      </Link>
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white/20">
                      {t.learnMore}
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1635587812648-0851f5b4adb2?auto=format&fit=crop&w=774&q=80" 
                    alt="Individual E-waste Recycling" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Core Services */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">{t.sections.services}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.individual.services.map((service, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-eco-soft flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-eco-green" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* How It Works */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">{t.sections.howItWorks}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.individual.steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-eco-green text-white flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      {index < t.individual.steps.length - 1 && (
                        <div className="hidden lg:block h-0.5 bg-eco-green/30 flex-1 ml-2"></div>
                      )}
                    </div>
                    <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">{t.sections.benefits}</h2>
              <div className="bg-eco-soft p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.individual.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-3 h-5 w-5 rounded-full bg-eco-green text-white flex-shrink-0 flex items-center justify-center">
                        <Check className="h-3 w-3" />
                      </div>
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-eco-green/10 p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to start recycling?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of individuals who are making a positive environmental impact through responsible e-waste recycling.
              </p>
              <Button asChild className="bg-eco-green hover:bg-eco-green-dark">
                <Link to="/schedule-pickup">
                  {t.schedule}
                </Link>
              </Button>
            </div>
          </TabsContent>

          {/* Business Services */}
          <TabsContent value="business">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-eco-blue/80 to-eco-blue mb-12 rounded-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:p-10 text-white md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.tabs.business}</h2>
                  <p className="mb-6">
                    Comprehensive e-waste management solutions for businesses of all sizes, with full compliance reporting and data security.
                  </p>
                  <div className="flex gap-4">
                    <Button asChild className="bg-white text-eco-blue hover:bg-white/90">
                      <Link to="/contact">
                        {t.contact}
                      </Link>
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white/20">
                      {t.learnMore}
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1606765962248-7ff407b51667?auto=format&fit=crop&w=1470&q=80" 
                    alt="Business E-waste Solutions" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Core Services */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">{t.sections.services}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.business.services.map((service, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-eco-soft flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-eco-blue" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* How It Works */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">{t.sections.howItWorks}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.business.steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-eco-blue text-white flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      {index < t.business.steps.length - 1 && (
                        <div className="hidden lg:block h-0.5 bg-eco-blue/30 flex-1 ml-2"></div>
                      )}
                    </div>
                    <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">{t.sections.benefits}</h2>
              <div className="bg-eco-soft p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.business.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-3 h-5 w-5 rounded-full bg-eco-blue text-white flex-shrink-0 flex items-center justify-center">
                        <Check className="h-3 w-3" />
                      </div>
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-eco-blue/10 p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold mb-4">Enhance your corporate sustainability</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Partner with us to implement a comprehensive e-waste management program tailored to your business needs.
              </p>
              <Button asChild className="bg-eco-blue hover:bg-eco-blue-dark">
                <Link to="/contact">
                  {t.contact}
                </Link>
              </Button>
            </div>
          </TabsContent>

          {/* Community Services */}
          <TabsContent value="community">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-amber-600/80 to-amber-600 mb-12 rounded-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:p-10 text-white md:w-1/2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.tabs.community}</h2>
                  <p className="mb-6">
                    Engage your community in sustainable practices with our educational programs and collection events.
                  </p>
                  <div className="flex gap-4">
                    <Button asChild className="bg-white text-amber-600 hover:bg-white/90">
                      <Link to="/contact">
                        {t.contact}
                      </Link>
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white/20">
                      {t.learnMore}
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1561489413-985b06da5bee?auto=format&fit=crop&w=1470&q=80" 
                    alt="Community Recycling Programs" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Core Services */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">{t.sections.services}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.community.services.map((service, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-eco-soft flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6 text-amber-600" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* How It Works */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">{t.sections.howItWorks}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.community.steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      {index < t.community.steps.length - 1 && (
                        <div className="hidden lg:block h-0.5 bg-amber-600/30 flex-1 ml-2"></div>
                      )}
                    </div>
                    <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">{t.sections.benefits}</h2>
              <div className="bg-eco-soft p-6 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.community.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-3 h-5 w-5 rounded-full bg-amber-600 text-white flex-shrink-0 flex items-center justify-center">
                        <Check className="h-3 w-3" />
                      </div>
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-amber-600/10 p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold mb-4">Empower your community</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Start a sustainability movement in your neighborhood, school, or organization with our community programs.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link to="/contact">
                  {t.contact}
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">{t.sections.testimonials}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-eco-soft border-0">
                <CardContent className="pt-6">
                  <div className="mb-4 text-eco-green">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-eco-green text-white p-10 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to make a difference?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Join the EcoTrack community and be part of the solution to e-waste pollution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-white text-eco-green hover:bg-white/90">
              <Link to="/schedule-pickup">
                {t.schedule}
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/20">
              <Link to="/education">
                {t.learnMore}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
