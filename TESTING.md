# Testing

Return back to the [README.md](README.md) file.

## Code Validation

### HTML Validaton

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| index.html | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Femmygood.github.io%2Fmusic-quiz-madness%2Findex.html) | ![screenshot](documentation/homeval.png) | Section lacks header h2-h6 warning |
| end.html | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Femmygood.github.io%2Fmusic-quiz-madness%2Fend.html) | ![screenshot](documentation/homeval.png) | Section lacks header h2-h6 warning |

---

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Femmygood.github.io%2Fmusic-quiz-madness) | ![screenshot](documentation/cssval.png) | Pass: No Errors |

---

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![screenshot](documentation/jshint1.png) | Unused variables from external files |
| questions.js | ![screenshot](documentation/questhint.png) | Unused variables from external files |
| end.js | ![screenshot](documentation/endhint.png) | Pass: No Errors |

---

## Responsivness 

I have used the Wave Web Accessibility Evaluation Tool to make sure the site is accessible for all. All pages passed with no errors. Here are the results below.

- [Wave Link Home](https://wave.webaim.org/report#/https://emmygood.github.io/music-quiz-madness/index.html)

- [Wave Link End](https://wave.webaim.org/report#/https://emmygood.github.io/music-quiz-madness/end.html)

![screenshot](documentation/wave1.png)

## Compatability 

I have tested the site on different browsers (Chrome, Firefox, Safari) as well as different screen sizes (laptop, tablet and smartphone) to test the responsivness. As well as this, I tested the site with development tools, whilst in the building stages, to ensure the responsivness of the site across different devices.

I tested the site on different devices to set the compatability. I tested it on my smartphone (samsung, screenshots shown below) and was very pleased with how everything responded. As well as testing it on my laptop to see how it responded to a larger screen size.

| Device | Screenshot | Notes |
| --- | --- | --- |
| Mobile (DevTools) | ![screenshot](documentation/validation/samsung1.png) | Works as expected |
|                   | ![screenshot](documentation/validation/samsung2.png) |
|                   | ![screenshot](documentation/validation/samsung3.png) |

---

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues. For mobile, the response times were a fair bit slower, so I made the image files smaller, from jpg to jpeg. I then tested it at again and got a much better score.

| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | Mobile | ![screenshot](documentation/validation/lighthousemob.png) | Slower response time due to large images |
| Home | Desktop | ![screenshot](documentation/validation/lighthouse.png) | No warnings |
| End | Mobile | ![screenshot](documentation/validation/lighthousemob2.png) | Some minor warnings |
| End | Desktop | ![screenshot](documentation/validation/lighthouseend.png) | No major warnings |

---

## Bugs


- Js Uncaught Reference error: element is not defined
 
     ![screenshot](documentation/validation/bug.png)

     To fix this, I made sure that the element was defined in the clearQuizClass function as it's parameter, which was what was missing. This then meant that the setQuizClass function could work properly.


- Js Uncaught Type error: cannot read properties of undefined
    
     ![screenshot](documentation/validation/bugfix.png)

     To fix this, in order for the buttons to append into the correct place, I had to make sure the displayQuestion function was targetting the correct class from the html, which is buttons. This then appended the answer buttons into the button elements. As well as making the next button appear.


- Js Uncaught Syntax error: missing initialiser in const declaration

     ![screenshot](documentation/validation/bug5.png)

     To fix this, I checked the variable it was refering to, questionsShuffled. This needed to change to a let variable.

- Js Failed to load resource

     ![screenshot](documentation/validation/bug2.png)

     To fix this issue, I created a [favicon](https://www.favicon.cc/). This also helps to give the site better SEO.

