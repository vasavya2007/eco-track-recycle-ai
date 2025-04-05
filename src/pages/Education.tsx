import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, Download, ExternalLink, ChevronDown, ChevronUp, Image, Table } from 'lucide-react';

// Translations for the Education page
const translations = {
  en: {
    title: "E-Waste Education Hub",
    subtitle: "Learn about electronic waste and how to manage it responsibly",
    guides: "Guides",
    videos: "Videos",
    resources: "Resources",
    articles: "Articles",
    readMore: "Read More",
    watchNow: "Watch Now",
    download: "Download",
    viewMore: "View More",
    viewLess: "View Less"
  },
  es: {
    title: "Centro de Educación sobre Residuos Electrónicos",
    subtitle: "Aprenda sobre los residuos electrónicos y cómo gestionarlos de manera responsable",
    guides: "Guías",
    videos: "Videos",
    resources: "Recursos",
    articles: "Artículos",
    readMore: "Leer Más",
    watchNow: "Ver Ahora",
    download: "Descargar",
    viewMore: "Ver Más",
    viewLess: "Ver Menos"
  },
  fr: {
    title: "Centre d'Éducation sur les Déchets Électroniques",
    subtitle: "Apprenez-en plus sur les déchets électroniques et comment les gérer de manière responsable",
    guides: "Guides",
    videos: "Vidéos",
    resources: "Ressources",
    articles: "Articles",
    readMore: "Lire Plus",
    watchNow: "Regarder",
    download: "Télécharger",
    viewMore: "Voir Plus",
    viewLess: "Voir Moins"
  },
  zh: {
    title: "电子垃圾教育中心",
    subtitle: "了解电子垃圾以及如何负责任地管理它",
    guides: "指南",
    videos: "视频",
    resources: "资源",
    articles: "文章",
    readMore: "阅读更多",
    watchNow: "立即观看",
    download: "下载",
    viewMore: "查看更多",
    viewLess: "收起"
  }
};

// Sample content
const guidesContent = [
  {
    title: "Identifying Hazardous E-Waste",
    description: "Learn how to identify potentially hazardous components in electronic devices",
    image: "https://images.unsplash.com/photo-1583912267550-d145e9ab0567?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Preparing Devices for Recycling",
    description: "Steps to properly prepare your electronic devices before recycling them",
    image: "https://images.unsplash.com/photo-1507409613952-518459ac8154?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Understanding E-Waste Categories",
    description: "A comprehensive guide to different categories of electronic waste",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    title: "Home E-Waste Audit Guide",
    description: "Learn how to conduct an e-waste audit in your home to identify recyclable electronics",
    image: "https://images.unsplash.com/photo-1512253022256-26f8071cb4d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "#"
  }
];

const videosContent = [
  {
    title: "Inside an E-Waste Recycling Facility",
    description: "Take a tour inside our state-of-the-art e-waste recycling facility",
    thumbnail: "https://images.unsplash.com/photo-1618090584176-7132b9911544?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "12:45"
  },
  {
    title: "The Journey of a Smartphone",
    description: "Follow the entire lifecycle of a smartphone from production to recycling",
    thumbnail: "https://images.unsplash.com/photo-1529258283598-8d6fe60b27f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "15:20"
  },
  {
    title: "Environmental Impact of E-Waste",
    description: "Learn about the environmental consequences of improper e-waste disposal",
    thumbnail: "https://images.unsplash.com/photo-1621755762078-704320c7b7a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "08:35"
  }
];

const resourcesContent = [
  {
    title: "E-Waste Management Guide.pdf",
    description: "Comprehensive guide on managing electronic waste",
    fileSize: "2.4 MB",
    fileType: "PDF"
  },
  {
    title: "Recycling Infographic.png",
    description: "Visual representation of the e-waste recycling process",
    fileSize: "1.8 MB",
    fileType: "PNG"
  },
  {
    title: "Hazardous Materials Checklist.pdf",
    description: "Checklist for identifying hazardous materials in electronics",
    fileSize: "1.2 MB",
    fileType: "PDF"
  },
  {
    title: "E-Waste Regulations by Region.xlsx",
    description: "Overview of e-waste regulations across different regions",
    fileSize: "3.5 MB",
    fileType: "XLSX"
  }
];

const articlesContent = [
  {
    title: "The Growing Problem of E-Waste",
    excerpt: "Electronic waste is the fastest growing waste stream in the world. This article explores the scale of the problem and potential solutions.",
    date: "2025-03-15",
    readTime: "5 min"
  },
  {
    title: "Innovations in E-Waste Recycling",
    excerpt: "New technologies are making it easier to recover valuable materials from electronic devices. Learn about the latest innovations.",
    date: "2025-03-02",
    readTime: "8 min"
  },
  {
    title: "Corporate Responsibility and E-Waste",
    excerpt: "How major tech companies are addressing their e-waste footprint and taking responsibility for the products they produce.",
    date: "2025-02-18",
    readTime: "6 min"
  },
  {
    title: "E-Waste in Developing Countries",
    excerpt: "The impact of e-waste exports to developing countries and the informal recycling economies that have emerged.",
    date: "2025-02-05",
    readTime: "10 min"
  },
  {
    title: "The Circular Economy Approach to Electronics",
    excerpt: "How adopting circular economy principles can transform the electronics industry and reduce waste.",
    date: "2025-01-22",
    readTime: "7 min"
  }
];

const Education = () => {
  const { language } = useLanguage();
  const [showAllArticles, setShowAllArticles] = useState(false);
  
  // Get translations based on current language or fall back to English
  const t = translations[language.code as keyof typeof translations] || translations.en;
  
  const visibleArticles = showAllArticles ? articlesContent : articlesContent.slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gradient-to-b from-white to-eco-soft/30">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>
          
          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="guides" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                {t.guides}
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                {t.videos}
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                {t.resources}
              </TabsTrigger>
              <TabsTrigger value="articles" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                {t.articles}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="guides" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {guidesContent.map((guide, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={guide.image} 
                        alt={guide.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        {t.readMore}
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="videos" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {videosContent.map((video, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video relative overflow-hidden group cursor-pointer">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white rounded-full p-3 shadow-lg">
                          <svg className="h-8 w-8 text-eco-green" fill="currentColor" viewBox="0 0 24 24">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
                        {video.duration}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{video.title}</CardTitle>
                      <CardDescription>{video.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button size="sm" className="bg-eco-red hover:bg-eco-red-dark flex items-center gap-2">
                        {t.watchNow}
                        <Video className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="resources" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Downloadable Resources</CardTitle>
                  <CardDescription>Access our collection of e-waste educational materials</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {resourcesContent.map((resource, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                        <div className="flex items-start gap-3">
                          <div className="bg-muted p-2 rounded">
                            {resource.fileType === "PDF" && <FileText className="h-6 w-6 text-eco-blue" />}
                            {resource.fileType === "PNG" && <Image className="h-6 w-6 text-eco-green" />}
                            {resource.fileType === "XLSX" && <Table className="h-6 w-6 text-eco-purple" />}
                          </div>
                          <div>
                            <h3 className="font-medium">{resource.title}</h3>
                            <p className="text-sm text-muted-foreground">{resource.description}</p>
                            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                              <span>{resource.fileType}</span>
                              <span>•</span>
                              <span>{resource.fileSize}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          {t.download}
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="articles" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Latest Articles</CardTitle>
                  <CardDescription>Stay informed with our latest articles on e-waste management</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {visibleArticles.map((article, index) => (
                    <div key={index}>
                      <div className="space-y-2">
                        <h3 className="text-xl font-medium">{article.title}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTime} read</span>
                        </div>
                        <p className="text-muted-foreground">{article.excerpt}</p>
                        <Button variant="link" className="p-0 h-auto text-eco-blue flex items-center gap-2">
                          {t.readMore}
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      {index < visibleArticles.length - 1 && <Separator className="my-4" />}
                    </div>
                  ))}
                  
                  {articlesContent.length > 3 && (
                    <Button 
                      variant="outline" 
                      className="w-full mt-4"
                      onClick={() => setShowAllArticles(!showAllArticles)}
                    >
                      {showAllArticles ? (
                        <span className="flex items-center gap-2">
                          {t.viewLess}
                          <ChevronUp className="h-4 w-4" />
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          {t.viewMore}
                          <ChevronDown className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Education;
