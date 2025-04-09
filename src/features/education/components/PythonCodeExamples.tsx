import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, CheckCheck } from 'lucide-react';

interface PythonCodeExamplesProps {
  translations: {
    title: string;
    description: string;
    copyCode: string;
    copied: string;
  };
}

const PythonCodeExamples: React.FC<PythonCodeExamplesProps> = ({ translations: t }) => {
  const [copiedStates, setCopiedStates] = React.useState<{[key: string]: boolean}>({});
  
  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedStates({...copiedStates, [id]: true});
    setTimeout(() => {
      setCopiedStates({...copiedStates, [id]: false});
    }, 2000);
  };

  const codeExamples = [
    {
      id: 'ewaste-analysis',
      title: 'E-waste Analysis',
      description: 'Analyze e-waste data using pandas and matplotlib',
      code: `import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Load e-waste data
def load_ewaste_data(filepath):
    """Load e-waste dataset from CSV file"""
    return pd.read_csv(filepath)

# Sample data creation (for demonstration)
def create_sample_data():
    """Create sample e-waste data for demonstration"""
    dates = pd.date_range(start="2023-01-01", periods=12, freq="M")
    categories = ["Electronics", "Batteries", "Appliances", "Cables", "Other"]
    
    data = []
    for date in dates:
        for category in categories:
            weight = np.random.randint(50, 500)
            carbon_saved = weight * 0.5  # simplified calculation
            data.append({
                "date": date,
                "category": category,
                "weight_kg": weight,
                "carbon_saved_kg": carbon_saved
            })
    
    return pd.DataFrame(data)

# Analysis functions
def analyze_ewaste_by_category(df):
    """Analyze e-waste by category and create visualizations"""
    category_totals = df.groupby('category')['weight_kg'].sum().reset_index()
    
    plt.figure(figsize=(10, 6))
    plt.bar(category_totals['category'], category_totals['weight_kg'], color='green')
    plt.title('E-waste Collection by Category')
    plt.xlabel('Category')
    plt.ylabel('Weight (kg)')
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.savefig('ewaste_by_category.png')
    
    return category_totals

def calculate_environmental_impact(df):
    """Calculate environmental impact metrics"""
    total_ewaste = df['weight_kg'].sum()
    total_carbon_saved = df['carbon_saved_kg'].sum()
    
    # Equivalent metrics (simplified calculations)
    trees_saved = total_carbon_saved / 21  # approx 21kg CO2 per tree per year
    water_saved = total_ewaste * 1000  # liters of water
    
    return {
        'total_ewaste_kg': total_ewaste,
        'carbon_saved_kg': total_carbon_saved,
        'trees_equivalent': trees_saved,
        'water_saved_liters': water_saved
    }

# Main execution
if __name__ == "__main__":
    # Either load real data or use sample data
    # df = load_ewaste_data("ewaste_data.csv")
    df = create_sample_data()
    
    # Perform analysis
    category_analysis = analyze_ewaste_by_category(df)
    impact = calculate_environmental_impact(df)
    
    print("E-waste Analysis Results:")
    print(f"Total e-waste collected: {impact['total_ewaste_kg']:.2f} kg")
    print(f"Carbon emissions saved: {impact['carbon_saved_kg']:.2f} kg")
    print(f"Equivalent to planting {impact['trees_equivalent']:.2f} trees")
    print(f"Water saved: {impact['water_saved_liters']:.2f} liters")
`
    },
    {
      id: 'material-recovery',
      title: 'Material Recovery Simulation',
      description: 'Simulate the material recovery process from e-waste',
      code: `import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import minimize

class MaterialRecoverySimulation:
    """Simulate material recovery from e-waste using optimization techniques"""
    
    def __init__(self):
        # Define material composition of typical e-waste (percentages)
        self.materials = {
            'Plastics': 0.30,
            'Copper': 0.20,
            'Aluminum': 0.14,
            'Iron': 0.18,
            'Gold': 0.0001,
            'Silver': 0.0005,
            'Rare Earth': 0.002,
            'Other': 0.1774
        }
        
        # Recovery efficiency by process type (simplified)
        self.processes = {
            'manual_disassembly': {
                'Plastics': 0.85,
                'Copper': 0.70,
                'Aluminum': 0.90,
                'Iron': 0.95,
                'Gold': 0.20,
                'Silver': 0.25,
                'Rare Earth': 0.10,
                'Other': 0.30
            },
            'mechanical_processing': {
                'Plastics': 0.60,
                'Copper': 0.85,
                'Aluminum': 0.80,
                'Iron': 0.90,
                'Gold': 0.60,
                'Silver': 0.65,
                'Rare Earth': 0.20,
                'Other': 0.40
            },
            'chemical_extraction': {
                'Plastics': 0.10,
                'Copper': 0.95,
                'Aluminum': 0.60,
                'Iron': 0.40,
                'Gold': 0.98,
                'Silver': 0.97,
                'Rare Earth': 0.85,
                'Other': 0.20
            }
        }
        
        # Process costs per kg (in currency units)
        self.process_costs = {
            'manual_disassembly': 25,
            'mechanical_processing': 10,
            'chemical_extraction': 40
        }
        
        # Material value per kg (in currency units)
        self.material_values = {
            'Plastics': 0.5,
            'Copper': 8.0,
            'Aluminum': 1.8,
            'Iron': 0.3,
            'Gold': 50000,
            'Silver': 800,
            'Rare Earth': 30,
            'Other': 0.1
        }
    
    def optimize_recovery_allocation(self, ewaste_kg):
        """Optimize the allocation of e-waste to different recovery processes"""
        processes = list(self.processes.keys())
        initial_allocation = np.ones(len(processes)) / len(processes)
        
        bounds = [(0, 1) for _ in processes]
        constraints = [{'type': 'eq', 'fun': lambda x: np.sum(x) - 1}]
        
        result = minimize(
            lambda x: -self._calculate_profit(ewaste_kg, x),
            initial_allocation,
            method='SLSQP',
            bounds=bounds,
            constraints=constraints
        )
        
        return {proc: alloc for proc, alloc in zip(processes, result.x)}
    
    def _calculate_profit(self, ewaste_kg, allocation):
        """Calculate profit based on allocation of e-waste to different processes"""
        processes = list(self.processes.keys())
        total_profit = 0
        
        for i, process in enumerate(processes):
            if allocation[i] == 0:
                continue
                
            process_kg = ewaste_kg * allocation[i]
            process_cost = process_kg * self.process_costs[process]
            
            recovery_value = 0
            for material, composition in self.materials.items():
                material_kg = process_kg * composition
                recovered_kg = material_kg * self.processes[process][material]
                recovery_value += recovered_kg * self.material_values[material]
            
            process_profit = recovery_value - process_cost
            total_profit += process_profit
            
        return total_profit
    
    def simulate_recovery(self, ewaste_kg, allocation=None):
        """Simulate material recovery based on given allocation or optimized allocation"""
        if allocation is None:
            allocation = self.optimize_recovery_allocation(ewaste_kg)
            
        processes = list(self.processes.keys())
        results = {
            'allocation': allocation,
            'recovered_materials': {m: 0 for m in self.materials},
            'total_value': 0,
            'total_cost': 0,
            'profit': 0
        }
        
        for process, alloc in allocation.items():
            process_kg = ewaste_kg * alloc
            results['total_cost'] += process_kg * self.process_costs[process]
            
            for material, composition in self.materials.items():
                material_kg = process_kg * composition
                recovered_kg = material_kg * self.processes[process][material]
                results['recovered_materials'][material] += recovered_kg
                results['total_value'] += recovered_kg * self.material_values[material]
        
        results['profit'] = results['total_value'] - results['total_cost']
        results['recovery_rate'] = sum(results['recovered_materials'].values()) / ewaste_kg
        
        return results
        
    def plot_results(self, results):
        """Plot the simulation results"""
        # Plot material recovery
        materials = list(results['recovered_materials'].keys())
        recovered_amounts = list(results['recovered_materials'].values())
        
        plt.figure(figsize=(12, 10))
        
        plt.subplot(2, 2, 1)
        plt.bar(materials, recovered_amounts)
        plt.title('Recovered Materials (kg)')
        plt.xticks(rotation=45)
        
        # Plot allocation
        plt.subplot(2, 2, 2)
        plt.pie(
            list(results['allocation'].values()), 
            labels=list(results['allocation'].keys()),
            autopct='%1.1f%%'
        )
        plt.title('Process Allocation')
        
        # Plot financials
        plt.subplot(2, 2, 3)
        plt.bar(['Cost', 'Value', 'Profit'], 
                [results['total_cost'], results['total_value'], results['profit']])
        plt.title('Financial Analysis')
        
        # Plot recovery efficiency
        plt.subplot(2, 2, 4)
        plt.bar(['Recovered', 'Lost'], 
                [results['recovery_rate'], 1 - results['recovery_rate']])
        plt.title(f'Recovery Rate: {results["recovery_rate"]*100:.1f}%')
        
        plt.tight_layout()
        plt.savefig('recovery_simulation.png')

# Example usage
if __name__ == "__main__":
    sim = MaterialRecoverySimulation()
    
    # Simulate processing 1000 kg of e-waste
    ewaste_amount = 1000  # kg
    
    # Get optimized allocation
    optimal_allocation = sim.optimize_recovery_allocation(ewaste_amount)
    print("Optimal allocation:")
    for process, alloc in optimal_allocation.items():
        print(f"{process}: {alloc*100:.1f}%")
    
    # Run simulation with optimal allocation
    results = sim.simulate_recovery(ewaste_amount, optimal_allocation)
    
    print("\\nTotal e-waste: {} kg".format(ewaste_amount))
    print("Recovery rate: {:.1f}%".format(results['recovery_rate']*100))
    print("Total value recovered: ${:.2f}".format(results['total_value']))
    print("Total processing cost: ${:.2f}".format(results['total_cost']))
    print("Net profit: ${:.2f}".format(results['profit']))
    
    # Plot results
    sim.plot_results(results)
`
    },
    {
      id: 'ai-detection',
      title: 'AI-based E-waste Detection',
      description: 'Detect electronics in images using computer vision',
      code: `import numpy as np
import cv2
import tensorflow as tf
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D

class EwasteDetector:
    """Detect electronic devices in images using transfer learning"""
    
    def __init__(self, model_path=None):
        # Device categories for detection
        self.categories = [
            'smartphone', 'laptop', 'tablet', 'desktop', 'printer',
            'monitor', 'keyboard', 'mouse', 'speaker', 'camera',
            'router', 'cord', 'battery', 'hard-drive'
        ]
        
        # Initialize model
        if model_path:
            self.model = tf.keras.models.load_model(model_path)
        else:
            self.model = self._build_model()
    
    def _build_model(self):
        """Build a transfer learning model based on MobileNetV2"""
        # Use MobileNetV2 as base model (lightweight and fast)
        base_model = MobileNetV2(
            weights='imagenet',
            include_top=False, 
            input_shape=(224, 224, 3)
        )
        
        # Freeze the base model layers
        base_model.trainable = False
        
        # Add classification head
        x = base_model.output
        x = GlobalAveragePooling2D()(x)
        x = Dense(128, activation='relu')(x)
        predictions = Dense(len(self.categories) + 1, activation='softmax')(x)  # +1 for background
        
        # Create the model
        model = Model(inputs=base_model.input, outputs=predictions)
        
        # Compile model
        model.compile(
            optimizer='adam',
            loss='categorical_crossentropy',
            metrics=['accuracy']
        )
        
        return model
    
    def train(self, train_data_dir, validation_data_dir, epochs=10):
        """Train the model on electronic waste images"""
        # Data augmentation for training
        train_datagen = tf.keras.preprocessing.image.ImageDataGenerator(
            preprocessing_function=preprocess_input,
            rotation_range=20,
            width_shift_range=0.2,
            height_shift_range=0.2,
            shear_range=0.2,
            zoom_range=0.2,
            horizontal_flip=True,
            fill_mode='nearest'
        )
        
        # Only preprocessing for validation
        val_datagen = tf.keras.preprocessing.image.ImageDataGenerator(
            preprocessing_function=preprocess_input
        )
        
        # Load data from directories
        train_generator = train_datagen.flow_from_directory(
            train_data_dir,
            target_size=(224, 224),
            batch_size=32,
            class_mode='categorical'
        )
        
        validation_generator = val_datagen.flow_from_directory(
            validation_data_dir,
            target_size=(224, 224),
            batch_size=32,
            class_mode='categorical'
        )
        
        # Train the model
        history = self.model.fit(
            train_generator,
            steps_per_epoch=train_generator.samples // train_generator.batch_size,
            epochs=epochs,
            validation_data=validation_generator,
            validation_steps=validation_generator.samples // validation_generator.batch_size
        )
        
        return history
    
    def save_model(self, model_path):
        """Save the trained model"""
        self.model.save(model_path)
        print(f"Model saved to {model_path}")
    
    def preprocess_image(self, img_path):
        """Preprocess an image for prediction"""
        img = image.load_img(img_path, target_size=(224, 224))
        x = image.img_to_array(img)
        x = np.expand_dims(x, axis=0)
        x = preprocess_input(x)
        return x
    
    def predict_image(self, img_path):
        """Predict the device type in an image"""
        processed_img = self.preprocess_image(img_path)
        predictions = self.model.predict(processed_img)
        
        # Get top prediction
        top_idx = np.argmax(predictions[0])
        confidence = predictions[0][top_idx]
        
        # If background or low confidence, return None
        if top_idx == len(self.categories) or confidence < 0.5:
            return None, 0
        
        return self.categories[top_idx], confidence
    
    def detect_devices(self, img_path):
        """Detect multiple electronic devices in an image"""
        # Load image
        img = cv2.imread(img_path)
        original_img = img.copy()
        
        # Selective search for region proposals
        ss = cv2.ximgproc.segmentation.createSelectiveSearchSegmentation()
        ss.setBaseImage(img)
        ss.switchToSelectiveSearchFast()
        rects = ss.process()
        
        # Limit number of region proposals
        max_regions = 200
        rects = rects[:min(len(rects), max_regions)]
        
        detected_devices = []
        
        # Process each region
        for (x, y, w, h) in rects:
            # Extract region
            region = original_img[y:y+h, x:x+w]
            
            # Skip too small regions
            if w < 30 or h < 30:
                continue
                
            # Preprocess region
            resized = cv2.resize(region, (224, 224))
            x_test = preprocess_input(np.expand_dims(resized, axis=0))
            
            # Predict
            preds = self.model.predict(x_test)
            top_idx = np.argmax(preds[0])
            confidence = preds[0][top_idx]
            
            # Filter background and low confidence
            if top_idx < len(self.categories) and confidence > 0.7:
                device_type = self.categories[top_idx]
                detected_devices.append({
                    'device': device_type,
                    'confidence': confidence,
                    'bbox': (x, y, w, h)
                })
        
        # Non-max suppression to eliminate overlaps
        final_detections = self._non_max_suppression(detected_devices)
        
        # Draw results on the image
        result_img = original_img.copy()
        for det in final_detections:
            x, y, w, h = det['bbox']
            label = f"{det['device']}: {det['confidence']:.2f}"
            cv2.rectangle(result_img, (x, y), (x+w, y+h), (0, 255, 0), 2)
            cv2.putText(result_img, label, (x, y-10),
                      cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
        
        # Save result image
        output_path = 'detected_devices.jpg'
        cv2.imwrite(output_path, result_img)
        
        return final_detections, output_path
    
    def _non_max_suppression(self, detections, iou_thresh=0.5):
        """Apply non-maximum suppression to avoid duplicate detections"""
        if len(detections) == 0:
            return []
            
        # Sort by confidence
        detections = sorted(detections, key=lambda x: x['confidence'], reverse=True)
        
        final_detections = []
        while len(detections) > 0:
            # Take the detection with highest confidence
            best_detection = detections[0]
            final_detections.append(best_detection)
            
            # Remove overlapping detections
            remaining_detections = []
            for detection in detections[1:]:
                if self._calculate_iou(best_detection['bbox'], detection['bbox']) < iou_thresh:
                    remaining_detections.append(detection)
            
            detections = remaining_detections
            
        return final_detections
    
    def _calculate_iou(self, box1, box2):
        """Calculate Intersection over Union between two boxes"""
        x1, y1, w1, h1 = box1
        x2, y2, w2, h2 = box2
        
        # Calculate coordinates of intersection
        x_left = max(x1, x2)
        y_top = max(y1, y2)
        x_right = min(x1 + w1, x2 + w2)
        y_bottom = min(y1 + h1, y2 + h2)
        
        # No intersection
        if x_right < x_left or y_bottom < y_top:
            return 0.0
            
        # Calculate areas
        intersection_area = (x_right - x_left) * (y_bottom - y_top)
        box1_area = w1 * h1
        box2_area = w2 * h2
        union_area = box1_area + box2_area - intersection_area
        
        # Calculate IoU
        iou = intersection_area / union_area
        
        return iou

# Example usage
if __name__ == "__main__":
    detector = EwasteDetector()
    
    # To train the model (requires dataset):
    # history = detector.train('path/to/train/data', 'path/to/validation/data', epochs=10)
    # detector.save_model('ewaste_detector_model.h5')
    
    # To use a pre-trained model:
    # detector = EwasteDetector('ewaste_detector_model.h5')
    
    # Single image classification
    device, confidence = detector.predict_image('example_device.jpg')
    if device:
        print(f"Detected {device} with {confidence:.2f} confidence")
    else:
        print("No electronic device detected")
        
    # Multiple device detection
    detections, output_image = detector.detect_devices('multiple_devices.jpg')
    print(f"Detected {len(detections)} devices, result saved to {output_image}")
    for det in detections:
        print(f"- {det['device']} ({det['confidence']:.2f})")
`
    }
  ];

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{t.title}</CardTitle>
        <CardDescription>
          {t.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={codeExamples[0].id} className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            {codeExamples.map((example) => (
              <TabsTrigger key={example.id} value={example.id}>
                {example.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {codeExamples.map((example) => (
            <TabsContent key={example.id} value={example.id}>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-1">{example.title}</h3>
                <p className="text-muted-foreground">{example.description}</p>
              </div>
              
              <div className="relative">
                <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-auto max-h-[500px]">
                  <code className="text-sm font-mono">{example.code}</code>
                </pre>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="absolute top-2 right-2 bg-slate-800 text-white hover:bg-slate-700"
                  onClick={() => handleCopyCode(example.code, example.id)}
                >
                  {copiedStates[example.id] ? (
                    <>
                      <CheckCheck className="h-4 w-4 mr-1" />
                      {t.copied}
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-1" />
                      {t.copyCode}
                    </>
                  )}
                </Button>
              </div>
              
              <div className="mt-4 text-sm text-muted-foreground">
                <p>
                  <strong>Note:</strong> To run this code, you'll need Python with the required libraries installed. 
                  The examples above are for educational purposes and demonstrate how Python can be used for e-waste 
                  management and analysis.
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PythonCodeExamples;
