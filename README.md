# Challenge 3: Secure Password Generator

Challenge 3 in my bootcamp course that leverages JavaScript to generate a secure password for the user with options to customize its content and length.


## Description ##
This JavaScript-powered application allows users to generate random passwords based on specific criteria. The responsive design ensures the app is usable across multiple devices, from mobile phones to desktop monitors.

## Features ## 
- Dynamic HTML and CSS rendering through JavaScript.
- Options to include lowercase, uppercase, numeric, and special characters.
- Prompt to select desired password length (between 8 to 128 characters).
- Validation to ensure at least one character type is chosen.
- Password generation based on selected criteria.
- Display generated password on the page.
- Option to copy the generated password.

## User Story ##
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security.

## Acceptance Criteria ##
GIVEN I need a new, secure password:
- WHEN I click the button to generate a password
    - THEN I am presented with a series of prompts for password criteria
- WHEN prompted for password criteria
    - THEN I select which criteria to include in the password
- WHEN prompted for the length of the password
    - THEN I choose a length of at least 8 characters and no more than 128 characters
- WHEN asked for character types to include in the password
    - THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
- WHEN I answer each prompt
    - THEN my input should be validated and at least one character type should be selected
- WHEN all prompts are answered
     - THEN a password is generated that matches the selected criteria
- WHEN the password is generated
    - THEN the password is either displayed in an alert or written to the page

## How to Use ##
Click the "Generate Password" button to start the process. Follow the prompts to customize your password.

## Webpage Screenshot ##
![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)
