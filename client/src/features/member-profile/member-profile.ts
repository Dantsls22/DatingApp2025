<<<<<<< HEAD
import { Component, HostListener, inject, OnDestroy, OnInit, signal, ViewChild, viewChild } from '@angular/core';
=======
import { Component, HostListener, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
>>>>>>> basaar/parcial05
import { EditableMember, Member } from '../../types/member';
import { DatePipe } from '@angular/common';
import { MembersService } from '../../core/services/members-service';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastService } from '../../core/services/toast-service';
import { AccountService } from '../../core/services/account-service';
<<<<<<< HEAD

@Component({
  selector: 'app-member-profile',
  imports: [DatePipe, FormsModule],
=======
import { TimeAgoPipe } from '../../core/pipes/time-ago-pipe';

@Component({
  selector: 'app-member-profile',
  imports: [DatePipe, FormsModule, TimeAgoPipe],
>>>>>>> basaar/parcial05
  templateUrl: './member-profile.html',
  styleUrl: './member-profile.css'
})
export class MemberProfile implements OnInit, OnDestroy {
<<<<<<< HEAD

  @ViewChild("memberProfileEditForm") memberProfileEditForm?: NgForm;
  @HostListener("window:beforeunload", ["$event"]) notify($event: BeforeUnloadEvent) {
=======
  @ViewChild('memberProfileEditForm') memberProfileEditForm?: NgForm;
  @HostListener('window:beforeunload', ['$event']) notify ($event:BeforeUnloadEvent) {
>>>>>>> basaar/parcial05
    if (this.memberProfileEditForm?.dirty) {
      $event.preventDefault();
    }
  };
  private accountService = inject(AccountService);
  private toast = inject(ToastService);
<<<<<<< HEAD
  protected member = signal<Member | undefined>(undefined);
  protected memberService = inject(MembersService);
  protected editableMember: EditableMember = {
    displayName: "",
    description: "",
    city: "",
    country: ""
=======
  protected membersService = inject(MembersService);
  protected editableMember: EditableMember = {
    displayName: '',
    description: '',
    city: '',
    country: ''
>>>>>>> basaar/parcial05
  };

  ngOnInit(): void {
    this.editableMember = {
<<<<<<< HEAD
      displayName: this.memberService.member()?.displayName || "",
      description: this.memberService.member()?.description || "",
      city: this.memberService.member()?.city || "",
      country: this.memberService.member()?.country || "",
=======
      displayName: this.membersService.member()?.displayName || '',
      description: this.membersService.member()?.description || '',
      city: this.membersService.member()?.city || '',
      country: this.membersService.member()?.country || ''
>>>>>>> basaar/parcial05
    };
  }

  ngOnDestroy(): void {
<<<<<<< HEAD
    if (this.memberService.editMode()) {
      this.memberService.editMode.set(false);
=======
    if (this.membersService.editMode()) {
      this.membersService.editMode.set(false);
>>>>>>> basaar/parcial05
    }
  }

  updateProfile() {
<<<<<<< HEAD
    if (!this.memberService.member()) return;
    const updatedMember = { ...this.member(), ...this.editableMember };
    this.memberService.updateMember(this.editableMember).subscribe({
=======
    if (!this.membersService.member()) return;
    const updatedMember = {...this.membersService.member(), ...this.editableMember};
    this.membersService.updateMember(this.editableMember).subscribe({
>>>>>>> basaar/parcial05
      next: () => {
        const currentUser = this.accountService.currentUser();
        if (currentUser && updatedMember.displayName !== currentUser?.displayName) {
          currentUser.displayName = updatedMember.displayName;
          this.accountService.setCurrentUser(currentUser);
        }
<<<<<<< HEAD
        this.memberService.editMode.set(false);
        this.memberService.member.set(updatedMember as Member);
        this.memberProfileEditForm?.reset(updatedMember);
        this.toast.success("Profile updated successfully");

=======
        this.membersService.editMode.set(false);
        this.membersService.member.set(updatedMember as Member);
        this.memberProfileEditForm?.reset(updatedMember);
        this.toast.success('Profile updated successfully');
>>>>>>> basaar/parcial05
      }
    });
  }
}
<<<<<<< HEAD

=======
>>>>>>> basaar/parcial05
