import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { CanActivateFn } from '@angular/router';
=======
import { CanDeactivateFn } from '@angular/router';
>>>>>>> basaar/parcial05

import { preventUnsavedChangesGuard } from './prevent-unsaved-changes-guard';

describe('preventUnsavedChangesGuard', () => {
<<<<<<< HEAD
  const executeGuard: CanActivateFn = (...guardParameters) => 
=======
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
>>>>>>> basaar/parcial05
      TestBed.runInInjectionContext(() => preventUnsavedChangesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
