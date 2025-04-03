
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, AlertCircle, CheckCircle2, Info, ChevronRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AiRecognition = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
      
      // Reset previous results
      setResult(null);
    }
  };
  
  const handleAnalyze = () => {
    if (!file) return;
    
    setAnalyzing(true);
    
    // Simulate AI analysis (replace with actual API call)
    setTimeout(() => {
      setAnalyzing(false);
      // Mock result
      setResult({
        deviceType: 'Smartphone',
        brand: 'Generic',
        materials: [
          { name: 'Lithium Battery', hazardous: true, recyclingMethod: 'Special processing' },
          { name: 'PCB Board', hazardous: true, recyclingMethod: 'Chemical extraction' },
          { name: 'Glass Screen', hazardous: false, recyclingMethod: 'Glass recycling' },
          { name: 'Plastic Casing', hazardous: false, recyclingMethod: 'Plastic recycling' }
        ],
        environmentalImpact: {
          co2Saved: '12.5kg',
          energySaved: '25kWh',
          waterSaved: '300L'
        },
        recommendedAction: 'Schedule a pickup for safe disposal'
      });
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">AI E-Waste Recognition</h1>
            <p className="text-muted-foreground mb-8">
              Upload a photo of your electronic device to identify its components and get recycling recommendations
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Card className="border-dashed border-2 bg-muted/50 hover:bg-muted/80 transition-colors">
                  <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[400px]">
                    {preview ? (
                      <div className="mb-4 w-full">
                        <img 
                          src={preview} 
                          alt="Device preview" 
                          className="max-h-[300px] mx-auto object-contain" 
                        />
                      </div>
                    ) : (
                      <div className="mb-4 text-center">
                        <div className="bg-eco-soft rounded-full mx-auto p-6 mb-4">
                          <Upload className="h-10 w-10 text-eco-green" />
                        </div>
                        <p className="text-lg font-medium">Upload Device Image</p>
                        <p className="text-muted-foreground mt-2">
                          Drag and drop or click to browse
                        </p>
                      </div>
                    )}
                    
                    <input
                      type="file"
                      id="device-image"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    
                    <div className="mt-4">
                      <Button asChild variant={preview ? "outline" : "default"} size="lg">
                        <label htmlFor="device-image">
                          {preview ? "Change Image" : "Select Image"}
                        </label>
                      </Button>
                      
                      {preview && (
                        <Button 
                          className="ml-4 bg-eco-blue hover:bg-eco-blue-dark"
                          onClick={handleAnalyze}
                          disabled={analyzing}
                        >
                          {analyzing ? "Analyzing..." : "Analyze Device"}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                {!result && !analyzing && (
                  <Card>
                    <CardContent className="pt-6">
                      <Alert>
                        <Info className="h-4 w-4" />
                        <AlertTitle>How it works</AlertTitle>
                        <AlertDescription>
                          Our AI technology identifies electronic devices and their components to provide recycling recommendations.
                        </AlertDescription>
                      </Alert>
                      
                      <div className="mt-6 space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-eco-soft rounded-full p-1 mt-1">
                            <ChevronRight className="h-4 w-4 text-eco-green" />
                          </div>
                          <p>Upload a clear photo of your electronic device</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-eco-soft rounded-full p-1 mt-1">
                            <ChevronRight className="h-4 w-4 text-eco-green" />
                          </div>
                          <p>Our AI analyzes the image to identify the device type and components</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-eco-soft rounded-full p-1 mt-1">
                            <ChevronRight className="h-4 w-4 text-eco-green" />
                          </div>
                          <p>Get detailed information about hazardous materials and proper disposal methods</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-eco-soft rounded-full p-1 mt-1">
                            <ChevronRight className="h-4 w-4 text-eco-green" />
                          </div>
                          <p>Learn about the environmental impact of recycling your device</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {analyzing && (
                  <Card>
                    <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[400px]">
                      <div className="w-16 h-16 border-4 border-eco-green border-t-transparent rounded-full animate-spin mb-4"></div>
                      <p className="text-lg font-medium">Analyzing Device...</p>
                      <p className="text-muted-foreground mt-2">
                        Our AI is identifying the components and materials
                      </p>
                    </CardContent>
                  </Card>
                )}
                
                {result && (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="mb-4">
                        <p className="text-lg font-medium">Device Identified: {result.deviceType}</p>
                        {result.brand && <p className="text-muted-foreground">Brand: {result.brand}</p>}
                      </div>
                      
                      <div className="mb-6">
                        <p className="font-medium mb-2">Materials Detected:</p>
                        <div className="space-y-3">
                          {result.materials.map((material: any, index: number) => (
                            <div key={index} className="flex items-start gap-3">
                              {material.hazardous ? (
                                <AlertCircle className="h-5 w-5 text-destructive" />
                              ) : (
                                <CheckCircle2 className="h-5 w-5 text-eco-green" />
                              )}
                              <div>
                                <p className="font-medium">{material.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {material.hazardous ? 'Hazardous Material' : 'Non-hazardous Material'}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Recycling: {material.recyclingMethod}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <p className="font-medium mb-2">Environmental Impact of Recycling:</p>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-eco-soft p-3 rounded-lg text-center">
                            <p className="text-sm text-muted-foreground">CO₂ Saved</p>
                            <p className="font-medium text-eco-green">{result.environmentalImpact.co2Saved}</p>
                          </div>
                          <div className="bg-eco-soft p-3 rounded-lg text-center">
                            <p className="text-sm text-muted-foreground">Energy Saved</p>
                            <p className="font-medium text-eco-green">{result.environmentalImpact.energySaved}</p>
                          </div>
                          <div className="bg-eco-soft p-3 rounded-lg text-center">
                            <p className="text-sm text-muted-foreground">Water Saved</p>
                            <p className="font-medium text-eco-green">{result.environmentalImpact.waterSaved}</p>
                          </div>
                        </div>
                      </div>
                      
                      <Alert className="bg-eco-green/10 border-eco-green">
                        <CheckCircle2 className="h-4 w-4 text-eco-green" />
                        <AlertTitle>Recommended Action</AlertTitle>
                        <AlertDescription>
                          {result.recommendedAction}
                        </AlertDescription>
                      </Alert>
                      
                      <div className="mt-6 flex justify-end gap-2">
                        <Button variant="outline">
                          Save Report
                        </Button>
                        <Button className="bg-eco-green hover:bg-eco-green-dark">
                          Schedule Pickup
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AiRecognition;
