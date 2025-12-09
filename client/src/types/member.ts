export interface UserProfile{
  id: string;
  birthDate: string;        // or Date if you parse it
  imageUrl?: string;
  displayName: string;
  created: string;
  lastActive: string;
  gender: string;
  description?: string;
  city: string;
  country: string;
}

export interface Photo {
  id: number;
  url: string;
  publicId?: string | null;
  memberId: string;
}
