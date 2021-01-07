# Pico-Placa-Predictor

## Intro

This is a quick program to predict Pico & Placa behaviour.
For this example pico y placa runs like the one before the pandemic outbreak at Quito - Ecuador:

- Monday - plates 1,2 can't drive
- Tuesday - plates 3,4 can't drive
- Wednesday - 5,6 can't drive
- Thursday - 7,8 can't drive
- Friday - 9,10 can't drive
- Saturday & Sunday - all plates can drive

The restriction each weekday runs from 5am to 20pm

### Inputs:

* `plate` (string) - Example: 'PCF-1728'
* `date` (string) - Example: 'January 6,2021'
* `time` (int) - Example: 10

### Output:

* string (it say whether a car can drive or not based on the input)

## Techs Used:

In this example I use the following technologies:

- Language: javascript vanilla
- Package manager: npm (npm init, npm install --save-dev jest, npm install --save-dev babel-jest @babel/core @babel/preset-env)
- Testing framework: jest
- Version Control System: Git (Github)
- License: MIT
- Editor: VS Code (Extensions: Code Runner, Prettier)

## Usage

As the main program runs inside index.js you can easily modify the call of the method of the class at the bottom of the document and run it from the browser using index.html.
For the automated quick tests you can run `npm test` from the terminal.

Hope you like it :)