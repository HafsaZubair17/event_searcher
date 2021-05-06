# event_searcher

```
A web app to search artists and events
```

## Overview:

```
This project is a single page web application that can be used to search different artists and their upcoming events using BandsinTown API.
```

## Deployment

```
Netlify has been used for the deployment of this website as it is very easy to use, and it offers fast and continuous deployment. 
The website can be visited here:
```

```
https://event-searcher-by-hafsa-zubair.netlify.app/
```

## To set up the app, clone the app in your local github or just download the zip folder.

## To set up the app:

```
$ npm install
```

## To run:

```
$ npm start
```

## To test:

```
$ npm test
```

## Technology Stack:

```
React.js has been used for the development of this project because it comes packed with JSX that offers a great and easy development experience. You don’t have to learn any new attributes; you can simply use HTML tag as it uses JSX inside the javascript. UI created by react are highly responsive and loads smoothly. 
It is component based and offers many features like hooks, reusable components, props that makes the development and rendering very easy and enhances the code clarity. It also supports virtual DOM that results in useful level of abstraction and minimum update time to the real DOM eventually offering high performance and better user experience. 
You can easily manipulate the DOM, styling components and other components for better development. It implements one-way data binding that makes it so much easier to debug the files. It also supports many libraries like materialUI, react-bootstrap that helps in fast and efficient development. 
Keeping all these things in view, I chose reacts.js instead of simple HTML and other frameworks as it provides a great development experience.

For styling, SCSS has been used. SCSS supports CSS syntax and offers more work in less line of code. It helps in organizing the code better and allows you to use some cool features like using variables, nested selectors, mixins, loops, imports, classes etc. that allows easy styling, and results in more maintainable and less complex code. It basically makes CSS a lot more powerful simply by adding more benefits to it. I can design and style my own components using it as I like it. 
Furthermore, react-bootstrap has been used for components as it makes the development fast and smooth. React bootstrap encapsulates bootstrap specs into components and supports semantics that are react-like that makes it so easy to use and helps in writing a cleaner code. Hence, I have used SCSS and react-bootstrap for styling instead of simple CSS.

For testing, jest and react testing library have been used. The react testing library allows you to write maintainable component based tests very easily and allows you to test them just as the users will interact with them. 
The use of react testing library with jest makes the testing faster, automated and instant and immediate feedback is provided. That's why I used react testing library along with jest to test my components.
```

## Architecture:

```
The code has been divided into two main folders src and public. The public folder contains all the images and assets used in the web app. 
The src folder contains the main App.js file and has been further divided into Styles, **Tests** and the Components folder so that the application architecture and flow of code and logic is more understandable and less complex. 
The Styles folder contains all the styling files, separated into 5 files, one for each view component. 
The **Tests** folder contains all the unit tests for the application. It has total two test suites and 4 unit tests to test the Header and App components.

The Components folder has been further divided into two more folder: Models and Views. The Models folder contains two files that contain methods for API calls and cache implementation for the Artist and Events separately. 
The Views folder contains all the views i.e., components of the web application that will be rendered on the screen and will be visible to the user. It contains total 3 files to display Header, Carousel and Artist Components, and an Event folder. 
The event folder further contains two files: one is the reusable Card component and second one uses the reusable component to display events. All these components are rendered using App.js file. 

This division of application into small components has helped me to keep my methods, implementation and GUI separate and hence, making the application performance, readability and understanding better.
```

## Design Pattern:

```
React already comes pre-loaded with design patterns. For my application, I have used stateless component (Function-based component), Higher order component (Decorator pattern), Data-Down Actions-Up Design Pattern and Container component. 
All these have helped to quickly structure my application, made my application code more understandable and has allowed easy abstraction.

Furthermore, good coding practices have been adopted to build the application. I have made that sure no file has code exceeding 100 lines, Pascal Scale has been used for naming the files, all the style files have been places in one folder and inline CSS has been avoided, sufficient commenting has been used the code is self-explaining. Minimum code duplication and repetition rule has been applied.
```

## How it Works:

```
When you open the web page, there is a header and a carousel on the screen. The header has bandsintown logo linked to their official page, a twitter logo linked to their twitter account and a Searchbar for user input. 
The user can enter the name and search the artist. If the artist is not found a message is displayed on the screen. If the artist is found, the artist’s name, Facebook URL and image appears on the screen along with the button in the form of the card. 
You can request upcoming events for the artist by clicking on the button in the artist card. All the upcoming events of that artist are rendered on the screen. Each event card contains country, city, venue, and date of the event. If there are no upcoming events, a message is displayed. 
You can search as many artists and their events as you want. The app is fully responsive for each device.
The screenshot of the desktop version can be found here:
```

```
https://drive.google.com/drive/folders/14uHnMmUao4vEsZHOHVi24k-0xXeUBOiq?usp=sharing
```

```
The screenshot of the mobile Version can be found here:
```

```
https://drive.google.com/drive/folders/1iOHEYdeAvGL4h1teXOiTNJ0gvDktl37U?usp=sharing
```

## Testing and Performance:

```
Different tools have been used to test the app. The unit tests in the application test the header and app components using JEST and React Testing Library. More unit tests can be written in the same manner. All the unit tests were successful. The screenshot of log of execution can be found here:
```

```
https://drive.google.com/file/d/1pF50t5NfYGsYknsjTRICTaw2RdFKhs0g/view?usp=sharing
```

```
For GUI Testing, selenium has been used. There was total 4 test cases: when artist is found, when artist is not found, when events are found and when events are not found. The tests were completed successfully. The screenshots of the successful execution and SAVE file for the test cases can be found here:
```

```
https://drive.google.com/drive/folders/1dxVIbPEFtTthYbo3OrbX2kxxRZbKCRKi?usp=sharing
```

```
For Performance, Accessibility and Best Practices Testing, Google Chrome Lighthouse tool was used. The score was 99, 93 and 87 respectively for each category. The report can be found here:
```

```
https://drive.google.com/file/d/1c0PuDVvDVw7kEiJbS_oxcV5hTjBCmv3b/view?usp=sharing
```

```
For Cache testing, Application panel of chrome DevTools was used. For the API Testing, postman and Network panel of chrome DevTools was used.
```

## Cache Feature:

```
The cache has been implemented using Local Storage as it helps in fast rendering and good performance. Only the last searched artist and events are stored in the cache to make it computationally less expensive and faster. If the artist or events are not present in the Local Storage, only then the API call is made.
```
