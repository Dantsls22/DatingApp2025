using CloudinaryDotNet.Actions;

namespace API.Interfaces;

public interface IPhotoService
{
<<<<<<< HEAD
    Task<ImageUploadResult> UploadPhotoAsync(IFormFile file);
=======
    Task<ImageUploadResult> UploadPhotoAsync(IFormFile formFile);
>>>>>>> basaar/parcial05
    Task<DeletionResult> DeletePhotoAsync(string publicId);
}