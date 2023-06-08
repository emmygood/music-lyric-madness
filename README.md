# Music Quiz Madness

![screenshot](documentation/mockup2.png)
[Live site](https://emmygood.github.io/music-lyric-madness/)

## Introduction

Music Quiz Madness is an interactive general knowledge music quiz game. The aim of this game is for the user to select the correct answer to the question from the multiple choice selection. The questions are a mixture of difficulties, with songs ranging from all eras of music. The user is shown a question from music trivia, and must guess the correct answer to the question. Each question will have four multiple choice answers for the user to choose from. The user is shown their score as they move along through the ten questions, and will recieve feedback of their final score at the end.

---

## UX

### Color Scheme

- The background is full of music notes as this is what the game is based on. I didn't want the background to be too busy, so I stuck with black and white colors for this. 
- The game itself is inside a box overlapping the background, as this made the content easier to see. 
- To juxtapose against the simple background colors, I went with paler versions; of blue and pink, so it was not too overpowering. Then I kept the text simple, being black, as this is easy to read against the blue and pink.
- When the answer is chosen, I wanted the user to easily see which one is correct and which are incorrect. Therefore I chose a red and and a green, to change the font and border color. I used [coolors.co](https://coolors.co/ff8080-cc0000-66a3ff-004d00) to generate my color palette.

  - `#66a3ff` used for the content box
  - `#ff8080` used for the buttons, and footer
  - `hsl(120, 100%, 15%)` used for the button font and border, when answer is correct
  - `hsl(0, 100%, 40%)` used for the button font and border, when answer is incorrect
  - `#000000` used for all font and icons
  - `#ffffff` used for button:hover 


![screenshot](documentation/colors.png)

### Typography 

[Google Fonts](https://fonts.google.com/) was imported to select all the fonts. With sans-serif as a fallback for Didact Gothic. I just had the one font to keep consistency throughout the site. This font is clear and easy to read, making sure accessibility was a priority. 

- [Didact Gothic](https://fonts.google.com/specimen/Didact+Gothic?query=Didact+Gothic) used for all font across the site

- [Font Awesome](https://fontawesome.com/) icons used throughout the site including, the music note logo icon, and the refresh button, and the social media icons in the footer.

---

## User Stories


### Audience 
- People looking for a quick and fun game to play.
- People looking to be able to play the game with others.
- People of all ages engaging in answering the questions, which are of all difficulties.
- People that have a love of music, to be able to put their knowledge to the test.

### New Site Users
- As a new site user, I would like to gain a quick understanding of the theme of the game, so I can decide if I know enough to play.
- As a new site user, I would like to know what the game invloves, so that I can decide if I have enough time.
- As a new site user, I would like to play the game of multiple devices.
- As a new site user, I would like to follow simple, easy to follow rules of the game, so I can navigate throught the questions quickly.
- As a new site user, I would like to have fun, playing a general knowledge quiz.

### Returning Users
- As a returning user, I want to be able to see what my score is, so that I can beat it from last time.
- As a returning user, I want some kind of feedback at the end, so I know how well or bad I have done.
- As a returning user, I want to be able to start the game quickly, as I have already played before.

### Site Admin 
- As a site administrator, I want people to have clear, simple instructions on how to play.
- As a site administrator, I should be able to appeal to a wide demographic, with a range of questions.
- As a site administrator, I want the user to be able to view their scores and get feedback.

---

## Features
### Common Features

#### Background and Favicon

- As Music Quiz Madness is a quiz game based on music, I wanted the background to reflect this. 
- In order for the background to not distract from the game itself, the colors are simple black and white.
- The aim of this is so that when the user opens up the site they will have a general idea of what the theme of this quiz is. This background is consistent across all devices.
- The favicon will help users to know that this is the correct site they're looking for, improving site SEO.

![screenshot](documentation/favicon.png)

![screenshot](documentation/backg.png)

#### Logo and heading

- The name of the game along with the heading remain the same when playing the game, and also do not change when played on different screen sizes. This is purposley not too big, as I wanted the questions to be the forefront of the game.
- The heading gives the user more information about what the quiz is about.
- The font Awesome music note icon, is consistant when playing the game. It is a quick indicator for the user as to what the game is about.
- When the game has started, and the user moves onto the first question, the refresh icon will appear, next to the music note. This is included to give the user the chance to return to the home page if they decide they want to start again, or re-read the instructions. 

![screenshot](documentation/heading.png)

![screenshot](documentation/refresh.png)

#### Footer

- The footer is separate from the game area, so it is not in the way or distracting to the user when playing.
- The footer contains the copyright and social media links which are displayed as font awesome icons.
- It is the same width as the game area box to keep the theme consistant but to separate it from the game it is in the color #ff8080. 
- It is consistent across all devices, giving the user easier access to find them.

![screenshot](documentation/footer.png)

#### How To Play Area

- The how to play area, is situated under the heading and icons of the home page. Consisting of easy to follow and quick to read steps on how to play the game.
- This area is useful for the user so they know what to expect and always have a point to refer back to if needed.
- This area is hidden once the game is started.
- When the game is started, the refresh icon will appear, once clicked it takes you back to this page, where the instructions are displayed. 

![screenshot](documentation/howto.png)

#### Start Button

- The start button is displayed underneath the how to play instructions. So once the user has read the steps they can get straight on and begin the game. This is the case across all devices.
- In order for the button to stand out against the blue, it is in the color #ff8080. When the user hovers over the button, the border will turn white #ffffff to let the user know they should click on that button.
- When the game has started this button is hidden.

![screenshot](documentation/start.png)
![screenshot](documentation/start2.png)

#### Question and Answers

- When the user clicks the start button the first question appears in place of the instructions.
- The questions are numbered to give the user insight into what number they are on.
- The questions will never appear in the same order, they are shuffled every game. I used [Open Trivia Database](https://opentdb.com/api_config.php) to generate a list of random questions.
- There are four multiple choice answers, for the user to choose from.
- When hovered over, each button outline will turn white #ffffff to indicate it is clickable.
- Once the answer is chosen, the correct answer will turn green hsl(120, 100%, 15%), leaving the incorrect answers to tun red hsl(0, 100%, 40%). This is giving immediate feedback to the user which should make them continue to play because it means they do not have to wait until the end to recieve the correct answer.
- This section is responsive to any device.

![screenshot](documentation/questions.png)
![screenshot](documentation/chosen.png)

#### Score Area and Next Button

- This is visible as soon as the game has started.
- When the player selects their answer, the score area will update by one, to either the correct answer or the incorrect answer. This feedback givien to the user will make them want to improve upon their score and keep  playing.
- The next button is only visible when an answer is selected, this is so the user cannot skip a question and to give control to the user.

![screenshot](documentation/score.png)

#### End Game

- After the ten questions are completed, the quiz will end and the user is shown their score.
- Along with the score, there will be an image and message that matches the score they got.
- There are three different pictures the user could get depending on their final score:
  - If they recieved 4 points or less
  - Between 5 and 7
  - More than 7. This feedback will give the user intentive to re-take the quiz or compare with others.
- The option to play the game again, is shown here. Using the same refresh icon as before, to keep consistency. This button takes the user back to the home page, and back to the start button giving them another go.

![screenshot](documentation/endgame.png) ![screenshot](documentation/endgame2.png)
![screenshot](documentation/endgame3.png) 

![screenshot](documentation/playagain.png)

### Future Features

- A timer feature
  - So the user plays against a clock, which will add extra pressure.
- More questions
  - Again, adding pressure to get more than ten right.
- Different eras of music
  - The ability for the user to choose what specific era of music they want to be quizzed on. Which means the quiz will attract a wider demographic.

---

## Tools and Technologies Used

- [HTML](https://en.wikipedia.org/wiki/HTML) Used for the main site content.
- [CSS](https://en.wikipedia.org/wiki/CSS) Used for the site design as well as layout.
- [CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp) and [CSS Grid](https://www.w3schools.com/css/css_grid.asp) Used to enhance the responsive layout.
- [JavaScript](https://www.javascript.com) Used for the interaction on the site.
- [Git](https://git-scm.com) Used for version control. (git add, git commit, git push)
- [GitHub](https://github.com) used for secure online code storage.
- [GitHub Pages](https://pages.github.com) used for hosting the deployed front-end site.
- [Markdown Builder](https://traveltimn.github.io/markdown-builder/) by Tim Nelson used to help generate the Markdown files.
- [Python Tutor](https://pythontutor.com/visualize.html#mode=edit) To visualise the execution of the javascript code.
- [W3Schools](https://www.w3schools.com/colors/colors_converter.asp) Color converter for CSS across entire site.

---

## Testing

For all testing, please refer to the [TESTING.md](TESTING.md) file.

## Deployment

The site was deployed to GitHub Pages. The steps to deploy are as follows:
- In the [GitHub repository](https://github.com/emmygood/music-quiz-madness), navigate to the Settings tab 
- From the source section drop-down menu, select the **Main** Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://emmygood.github.io/music-quiz-madness)

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/emmygood/music-quiz-madness) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/emmygood/music-quiz-madness.git`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/emmygood/music-quiz-madness)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/emmygood/music-quiz-madness)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!

## Credits

- All text was created by myself apart from the questions and answers which were geerated in [Open Trivia Database](https://opentdb.com/api_config.php)
- [Markdown Builder](https://traveltimn.github.io/markdown-builder/) by Tim Nelson README and TESTING tool to help generate the Markdown file.
- Reference from [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified) in how to build a basic javascript quiz.
- [W3Schools](https://www.w3schools.com/) entire site, responsive HTML/CSS/JS navbar.
- Reference material was used from W3Schools for flexbox, [color converting](https://www.w3schools.com/colors/colors_converter.asp), and general reference aid.
- [Flexbox Froggy](https://flexboxfroggy.com/) entire site, modern responsive layouts.
- [YouTube](https://www.youtube.com/) entire site, flexbox tutorial.

### Content

| Source | Location | Notes |
| --- | --- | --- |
| [Markdown Builder](https://traveltimn.github.io/markdown-builder) | README and TESTING | tool to help generate the Markdown files |
| [Chris Beams](https://chris.beams.io/posts/git-commit) | version control | "How to Write a Git Commit Message" |
| [W3Schools](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp) | entire site | responsive HTML/CSS/JS navbar |
| [W3Schools](https://www.w3schools.com/css/css3_variables.asp) | entire site | how to use CSS :root variables |
| [W3Schools](https://www.w3schools.com/colors/colors_converter.asp) | entire site | color converter |
| [Flexbox Froggy](https://flexboxfroggy.com/) | entire site | modern responsive layouts |
| [Grid Garden](https://cssgridgarden.com) | entire site | modern responsive layouts |
| [StackOverflow](https://stackoverflow.com/a/2450976) | quiz page | Fisher-Yates/Knuth shuffle in JS |
| [YouTube](https://www.youtube.com/watch?v=YL1F4dCUlLc) | leaderboard | using `localStorage()` in JS for high scores |
| [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified) | javascript | how to build a javascript quiz
| [Favicon](https://www.favicon.cc/) | html favicon | tool for creating favicon |
| [Convertio](https://convertio.co/) | entire site | tool for image compression |
| [Open Trivia Database](https://opentdb.com/api_config.php) | javascript | generating random questions |
| [Pixabay](https://pixabay.com/) | entire site | free image download |
| [Coolors](https://coolors.co/292924-3e3e37-ffdd00-ffeb66) | entire site CSS | color palette generator |
| [Font Awesome](https://fontawesome.com/kits/8c55020ac5/setup) | entire site | free icon library |
| [Google Fonts](https://fonts.google.com/) | entire site | font across the site |
| [Python Tutor](https://pythontutor.com/visualize.html#mode=edit) | javascript | to visualise the execution of the javascript code.

### Media

| Source | Location | Type | Notes |
| --- | --- | --- | --- |
| [Pexels](https://www.pexels.com) | entire site | image | background image |
| [Pixabay](https://pixabay.com) | gallery page | image | images on end html and javascript |
| [Favicon](https://www.favicon.cc/) | html favicon | favicon | favicon on all pages |
| [Open Trivia Database](https://opentdb.com/api_config.php) | javascript | javascript questions | generated random questions for javascript file |
| [Font Awesome](https://fontawesome.com/kits/8c55020ac5/setup) | entire site | icons | all icons across site |
| [Google Fonts](https://fonts.google.com/) | entire site | font | font across the site |

### Acknowledgements

- I would like to thank my Code Institute mentor, [Tim Nelson](https://github.com/TravelTimN) for their support throughout the development of this project.
- I would like to thank the [Code Institute](https://codeinstitute.net) tutor team for their assistance with troubleshooting and debugging some project issues.
- I would like to thank the [Code Institute Slack community](https://code-institute-room.slack.com) for the moral support; it kept me going during periods of self doubt and imposter syndrome.

