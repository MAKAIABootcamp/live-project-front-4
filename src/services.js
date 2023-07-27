/*acceso al correo 
correo: livemakina458@gmail.com 
pass : LiveMakina2023.
*/
  export const fileUpload = async (file) => {
    const cloudName = "dumnzchqo";
    const uploadPreset = "ojuwqug7";
    const urlCloudinary = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  
    try {
      const formData = new FormData();
      formData.append('upload_preset', uploadPreset);
      formData.append('file', file);
  
      const resp = await fetch(urlCloudinary, {
        method: 'POST',
        body: formData
      });
  
      if (!resp.ok) {
        throw new Error('Error uploading image to Cloudinary.');
      }
  
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };
  