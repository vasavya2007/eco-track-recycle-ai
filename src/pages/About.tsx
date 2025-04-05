
import React from 'react';
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Globe, 
  Users, 
  Award, 
  Clock, 
  Target, 
  Star,
  ChevronRight,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react';

const About = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "About EcoTrack",
      subtitle: "Creating a sustainable future through innovative e-waste management",
      mission: {
        title: "Our Mission",
        description: "To revolutionize e-waste management through accessible, transparent, and rewarding recycling solutions that benefit individuals, communities, and the planet."
      },
      vision: {
        title: "Our Vision",
        description: "A world where electronic waste is properly managed, resources are conserved, and communities are empowered to participate in the circular economy."
      },
      tabs: {
        story: "Our Story",
        team: "Our Team",
        impact: "Our Impact",
        partners: "Our Partners"
      },
      story: {
        founded: "Founded in 2021",
        founder: "Dr. James Chen",
        intro: "EcoTrack began with a simple observation: despite growing awareness about the environmental impact of electronic waste, there was a significant gap between knowledge and action.",
        paragraphs: [
          "After witnessing mountains of discarded electronics during his research travels across developing countries, environmental scientist Dr. James Chen became determined to address this growing crisis. He assembled a team of technologists, sustainability experts, and recycling industry veterans to create a solution that would make responsible e-waste disposal accessible and rewarding.",
          "EcoTrack was born from the belief that technology should be part of the solution, not just the problem. By leveraging AI for device recognition, blockchain for tracking transparency, and gamification for user engagement, we've built a platform that transforms the recycling experience.",
          "What started as a small pilot program in one city has now expanded to a comprehensive service available across multiple countries. Our journey is just beginning, and we're committed to continuous innovation and expansion to combat the global e-waste challenge."
        ]
      },
      team: {
        intro: "Our diverse team brings together expertise in environmental science, technology, and sustainability to drive our mission forward.",
        members: [
          {
            name: "Dr. James Chen",
            role: "Founder & CEO",
            bio: "Environmental scientist with 15+ years of experience in waste management systems and policies.",
            image: "https://i.pravatar.cc/300?img=1"
          },
          {
            name: "Sarah Johnson",
            role: "Chief Technology Officer",
            bio: "Former tech executive with expertise in AI and blockchain applications for environmental solutions.",
            image: "https://i.pravatar.cc/300?img=5"
          },
          {
            name: "Miguel Rodriguez",
            role: "Head of Operations",
            bio: "Logistics specialist with background in implementing large-scale recycling programs.",
            image: "https://i.pravatar.cc/300?img=3"
          },
          {
            name: "Aisha Patel",
            role: "Community Engagement Director",
            bio: "Sustainability advocate with experience in building environmental education programs.",
            image: "https://i.pravatar.cc/300?img=9"
          },
          {
            name: "David Kim",
            role: "Chief Sustainability Officer",
            bio: "Former environmental policy advisor with expertise in circular economy principles.",
            image: "https://i.pravatar.cc/300?img=8"
          },
          {
            name: "Emma Lewis",
            role: "Business Development Lead",
            bio: "Experienced in creating corporate sustainability partnerships and programs.",
            image: "https://i.pravatar.cc/300?img=2"
          }
        ]
      },
      impact: {
        intro: "Our collective impact grows every day as more individuals and organizations join our movement.",
        stats: [
          {
            number: "750+",
            label: "Tons of E-waste Collected",
            icon: Leaf
          },
          {
            number: "35,000+",
            label: "Active Users",
            icon: Users
          },
          {
            number: "120+",
            label: "Corporate Partners",
            icon: Award
          },
          {
            number: "50+",
            label: "Communities Served",
            icon: Globe
          }
        ],
        milestones: [
          {
            year: 2021,
            title: "EcoTrack Founded",
            description: "Launched pilot program in San Francisco"
          },
          {
            year: 2022,
            title: "Technology Expansion",
            description: "Introduced AI recognition system and mobile app"
          },
          {
            year: 2022,
            title: "First Corporate Program",
            description: "Partnered with TechCorp for enterprise e-waste management"
          },
          {
            year: 2023,
            title: "Community Initiative",
            description: "Launched school programs reaching 10,000+ students"
          },
          {
            year: 2023,
            title: "International Expansion",
            description: "Extended services to Canada and select European countries"
          },
          {
            year: 2024,
            title: "Blockchain Integration",
            description: "Implemented transparent tracking system for recycled materials"
          }
        ]
      },
      partners: {
        intro: "We collaborate with leading organizations across multiple sectors to maximize our environmental impact.",
        types: {
          tech: "Technology Partners",
          recycling: "Recycling Partners",
          corporate: "Corporate Partners",
          nonprofit: "Nonprofit Partners"
        }
      },
      values: {
        title: "Our Values",
        values: [
          {
            title: "Environmental Stewardship",
            description: "We prioritize the planet in every business decision.",
            icon: Globe
          },
          {
            title: "Transparency",
            description: "We believe in full disclosure of our recycling processes and impact.",
            icon: Star
          },
          {
            title: "Innovation",
            description: "We continuously seek new technologies and approaches to improve.",
            icon: Target
          },
          {
            title: "Accessibility",
            description: "We make sustainable choices easy and available to everyone.",
            icon: Users
          },
          {
            title: "Responsibility",
            description: "We hold ourselves accountable for our environmental and social impact.",
            icon: Clock
          }
        ]
      },
      cta: {
        title: "Join Us in Making a Difference",
        description: "Become part of our mission to combat electronic waste pollution and build a more sustainable future.",
        button: "Start Recycling Today"
      }
    },
    es: {
      title: "Sobre EcoTrack",
      subtitle: "Creando un futuro sostenible a través de la gestión innovadora de residuos electrónicos",
      mission: {
        title: "Nuestra Misión",
        description: "Revolucionar la gestión de residuos electrónicos a través de soluciones de reciclaje accesibles, transparentes y gratificantes que beneficien a individuos, comunidades y al planeta."
      },
      vision: {
        title: "Nuestra Visión",
        description: "Un mundo donde los residuos electrónicos se gestionen adecuadamente, se conserven los recursos y las comunidades estén capacitadas para participar en la economía circular."
      },
      tabs: {
        story: "Nuestra Historia",
        team: "Nuestro Equipo",
        impact: "Nuestro Impacto",
        partners: "Nuestros Socios"
      },
      story: {
        founded: "Fundado en 2021",
        founder: "Dr. James Chen",
        intro: "EcoTrack comenzó con una simple observación: a pesar de la creciente conciencia sobre el impacto ambiental de los residuos electrónicos, existía una brecha significativa entre el conocimiento y la acción.",
        paragraphs: [
          "Después de presenciar montañas de electrónicos descartados durante sus viajes de investigación por países en desarrollo, el científico ambiental Dr. James Chen se determinó a abordar esta creciente crisis. Reunió a un equipo de tecnólogos, expertos en sostenibilidad y veteranos de la industria del reciclaje para crear una solución que hiciera accesible y gratificante la eliminación responsable de residuos electrónicos.",
          "EcoTrack nació de la creencia de que la tecnología debería ser parte de la solución, no solo del problema. Al aprovechar la IA para el reconocimiento de dispositivos, blockchain para la transparencia de seguimiento y la gamificación para la participación del usuario, hemos construido una plataforma que transforma la experiencia de reciclaje.",
          "Lo que comenzó como un pequeño programa piloto en una ciudad ahora se ha expandido a un servicio integral disponible en varios países. Nuestro viaje apenas comienza, y estamos comprometidos con la innovación continua y la expansión para combatir el desafío global de los residuos electrónicos."
        ]
      },
      team: {
        intro: "Nuestro diverso equipo reúne experiencia en ciencias ambientales, tecnología y sostenibilidad para impulsar nuestra misión.",
        members: [
          {
            name: "Dr. James Chen",
            role: "Fundador y CEO",
            bio: "Científico ambiental con más de 15 años de experiencia en sistemas y políticas de gestión de residuos.",
            image: "https://i.pravatar.cc/300?img=1"
          },
          {
            name: "Sarah Johnson",
            role: "Directora de Tecnología",
            bio: "Ex ejecutiva de tecnología con experiencia en aplicaciones de IA y blockchain para soluciones ambientales.",
            image: "https://i.pravatar.cc/300?img=5"
          },
          {
            name: "Miguel Rodríguez",
            role: "Jefe de Operaciones",
            bio: "Especialista en logística con experiencia en implementación de programas de reciclaje a gran escala.",
            image: "https://i.pravatar.cc/300?img=3"
          },
          {
            name: "Aisha Patel",
            role: "Directora de Participación Comunitaria",
            bio: "Defensora de la sostenibilidad con experiencia en la creación de programas de educación ambiental.",
            image: "https://i.pravatar.cc/300?img=9"
          },
          {
            name: "David Kim",
            role: "Director de Sostenibilidad",
            bio: "Ex asesor de políticas ambientales con experiencia en principios de economía circular.",
            image: "https://i.pravatar.cc/300?img=8"
          },
          {
            name: "Emma Lewis",
            role: "Líder de Desarrollo de Negocios",
            bio: "Experiencia en la creación de asociaciones y programas corporativos de sostenibilidad.",
            image: "https://i.pravatar.cc/300?img=2"
          }
        ]
      },
      impact: {
        intro: "Nuestro impacto colectivo crece cada día a medida que más individuos y organizaciones se unen a nuestro movimiento.",
        stats: [
          {
            number: "750+",
            label: "Toneladas de Residuos Electrónicos Recolectados",
            icon: Leaf
          },
          {
            number: "35,000+",
            label: "Usuarios Activos",
            icon: Users
          },
          {
            number: "120+",
            label: "Socios Corporativos",
            icon: Award
          },
          {
            number: "50+",
            label: "Comunidades Atendidas",
            icon: Globe
          }
        ],
        milestones: [
          {
            year: 2021,
            title: "Fundación de EcoTrack",
            description: "Lanzamiento del programa piloto en San Francisco"
          },
          {
            year: 2022,
            title: "Expansión Tecnológica",
            description: "Introducción del sistema de reconocimiento por IA y aplicación móvil"
          },
          {
            year: 2022,
            title: "Primer Programa Corporativo",
            description: "Asociación con TechCorp para gestión empresarial de residuos electrónicos"
          },
          {
            year: 2023,
            title: "Iniciativa Comunitaria",
            description: "Lanzamiento de programas escolares que alcanzan a más de 10,000 estudiantes"
          },
          {
            year: 2023,
            title: "Expansión Internacional",
            description: "Extensión de servicios a Canadá y países europeos seleccionados"
          },
          {
            year: 2024,
            title: "Integración de Blockchain",
            description: "Implementación de sistema transparente de seguimiento para materiales reciclados"
          }
        ]
      },
      partners: {
        intro: "Colaboramos con organizaciones líderes en múltiples sectores para maximizar nuestro impacto ambiental.",
        types: {
          tech: "Socios Tecnológicos",
          recycling: "Socios de Reciclaje",
          corporate: "Socios Corporativos",
          nonprofit: "Socios Sin Fines de Lucro"
        }
      },
      values: {
        title: "Nuestros Valores",
        values: [
          {
            title: "Gestión Ambiental",
            description: "Priorizamos el planeta en cada decisión empresarial.",
            icon: Globe
          },
          {
            title: "Transparencia",
            description: "Creemos en la divulgación completa de nuestros procesos de reciclaje e impacto.",
            icon: Star
          },
          {
            title: "Innovación",
            description: "Buscamos continuamente nuevas tecnologías y enfoques para mejorar.",
            icon: Target
          },
          {
            title: "Accesibilidad",
            description: "Hacemos que las elecciones sostenibles sean fáciles y estén disponibles para todos.",
            icon: Users
          },
          {
            title: "Responsabilidad",
            description: "Nos hacemos responsables de nuestro impacto ambiental y social.",
            icon: Clock
          }
        ]
      },
      cta: {
        title: "Únete a Nosotros para Hacer la Diferencia",
        description: "Forma parte de nuestra misión para combatir la contaminación por residuos electrónicos y construir un futuro más sostenible.",
        button: "Comienza a Reciclar Hoy"
      }
    }
  };
  
  // Default to English if the language is not supported
  const t = translations[language.code as keyof typeof translations] || translations.en;

  return (
    <Layout>
      <div className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card className="bg-eco-green text-white">
            <CardHeader>
              <CardTitle className="text-2xl">{t.mission.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90">
                {t.mission.description}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-eco-blue text-white">
            <CardHeader>
              <CardTitle className="text-2xl">{t.vision.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90">
                {t.vision.description}
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="story" className="mb-16">
          <TabsList className="grid grid-cols-4 mb-8 w-full">
            <TabsTrigger value="story">{t.tabs.story}</TabsTrigger>
            <TabsTrigger value="team">{t.tabs.team}</TabsTrigger>
            <TabsTrigger value="impact">{t.tabs.impact}</TabsTrigger>
            <TabsTrigger value="partners">{t.tabs.partners}</TabsTrigger>
          </TabsList>

          {/* Our Story */}
          <TabsContent value="story">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">{t.tabs.story}</h2>
                <div className="space-y-6">
                  <p className="text-lg font-medium">{t.story.intro}</p>
                  {t.story.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground">{paragraph}</p>
                  ))}
                </div>
              </div>
              <div>
                <div className="sticky top-6">
                  <div className="bg-eco-soft rounded-lg p-6 mb-6">
                    <div className="text-sm text-muted-foreground mb-2">{t.story.founded}</div>
                    <h3 className="text-xl font-bold mb-4">{t.story.founder}</h3>
                    <p className="text-muted-foreground">
                      Environmental scientist and entrepreneur committed to solving the global e-waste crisis through technology and community engagement.
                    </p>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&q=80"
                      alt="EcoTrack Team" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Our Team */}
          <TabsContent value="team">
            <h2 className="text-2xl font-bold mb-4">{t.tabs.team}</h2>
            <p className="text-lg mb-8">{t.team.intro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.team.members.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold">{member.name}</h3>
                        <p className="text-sm text-eco-green">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                    <div className="flex mt-4 space-x-2">
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Our Impact */}
          <TabsContent value="impact">
            <h2 className="text-2xl font-bold mb-4">{t.tabs.impact}</h2>
            <p className="text-lg mb-8">{t.impact.intro}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {t.impact.stats.map((stat, index) => (
                <Card key={index} className="bg-eco-soft border-0">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <div className="h-12 w-12 rounded-full bg-eco-green/20 flex items-center justify-center mb-3">
                      <stat.icon className="h-6 w-6 text-eco-green" />
                    </div>
                    <p className="text-3xl font-bold mb-1">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-6">Key Milestones</h3>
            <div className="relative border-l border-eco-green/30 pl-8 ml-4 space-y-8">
              {t.impact.milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start">
                    <div className="absolute -left-10 mt-1.5">
                      <div className="h-5 w-5 rounded-full bg-eco-green flex items-center justify-center">
                        <div className="h-3 w-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-eco-green mb-1">{milestone.year}</div>
                      <h4 className="text-lg font-medium">{milestone.title}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Our Partners */}
          <TabsContent value="partners">
            <h2 className="text-2xl font-bold mb-4">{t.tabs.partners}</h2>
            <p className="text-lg mb-8">{t.partners.intro}</p>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">{t.partners.types.tech}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-eco-soft h-24 rounded-lg flex items-center justify-center">
                      <div className="w-3/4 h-8 bg-eco-green/20 rounded flex items-center justify-center">
                        <span className="font-medium text-eco-green">Tech Partner {i}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">{t.partners.types.recycling}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-eco-soft h-24 rounded-lg flex items-center justify-center">
                      <div className="w-3/4 h-8 bg-eco-green/20 rounded flex items-center justify-center">
                        <span className="font-medium text-eco-green">Recycling Partner {i}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">{t.partners.types.corporate}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-eco-soft h-24 rounded-lg flex items-center justify-center">
                      <div className="w-3/4 h-8 bg-eco-green/20 rounded flex items-center justify-center">
                        <span className="font-medium text-eco-green">Corporate Partner {i}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">{t.partners.types.nonprofit}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-eco-soft h-24 rounded-lg flex items-center justify-center">
                      <div className="w-3/4 h-8 bg-eco-green/20 rounded flex items-center justify-center">
                        <span className="font-medium text-eco-green">Nonprofit Partner {i}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Button asChild className="bg-eco-green hover:bg-eco-green-dark">
                <Link to="/contact">
                  Become a Partner
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">{t.values.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {t.values.values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-eco-soft flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-eco-green" />
                  </div>
                  <h3 className="font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-eco-green text-white p-10 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          <Button asChild className="bg-white text-eco-green hover:bg-white/90">
            <Link to="/schedule-pickup">
              {t.cta.button}
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default About;
