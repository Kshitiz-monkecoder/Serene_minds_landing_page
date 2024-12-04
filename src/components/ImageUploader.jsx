import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "https://qmdfzzfphkfybewcyhej.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtZGZ6emZwaGtmeWJld2N5aGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1MzI3NzYsImV4cCI6MjA0NjEwODc3Nn0.0I0muA0hJLo4DeYLewc2tCxPHG0TnenZOuTSHwv12Mg";
const supabase = createClient(supabaseUrl, supabaseKey);

const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");
  };

  const uploadImage = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    try {
      setUploading(true);
      const fileName = `${Date.now()}_${file.name}`;
      // eslint-disable-next-line no-unused-vars
      const { data, error } = await supabase.storage
        .from("images") // Replace with your storage bucket name
        .upload(fileName, file);

      if (error) throw error;

      const { publicUrl } = supabase.storage.from("images").getPublicUrl(fileName);
      setUrl(publicUrl);
    } catch (err) {
      console.error("Error uploading file:", err.message);
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Image Uploader</h1>
      <input
        type="file"
        onChange={handleFileChange}
        className="block mt-4"
        accept="image/*"
      />
      <button
        onClick={uploadImage}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {url && (
        <div className="mt-4">
          <p>Image Uploaded Successfully:</p>
          <img src={url} alt="Uploaded" className="mt-2 max-w-xs" />
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 mt-2"
          >
            View Image
          </a>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
