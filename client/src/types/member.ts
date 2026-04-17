export interface Member {
  id: string;
<<<<<<< HEAD
  birthDate: string;        // or Date if you parse it
=======
  birthDay: string;
>>>>>>> basaar/parcial05
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
<<<<<<< HEAD
  publicId?: string | null;
=======
  publicId?: string;
>>>>>>> basaar/parcial05
  memberId: string;
}

export type EditableMember = {
  displayName: string;
  description?: string;
  city: string;
  country: string;
}
<<<<<<< HEAD
=======

export class MemberParams {
  gender?: string;
  minAge = 18;
  maxAge = 120;
  pageNumber = 1;
  pageSize = 10;
  orderBy = 'age';
}
>>>>>>> basaar/parcial05
