import { CanActivateFn, CanDeactivateFn } from '@angular/router';
import { MemberProfile } from '../../features/member-profile/member-profile';

export const preventUnsavedChangesGuard: CanDeactivateFn  <MemberProfile> = (component) => {
  if(component.memberProfileEditForm?.dirty) {
    return confirm("You have changes unsaved, do you weant to leave?");
  }

  return true;
};
