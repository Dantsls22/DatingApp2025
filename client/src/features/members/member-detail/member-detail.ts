<<<<<<< HEAD
import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { MembersService } from '../../../core/services/members-service';
=======
import { Component, computed, inject, OnInit, signal } from '@angular/core';
>>>>>>> basaar/parcial05
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { AgePipe } from '../../../core/pipes/age-pipe';
import { AccountService } from '../../../core/services/account-service';
<<<<<<< HEAD
import { ImageUpload } from '../../../shared/image-upload/image-upload';
=======
import { MembersService } from '../../../core/services/members-service';
>>>>>>> basaar/parcial05

@Component({
  selector: 'app-member-detail',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, AgePipe],
  templateUrl: './member-detail.html',
  styleUrl: './member-detail.css'
})
export class MemberDetail implements OnInit {
<<<<<<< HEAD

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private accountService = inject(AccountService);
  protected memberService = inject(MembersService);
  protected title = signal<(string | undefined)>("Profile");

  protected isCurrentUser = computed(()=>{
    return this.accountService.currentUser()?.id === this.route.snapshot.paramMap.get("id");

  })


=======
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private accountService = inject(AccountService);
  protected membersService = inject(MembersService);
  protected title = signal<string | undefined>("Profile");
  protected isCurrentUser = computed(() => {
    return this.accountService.currentUser()?.id === this.route.snapshot.paramMap.get('id');
  })

>>>>>>> basaar/parcial05
  ngOnInit(): void {
    this.title.set(this.route.firstChild?.snapshot?.title);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe({
      next: () => {
        this.title.set(this.route.firstChild?.snapshot?.title);
      }
    });
  }
}
