<<<<<<< HEAD
import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { MembersService } from '../../core/services/members-service';
=======
import { ResolveFn, Router } from '@angular/router';
import { MembersService } from '../../core/services/members-service';
import { inject } from '@angular/core';
>>>>>>> basaar/parcial05
import { Member } from '../../types/member';
import { EMPTY } from 'rxjs';

export const memberResolver: ResolveFn<Member> = (route, state) => {
<<<<<<< HEAD
  const memberService = inject(MembersService);
=======
  const membersService = inject(MembersService);
>>>>>>> basaar/parcial05
  const router = inject(Router);
  const memberId = route.paramMap.get("id");

  if (memberId) {
<<<<<<< HEAD
    return memberService.getMember(memberId!);
=======
    return membersService.getMember(memberId);
>>>>>>> basaar/parcial05
  }

  router.navigateByUrl("/not-found");
  return EMPTY;
};
