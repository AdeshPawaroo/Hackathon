
import React, { useState, useRef } from 'react';
import { FaUpload, FaFileUpload } from 'react-icons/fa';

type ImageUploadProps = {
  label: string;
  currentImage: string;
  onImageChange: (file: File) => void;
};

const ImageUpload: React.FC<ImageUploadProps> = ({ label, currentImage }) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');
  const [preview, setPreview] = useState(currentImage);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setPreview(URL.createObjectURL(selectedFile)); // Preview the image
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = () => {
    // Handle the upload process here
    // Since there's no backend yet, this function will not perform any server-side upload
    // The image will be shown in the preview and will be lost on page refresh
  };

  return (
    <div className="space-y-4 bg-gray-100 p-4 rounded-lg">
      <label className="block text-lg font-medium text-gray-700">{label}</label>
      <img src={preview} alt={`Preview of ${label}`} className="h-40 w-40 object-cover rounded-md" />

      <input
        ref={fileInputRef}
        type="file"
        onChange={handleImageSelect}
        className="hidden"
      />

      {file ? (
        <>
          <p className="text-jada-blue-600">{fileName}</p>
          <button
            onClick={handleUpload}
            className="flex items-center justify-center px-4 py-2 text-white bg-jada-purple-600 hover:bg-jada-purple-700 rounded-md"
          >
            <FaUpload className="mr-2" />
            Upload
          </button>
        </>
      ) : (
        <button
          onClick={triggerFileInput}
          className="flex items-center justify-center px-4 py-2 text-white bg-jada-blue-600 hover:bg-jada-blue-700 rounded-md"
        >
          <FaFileUpload className="mr-2" />
          Choose File
        </button>
      )}
    </div>
  );
};

export default ImageUpload;