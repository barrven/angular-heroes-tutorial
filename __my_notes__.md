### Create the project (accept all default options by pressing enter)
$ ng new angular-tour-of-heroes

### Run the project
$ ng serve --open

### Generate a component named 'heroes'
$ ng generate component heroes

### Other notes
You used *ngFor to display a list.
You used *ngIf to conditionally include or exclude a block of HTML.
You can toggle a CSS style class with a class binding, e.g. : [class.selected]="hero === selectedHero"

You used a property binding to give the parent HeroesComponent control over the child HeroDetailComponent, 
    e.g.: <app-hero-detail [hero]="selectedHero"></app-hero-detail>
You used the @Input decorator to make the hero property available for binding by the external HeroesComponent.
e.g.: @Input() hero?: Hero;

### Generate a service for 'hero' interface
$ ng generate service hero

###  About dependency injection
Make the HeroService available to the dependency injection system by registering a provider. A provider is something that can create or deliver a service; in this case, it instantiates the HeroService class to provide the service.

By default, the Angular CLI command ng generate service registers a provider with the root injector for your service by including provider metadata, that is providedIn: 'root' in the @Injectable() decorator. When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it.

### Generate a service for message component
$ ng generate service message

### Other notes 2
You refactored data access to the HeroService class.
You registered the HeroService as the provider of its service at the root level so that it can be injected anywhere in the app.
You used Angular Dependency Injection to inject it into a component.
You gave the HeroService get data method an asynchronous signature.
You discovered Observable and the RxJS Observable library.
You used RxJS of() to return an observable of mock heroes (Observable<Hero[]>).
The component's ngOnInit lifecycle hook calls the HeroService method, not the constructor.
You created a MessageService for loosely-coupled communication between classes.
The HeroService injected into a component is created with another injected service, MessageService.

### Adding app routing module
$ ng generate module app-routing --flat --module=app

--flat puts the file in src/app instead of its own folder.
--module=app tells the CLI to register it in the imports array of the AppModule.

### Aungular in-memory web api for simulating interacting with a web API
$ npm install angular-in-memory-web-api --save