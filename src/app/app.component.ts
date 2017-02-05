import { Component } from '@angular/core';

// deprecated Component declaration
// @Component({
//   selector: 'my-app',
//   template: `<h1>Hello {{name}}</h1>`,
// })

export class Hero {
	id: number; 
	name: string;
}


@Component({
  selector: 'my-app',
  template: `
  	<h1>{{title}}</h1>
  	<h2>{{hero.name}} details!</h2>
  	<u1 class="heroes">
  		<li *ngFor="let hero of heroes">
  			<!-- each hero goes here -->
		</li>
	</u1>
  	<div><label>ID: </label>{{hero.id}}</div>
  	<div>
  		<label>name: </label>
  		<input [(ngModel)] = "hero.name" placeholder="name">
	</div>
  `
  // template: `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>`
})

export class AppComponent  { 
	name = 'Angular'; 
	title =  'Tour of Heroes';
	heroes = HEROES;
	hero : Hero = {
		id: 1, 
		name: 'Windstorm' 
	}; 
}


const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];






























