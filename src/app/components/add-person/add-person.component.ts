import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  person = {
    fullname: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: ''
  };

  constructor(private personService: PersonService, private router: Router) {}

  addPerson(): void {
    this.personService.addPerson(this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
