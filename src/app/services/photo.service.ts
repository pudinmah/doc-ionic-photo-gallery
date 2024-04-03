import { Injectable } from '@angular/core';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photos :any[] = [];


  constructor() { }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath!
    });


  }
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

export class PhotoServic {
  public photos: UserPhoto[] = [];

  // other code
}
