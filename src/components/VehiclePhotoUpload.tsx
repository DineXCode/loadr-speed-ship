
import React, { useState } from 'react';
import { Camera, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

interface VehiclePhotoUploadProps {
  onPhotoUploaded: (photoUrl: string) => void;
}

const VehiclePhotoUpload: React.FC<VehiclePhotoUploadProps> = ({ onPhotoUploaded }) => {
  const { toast } = useToast();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create a preview
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setPreviewUrl(reader.result);
        
        // In a real app, you would upload to a server here
        // For now, we'll simulate an upload
        setIsUploading(true);
        setTimeout(() => {
          setIsUploading(false);
          onPhotoUploaded(reader.result as string);
          toast({
            title: "Photo uploaded successfully",
            description: "Customers will be able to find your vehicle using AR.",
          });
        }, 1500);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg bg-white">
      <h3 className="text-lg font-semibold mb-4">Upload Vehicle Photo for AR</h3>
      <p className="text-sm text-gray-600 mb-4">
        Upload a clear photo of your vehicle to help customers find you easily using Augmented Reality.
      </p>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="vehicle-photo-upload" className="w-full">
            <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-loadr">
              {previewUrl ? (
                <div className="relative w-full">
                  <img src={previewUrl} alt="Vehicle preview" className="w-full h-40 object-cover rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white rounded-lg">
                    <span>Click to change</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Camera size={40} className="text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">Click to upload vehicle photo</span>
                </div>
              )}
            </div>
          </label>
          <Input 
            id="vehicle-photo-upload" 
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
        
        {isUploading && (
          <div className="flex items-center justify-center">
            <div className="rounded-full h-6 w-6 border-b-2 border-loadr"></div>
            <span className="ml-2 text-sm text-gray-600">Uploading...</span>
          </div>
        )}
        
        {previewUrl && !isUploading && (
          <div className="text-sm text-gray-600">
            <p className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Vehicle photo ready for AR recognition
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehiclePhotoUpload;
