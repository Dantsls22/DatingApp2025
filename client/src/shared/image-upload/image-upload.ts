<<<<<<< HEAD
import { Component, input, output, signal, Signal } from '@angular/core';
=======
import { Component, input, output, signal } from '@angular/core';
>>>>>>> basaar/parcial05

@Component({
  selector: 'app-image-upload',
  imports: [],
  templateUrl: './image-upload.html',
  styleUrl: './image-upload.css'
})
export class ImageUpload {
  private fileToUpload: File | null = null;
  protected imageSource = signal<string | ArrayBuffer | null | undefined>(null);
  protected isDragging = false;

  uploadFile = output<File>();
  loading = input<boolean>(false);

<<<<<<< HEAD
  onDragoOver(event: DragEvent) {
=======
  onDragOver(event: DragEvent) {
>>>>>>> basaar/parcial05
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }
<<<<<<< HEAD
  OnDragLeave(event: DragEvent) {
=======

  onDragLeave(event: DragEvent) {
>>>>>>> basaar/parcial05
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];
      this.previewImage(file);
      this.fileToUpload = file;
    }
  }
<<<<<<< HEAD
=======

>>>>>>> basaar/parcial05
  onCancel() {
    this.fileToUpload = null;
    this.imageSource.set(null);
  }

  onUploadFile() {
    if (this.fileToUpload) {
      this.uploadFile.emit(this.fileToUpload);
    }
  }

  private previewImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => this.imageSource.set(e.target?.result);
    reader.readAsDataURL(file);
<<<<<<< HEAD

=======
>>>>>>> basaar/parcial05
  }
}
