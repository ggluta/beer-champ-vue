# The Beer Champ application assignment

- Create a form which behaves as follows
  - It will display the following drop down menus
    - A list of beer styles, loaded when data available
    - A list of beer names, loaded when data available
    - A list of beer colors, available on page load
  - All three lists are enabled when data is available.
  - When selecting an option in on of the list, the other lists are filtered accordingly.
  - At the bottom of the form all selections will be shown.
- You are free to use any tool and/or framework you like, as long as it runs inside a browser and you can explain why that solution will be the most favorable.
- Your implementation should be
  - tested
  - visually attractive
  - deployable

### For example.

1. When yellow is selected all styles and names that have no yellow beers are filtered out
2. When selecting "Brand Dubbelbock", only the beer style and the available colors are selectable

## Data library

The data are provided by a small service you can find in the `service` folder.

This service can be accessed by a the global variable `beerChamp` and provide a single method `fetchData`.

```
beerChamp.fetchData(callBack);
```

The callback is called with the full data list as first parameter.

```
beerChamp.fetchData(function(err, data) {
  console.log(data);
});
```

The data library can be used as a node module.

```
var beerChamp = require('beer-champ');
beerChamp.fetchData(function(err, data) {
  console.log(data);
});
```

## Coding Assignment Evaluation Guidelines

To give you an idea what we expect from the implementation of the assignment we came up with
the following guidelines. In general, treat it as code that will go in production for the Beerwulf website.

### Assignment

- Does the code work.
- Does the code still work when encountering edge cases.
- Does the code come with instructions.
- Do all included artifacts have purpose.

### Code quality

- Is the code structured in a logical way.
- Could the code be extended.
- Do functions, classes and modules use the right level of abstraction.
- Does the code show software engineering best practices and design patterns where applicable.
- Is the code consistent.
- Does the code contain descriptive names.
- Is the code production ready.
- Does the code base scale to a bigger feature set.

### Frameworks + Language

- What framework was chosen.
- Are the features of the framework used according to community best practices.
- Does the code use features of the framework or language when possible.
- Are common pitfalls avoided.

### Testing

- Are there automated test.
- How are the tests written.
- What choices are made in testing certain parts of the code.
- Are the tests written with the right level of abstraction.
- What test cases are chosen.
- Does the test code make use of the features of the test framework when applicable.

### Design + CSS

- How much effort is taken into making the app look nice.
- Is user experience taken into consideration.
- How was the UI implemented.
- How does the UI scale on different devices.
