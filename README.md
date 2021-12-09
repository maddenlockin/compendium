# React Compendium

## Learning Objectives

- Use the `useEffect` hook to fetch external data
- Use `.map` to iterate over an array and render new elements for each item in an array.
- Add a unique `key` to each element rendered from a `.map` in React.
- Make an api request using the `fetch` api
- Make an api request after a form submission in react
- Update state with `useEffect` based on dropdown change
- conditionally render components based on state

### Description

For this app, we'll be using the `useEffect` react hook to `fetch` data inside of our applications and show the data to the user. The `useEffect` hook is the second most used react hook. It handles **side effects** that our app performs. Data fetching is one of these side effects. We'll be learning the right way to use this hook to manage state in our applications that requires these side effects to happen. Some of the api requests we will do includes _querying_, _filtering_, and _sorting_ our data.

We'll be using the [Alchemy Pokemon API](https://pokedex-alchemy.herokuapp.com) in the example of these features

Alternatively you can also use the [SWAPI API](https://swapi.dev/).

Create a new React app using `npx create-react-app <app name>` and be sure to add in your `.eslint` and prettier [configs](https://github.com/alchemycodelab/config-build-deploy/tree/main/eslint).

### Acceptance Criteria

- Users should be able to see a list of at least 10 characters when the page loads
- Users should see 5 character details on each character
- Users should be able to filter data from the api ( Can use any type of filter you want from the api you choose to work with)
- Users should be able to sort the data retrieved from the api

### Rubric

| Tasks                                                              | Points |
| :----------------------------------------------------------------- | -----: |
| See a loading state while data is being fetched on page load       |      2 |
| See a list of characters when the page loads                       |      2 |
| Filter the data retrieved                                          |      2 |
| Conditionally render a loading state                               |      2 |
| Make an api request with `fetch` and `useEffect` when page loads   |      2 |
| Add a `key` to each item rendered from data fetched                |      2 |
| Update state with `useEffect` using empty dependency array         |      2 |
| Update state with `useEffect` conditionally using dependency array |      2 |
| Snapshot testing                                                   |      2 |
| Deployed on Netlify with passing CI                                |      2 |