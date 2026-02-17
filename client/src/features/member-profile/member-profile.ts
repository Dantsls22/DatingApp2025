import { Component, HostListener, inject, OnDestroy, OnInit, signal, ViewChild, viewChild } from '@angular/core';
import { EditableMember, Member } from '../../types/member';
import { DatePipe } from '@angular/common';
import { MembersService } from '../../core/services/members-service';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastService } from '../../core/services/toast-service';
import { AccountService } from '../../core/services/account-service';

@Component({
  selector: 'app-member-profile',
  imports: [DatePipe, FormsModule],
  templateUrl: './member-profile.html',
  styleUrl: './member-profile.css'
})
export class MemberProfile implements OnInit, OnDestroy {

  @ViewChild("memberProfileEditForm") memberProfileEditForm?: NgForm;
  @HostListener("window:beforeunload", ["$event"]) notify($event: BeforeUnloadEvent) {
    if (this.memberProfileEditForm?.dirty) {
      $event.preventDefault();
    }
  };
  private accountService = inject(AccountService);
  private toast = inject(ToastService);
  protected member = signal<Member | undefined>(undefined);
  protected memberService = inject(MembersService);
  protected editableMember: EditableMember = {
    displayName: "",
    description: "",
    city: "",
    country: ""
  };

  ngOnInit(): void {
    this.editableMember = {
      displayName: this.memberService.member()?.displayName || "",
      description: this.memberService.member()?.description || "",
      city: this.memberService.member()?.city || "",
      country: this.memberService.member()?.country || "",
    };
  }

  ngOnDestroy(): void {
    if (this.memberService.editMode()) {
      this.memberService.editMode.set(false);
    }
  }

  updateProfile() {
    if (!this.memberService.member()) return;
    const updatedMember = { ...this.member(), ...this.editableMember };
    this.memberService.updateMember(this.editableMember).subscribe({
      next: () => {
        const currentUser = this.accountService.currentUser();
        if (currentUser && updatedMember.displayName !== currentUser?.displayName) {
          currentUser.displayName = updatedMember.displayName;
          this.accountService.setCurrentUser(currentUser);
        }
        this.memberService.editMode.set(false);
        this.memberService.member.set(updatedMember as Member);
        this.memberProfileEditForm?.reset(updatedMember);
        this.toast.success("Profile updated successfully");

      }
    });
  }
}

