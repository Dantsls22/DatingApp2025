<<<<<<< HEAD
import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MembersService } from '../../core/services/members-service';
import { Member, Photo } from '../../types/member';
import { AsyncPipe } from '@angular/common';
=======
import { Component, inject, OnInit, signal } from '@angular/core';
import { MembersService } from '../../core/services/members-service';
import { ActivatedRoute } from '@angular/router';
import { Member, Photo } from '../../types/member';
>>>>>>> basaar/parcial05
import { ImageUpload } from "../../shared/image-upload/image-upload";
import { AccountService } from '../../core/services/account-service';
import { User } from '../../types/user';
import { IconButton } from "../../shared/icon-button/icon-button";
import { DeleteButton } from "../../shared/delete-button/delete-button";

@Component({
  selector: 'app-member-photos',
  imports: [ImageUpload, IconButton, DeleteButton],
  templateUrl: './member-photos.html',
  styleUrl: './member-photos.css'
})
export class MemberPhotos implements OnInit {
  private route = inject(ActivatedRoute);
<<<<<<< HEAD

  protected accountService = inject(AccountService);
  protected photos = signal<Photo[]>([]);
  protected membersService = inject(MembersService);
=======
  protected accountService = inject(AccountService);
  protected membersService = inject(MembersService);
  protected photos = signal<Photo[]>([]);
>>>>>>> basaar/parcial05
  protected loading = signal(false);

  ngOnInit(): void {
    const memberId = this.route.parent?.snapshot.paramMap.get("id");
    if (memberId) {
      this.membersService.getPhotos(memberId).subscribe({
        next: photos => this.photos.set(photos)
      });
    }
  }

  get photoMocks() {
    return Array.from({ length: 10 }, (_, i) => ({
<<<<<<< HEAD
      url: "./user.png"
=======
      url: "./user.jpg"
>>>>>>> basaar/parcial05
    }));
  }

  onUploadImage(file: File) {
    this.loading.set(true);
<<<<<<< HEAD
    this.membersService.updatePhoto(file).subscribe({
=======
    this.membersService.uploadPhoto(file).subscribe({
>>>>>>> basaar/parcial05
      next: photo => {
        this.membersService.editMode.set(false);
        this.loading.set(false);
        this.photos.update(photos => [...photos, photo]);
<<<<<<< HEAD
      },
      error: error => {
        console.log('Error uploading photo:', error);
=======
        if (!this.membersService.member()?.imageUrl) {
          this.setMainLocalPhoto(photo);
        }
      },
      error: error => {
        console.log('Error while uploading the image: ', error);
>>>>>>> basaar/parcial05
        this.loading.set(false);
      }
    })
  }

  setMainPhoto(photo: Photo) {
    this.membersService.setMainPhoto(photo).subscribe({
      next: () => {
<<<<<<< HEAD
        const currentUser = this.accountService.currentUser();
        if(currentUser) currentUser.imageUrl = photo.url;
        this.accountService.setCurrentUser(currentUser as User);
        this.membersService.member.update(member => ({
          ...member,
          imageUrl: photo.url
        }) as Member);
=======
        this.setMainLocalPhoto(photo);
>>>>>>> basaar/parcial05
      }
    });
  }

  deletePhoto(photoId: number) {
    this.membersService.deletePhoto(photoId).subscribe({
      next: () => {
<<<<<<< HEAD
        this.photos.update(photos => photos.filter(p => p.id !== photoId));
      }
    });
  }
}

=======
        this.photos.update(photos => photos.filter(p => p.id !== photoId))
      }
    });
  }

  private setMainLocalPhoto(photo: Photo) {
    const currentUser = this.accountService.currentUser();
    if (currentUser) currentUser.imageUrl = photo.url;
    this.accountService.setCurrentUser(currentUser as User);
    this.membersService.member.update(member => ({
      ...member,
      imageUrl: photo.url
    }) as Member);
  }
}
>>>>>>> basaar/parcial05
