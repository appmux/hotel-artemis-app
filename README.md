

# Hotel Artemis

This is a quick draft of an application that manages hotel reservations for a user at a very simplistic manner.


# Architectural considerations

### Project structure

Source files under `src` folder are organized in a modular fashion with such building blocks as elements, components
and screens. Elements and components can be shared between screens as well as be part of other components.

__Elements__ - are the smallest blocks, i.e. form fields, buttons, etc.  
__Components__ - are more complicated structures that may contain one or more elements or other components.  
__Screens__ - are a high level structures that contain lower level blocks.  
__Theme__ - holds theme related files, i.e. colors, fonts, glyphs, etc.   
__Configuration__ - a place for configuration files.

### Assets

We're storing profile images locally just for demo purposes, usually they would be stored on a CDN server.

### Major third-party components

- `react-navigation` - as a main app navigation component.
- `apollo-client` - for remote and local state management.
- `moment` - to works with dates.

# Testing

Automated testing should cover unit tests for low level components, integration testing with different web services,
as well as end to end testing for all possible UX flows in the app. 

# To-do

- Refactor React Native components into functional rather than classes for optimization purposes.
- Centralize style classes under a theme and use variables where possible for easy adjustments across the entire
  application if necessary. Those can include: layout margins, colors, font sizes, etc.
- Add more flow directives for better static type checking.
- Enable code linting for code uniformity.
- Add tests.

# Local development

To run app locally, make sure to install all dependencies:
```
yarn install
```
Run the application on a simulator.
```
yarn run-ios
```
