
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Code, AlertTriangle, Terminal, Database, FileSpreadsheet, BarChart4, GitBranch } from 'lucide-react';
import PythonCodeExamples from '@/features/education/components/PythonCodeExamples';

const PythonTools = () => {
  const { language } = useLanguage();
  
  // Python translations
  const pythonTranslations = {
    title: language.code === 'es' ? 'Herramientas Python' :
           language.code === 'fr' ? 'Outils Python' :
           language.code === 'zh' ? 'Python 工具' :
           'Python Tools',
    description: language.code === 'es' ? 'Explore herramientas Python para análisis de residuos electrónicos' :
                 language.code === 'fr' ? 'Explorez les outils Python pour l\'analyse des déchets électroniques' :
                 language.code === 'zh' ? '探索用于电子垃圾分析的 Python 工具' :
                 'Explore Python tools for e-waste analysis',
    copyCode: language.code === 'es' ? 'Copiar Código' :
              language.code === 'fr' ? 'Copier le Code' :
              language.code === 'zh' ? '复制代码' :
              'Copy Code',
    copied: language.code === 'es' ? 'Copiado' :
            language.code === 'fr' ? 'Copié' :
            language.code === 'zh' ? '已复制' :
            'Copied'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gradient-to-b from-white to-eco-soft/30">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-eco-green/10 text-eco-green px-4 py-2 rounded-full mb-4">
              <Terminal className="h-5 w-5" />
              <span className="font-medium">Python Integration</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">EcoTrack Python Tools</h1>
            <p className="text-xl text-muted-foreground">
              Harness the power of Python for advanced e-waste analytics and processing
            </p>
          </div>
          
          <Alert className="mb-8 bg-amber-50 border-amber-200">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <AlertTitle className="text-amber-800">Server-side Only</AlertTitle>
            <AlertDescription className="text-amber-700">
              These Python tools are designed to run on a server environment. The examples shown here are for demonstration purposes only.
            </AlertDescription>
          </Alert>
          
          <Tabs defaultValue="examples" className="w-full">
            <TabsList className="w-full grid grid-cols-4 mb-8">
              <TabsTrigger value="examples">
                <Code className="h-4 w-4 mr-2" /> 
                Code Examples
              </TabsTrigger>
              <TabsTrigger value="api">
                <GitBranch className="h-4 w-4 mr-2" /> 
                API Integration
              </TabsTrigger>
              <TabsTrigger value="analytics">
                <BarChart4 className="h-4 w-4 mr-2" /> 
                Analytics Tools
              </TabsTrigger>
              <TabsTrigger value="database">
                <Database className="h-4 w-4 mr-2" /> 
                Data Processing
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="examples">
              <PythonCodeExamples translations={pythonTranslations} />
            </TabsContent>
            
            <TabsContent value="api">
              <Card>
                <CardHeader>
                  <CardTitle>Python API Integration</CardTitle>
                  <CardDescription>
                    Connect your EcoTrack platform to Python-powered backend services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border rounded-lg p-6">
                        <h3 className="text-lg font-medium mb-2">Flask API Example</h3>
                        <p className="text-muted-foreground mb-4">
                          Create a simple REST API for your e-waste management system using Flask
                        </p>
                        <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-auto text-sm mb-4 max-h-[200px]">
                          <code>{`from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/ewaste/stats', methods=['GET'])
def get_ewaste_stats():
    # In a real app, fetch from database
    return jsonify({
        'total_collected': 15420,
        'categories': {
            'electronics': 6500,
            'batteries': 2320,
            'appliances': 6600
        }
    })

if __name__ == '__main__':
    app.run(debug=True)`}</code>
                        </pre>
                        <Button variant="outline" className="w-full">
                          View Complete API Documentation
                        </Button>
                      </div>
                      
                      <div className="border rounded-lg p-6">
                        <h3 className="text-lg font-medium mb-2">FastAPI Integration</h3>
                        <p className="text-muted-foreground mb-4">
                          Modern, high-performance API with automatic OpenAPI documentation
                        </p>
                        <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-auto text-sm mb-4 max-h-[200px]">
                          <code>{`from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(
    title="EcoTrack API",
    description="E-waste management API"
)

class EwasteItem(BaseModel):
    type: str
    weight: float
    hazardous: bool
    components: List[str]

@app.post("/api/items/")
async def create_item(item: EwasteItem):
    # In a real app, save to database
    return {"id": "1234", **item.dict()}`}</code>
                        </pre>
                        <Button variant="outline" className="w-full">
                          View API Integration Guide
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Python Analytics Tools</CardTitle>
                  <CardDescription>
                    Leverage powerful Python data science libraries for e-waste insights
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <div className="bg-eco-soft p-2 rounded-md w-10 h-10 flex items-center justify-center mb-2">
                          <FileSpreadsheet className="h-6 w-6 text-eco-green" />
                        </div>
                        <CardTitle className="text-lg">Pandas Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Process and analyze large e-waste datasets using Pandas dataframes
                        </p>
                        <ul className="text-sm space-y-2">
                          <li>• Time series analysis of collection rates</li>
                          <li>• Demographic sorting and filtering</li>
                          <li>• Material recovery calculations</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                          View Examples
                        </Button>
                      </CardFooter>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <div className="bg-eco-soft p-2 rounded-md w-10 h-10 flex items-center justify-center mb-2">
                          <BarChart4 className="h-6 w-6 text-eco-green" />
                        </div>
                        <CardTitle className="text-lg">Visualization</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Create insightful visualizations with Matplotlib, Seaborn, and Plotly
                        </p>
                        <ul className="text-sm space-y-2">
                          <li>• Interactive dashboards</li>
                          <li>• Geospatial e-waste mapping</li>
                          <li>• Material composition charts</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                          View Examples
                        </Button>
                      </CardFooter>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <div className="bg-eco-soft p-2 rounded-md w-10 h-10 flex items-center justify-center mb-2">
                          <Code className="h-6 w-6 text-eco-green" />
                        </div>
                        <CardTitle className="text-lg">Machine Learning</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          Apply scikit-learn and TensorFlow for predictive e-waste analytics
                        </p>
                        <ul className="text-sm space-y-2">
                          <li>• Collection volume predictions</li>
                          <li>• Device classification models</li>
                          <li>• Optimized recycling workflows</li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                          View Examples
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="database">
              <Card>
                <CardHeader>
                  <CardTitle>Python Data Processing Tools</CardTitle>
                  <CardDescription>
                    Process and manage e-waste data efficiently with Python
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-slate-50 rounded-lg p-6 border">
                      <h3 className="text-xl font-medium mb-4">Data Pipeline Architecture</h3>
                      <div className="bg-white p-4 rounded-lg border">
                        <div className="grid grid-cols-5 gap-4">
                          <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-eco-soft flex items-center justify-center mb-2">
                              <Database className="h-8 w-8 text-eco-green" />
                            </div>
                            <span className="text-sm font-medium">Data Collection</span>
                          </div>
                          <div className="flex items-center justify-center">
                            <div className="w-full h-2 bg-eco-green relative">
                              <div className="absolute -top-1 right-0 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px] border-r-eco-green"></div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-eco-soft flex items-center justify-center mb-2">
                              <Code className="h-8 w-8 text-eco-green" />
                            </div>
                            <span className="text-sm font-medium">Python Processing</span>
                          </div>
                          <div className="flex items-center justify-center">
                            <div className="w-full h-2 bg-eco-green relative">
                              <div className="absolute -top-1 right-0 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px] border-r-eco-green"></div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-eco-soft flex items-center justify-center mb-2">
                              <BarChart4 className="h-8 w-8 text-eco-green" />
                            </div>
                            <span className="text-sm font-medium">Dashboard</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border rounded-lg p-6">
                        <h3 className="text-lg font-medium mb-2">ETL Processing</h3>
                        <p className="text-muted-foreground mb-4">
                          Extract, Transform, Load processes for e-waste data management
                        </p>
                        <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-auto text-sm max-h-[200px]">
                          <code>{`import pandas as pd
import numpy as np
from sqlalchemy import create_engine

# Extract data
def extract_data():
    collection_data = pd.read_csv('collection_data.csv')
    device_data = pd.read_json('device_data.json')
    return collection_data, device_data

# Transform data
def transform_data(collection_data, device_data):
    # Merge datasets
    merged_data = pd.merge(
        collection_data, 
        device_data,
        on='device_id'
    )
    
    # Calculate environmental impact
    merged_data['co2_saved'] = merged_data['weight'] * 0.5
    
    return merged_data

# Load data
def load_data(transformed_data):
    engine = create_engine('postgresql://user:pass@localhost:5432/ewaste_db')
    transformed_data.to_sql('processed_collections', engine, if_exists='append')
    
# Run ETL process
collection_data, device_data = extract_data()
transformed = transform_data(collection_data, device_data)
load_data(transformed)`}</code>
                        </pre>
                      </div>
                      
                      <div className="border rounded-lg p-6">
                        <h3 className="text-lg font-medium mb-2">Real-time Processing</h3>
                        <p className="text-muted-foreground mb-4">
                          Stream processing of e-waste collection data with Python
                        </p>
                        <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-auto text-sm max-h-[200px]">
                          <code>{`import pandas as pd
from kafka import KafkaConsumer
import json
import time

# Configure Kafka consumer
consumer = KafkaConsumer(
    'ewaste-collections',
    bootstrap_servers=['localhost:9092'],
    auto_offset_reset='latest',
    value_deserializer=lambda x: json.loads(x.decode('utf-8'))
)

# Process streams in real-time
collection_data = []

print("Starting real-time processing...")
for message in consumer:
    data = message.value
    
    # Process the data
    processed_data = {
        'timestamp': data['timestamp'],
        'location': data['location'],
        'device_type': data['device_type'],
        'weight': float(data['weight']),
        'estimated_impact': float(data['weight']) * 0.5
    }
    
    # Append to our collection
    collection_data.append(processed_data)
    
    # Every 100 records, perform batch processing
    if len(collection_data) >= 100:
        df = pd.DataFrame(collection_data)
        
        # Calculate statistics
        print(f"Processing batch of {len(df)} records")
        print(f"Total weight collected: {df['weight'].sum()} kg")
        print(f"Environmental impact: {df['estimated_impact'].sum()} kg CO2 saved")
        
        # Save to database or file
        df.to_csv(f"batch_processing_{time.time()}.csv", index=False)
        
        # Clear the collection
        collection_data = []`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full md:w-auto bg-eco-green hover:bg-eco-green-dark">
                    <Terminal className="mr-2 h-4 w-4" />
                    Download Complete Python Toolkit
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PythonTools;
