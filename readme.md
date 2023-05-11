# Collaborative Programming Lab

You will be working on solving the following code challenges using the pair programming style and techniques you learned about in class.

There are four problems to solve, each person should be the driver for two and then switch to be the navigator.

Your instructor may give additional specific details to submit this lab, since it is a group effort.

There are problems in this problem set that are inspired by Code War challenges:

- [Text Scroller](https://www.codewars.com/kata/586560a639c5ab3a260000f3/train/javascript)
- [Between Extremes](https://www.codewars.com/kata/56d19b2ac05aed1a20000430/train/javascript)

If you are unfamiliar with morse code:

- Here is a [translator](https://morsecode.world/international/translator.html)

There is already a morse code dictionary included in this lab for you to use. You do not need to create it.

## Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

## Instructions

Complete each function inside of the `index.js` file. The comments and tests will help you determine what each function requires.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your repository.

```
npm test
```

This will run the test output once.

#### Test watcher

If you'd like, you can have the tests run constantly. This means that each time you save your file, your tests will re-run. To do so, you can run the following:

```
npm run watch
```

Follow the on-screen prompts to exit out of the constant runner.

### Run tests individually

You can also specific which test you want to run, specifically. Add `.only` after either `test` or `describe` for the specific test you'd like to run.

```js
test.only("should return an array of everyone's name who is in the line, in order", () => {
```

This will either run the specific `test` or, in the case of adding `.only` to a `describe`, all of the tests for a specific function.

> **NOTE:** Don't forget to remove this after you get the test to pass!

### Run file

If you want to manually test out your file, you can do so by running the following command.

```
node index.js
```

The output will be printed to your terminal.
