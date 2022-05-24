import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { take } from 'rxjs';
import { User } from '../_models/User';
import { AccountService } from '../_services/account.service';

// we have default directives are like *ngIf and *ngFor
@Directive({          
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit{
  @Input() appHasRole: string[];
  user: User;

  constructor(private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private accountService: AccountService) {
      this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
        this.user = user;
      })
     }

  ngOnInit(): void { 
    // clear view if no roles
    if (!this.user?.roles || this.user === null){
      this.viewContainerRef.clear();
      return;
    }

    if (this.user?.roles.some(role => this.appHasRole.includes(role))){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
