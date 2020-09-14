# BEERWULF ASSIGNMENT - BEER CHAMP

![beerwulf](./src/assets/logo.png)

## Frameworks and tools:
Tech stack:
- Vue
    - ES6 JS
    - Vuex
    - Vuetify
    - SCSS (node-sass)
- Jest
- GSAP

## Reasoning
As the primary JS framework, I chose to work with VueJS. The reason behind this
is the fact that because of the progressive nature of the framework, it is very easy
to integrate with other plugins for extended usage, such as state management, routing and much more.
Also, I do like the way the Vue templates work in such a way that you have the structure, the
behavior and also the styles, all in one file, which is pretty neat. 👌

Moreover, the `vue-cli` tool makes it very easy to also configure this setup and delivers
a very nice project skeleton without adding too much unnecessary code or modules. A nice addition
to all this is that you get `jest` configured out of the box which is why I have also made use
of that in order to create the component unit and snapshot tests.

## State management:
In order to have a better segregation of data between the components, I chose to implement
state management within the app, using the proprietary Vuex library, that is part of the VueJS
ecosystem. This gave me the power to make use of concepts like mutations and actions.

## Component library
Because I was more focused on the functionality and the overall structure of the app, I chose to
make use of vuetify component framework. That is the reason why within the codebase, you can expect
to see a mixture of vuetify components (such as cards, dropdowns) as well as custom components
that either abstract over or provide data bindings.

## Animations and transitions
To recreate a cool UX experience, I added GSAP to the project in order to create some trivial
animations that you can see upon app load. It's not much, but given more time, this can be
extended and improved.

## Styling
Wherever it was needed to create or modify existing styles, I made use of SCSS. The reason why I chose
this is that I consider this technology to be efficient in structuring style rules in a nested way, 
that aligns with the HTML structure.

## Project setup
#### Running the VueJS client app
* 1st - navigate to the project root folder (within the project directory)
* 2nd - open a new terminal tab and execute `npm install` in order to install all required dependencies
* 3rd - upon installment of the dependencies, run `npm run serve` in order to start the VueJS application (hot-reload supported)
* 4th - open a new browser tab and access `http://localhost:8080` 
* 5th - think about how tiny we are and how we sit on a tiny piece of rock in the endless universe

### Other useful scripts
#### Compiles and minifies for production -> `npm run build`
#### Lints and fixes files -> `npm run lint`
#### Run app unit tests -> `npm run test:unit`

### Deployable
Because one of the requirements of the assignments was that the app is also deployable,
I made use of the build script inside a `Dockerfile` file. Given the proper Docker setups,
this file should create a container, that includes a version of NodeJS where the app
can run standalone. 

### Improvements

If I had more time on my hands to play with this codebase, I'd invest it in the following areas:
- higher test coverage
    - some edge cases are not covered by the existing unit tests
- better animations 
    - there are some delays that can be covered better
    - performance improvements on assets load-up
- styles 
    - some components need to be further adjusted (ex: dynamic height of the cards)
    - the app layout is responsive due but it still has some pitfalls
        - logo scaling accordingly to viewports
        

