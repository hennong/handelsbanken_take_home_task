# Handelsbanken take home task

## Set up

To start the application you need to:

Install the dependencies by running the command

```
npm i
```

And once that's done run:

```
npm run serve
```

After that you will see the adress to the application in the Terminal

## Approach

At first I though of what design for the page would make sense. Once I decided that I took a look at the Yr API to see in what way I should structure the data interfaces. Following that I though about which packages I should use. I ended up using TailwindCSS, Zustand, TanStack Query and Vite. I am quite comfortable with those and I knew I could get the job done with them.

Once I started coding I began with setting up the project and creating the base layout of the page to get a feeling of how my idea of the design is going to look in the browser. After that I started working on the Dashboard and some first basic components (default locations and base tile). After that I worked on the MyLocationTile because it was the last part to get a basic version of the Dashboard running. Once I was done with Dashboard I moved onto the Details page and added an extra API call to get the sunrise and sunset. I avoided an extra call to the forecast api by using Zustand to get the current weather data in the details page.

After that I started working on the stretch part of the task like switching between Fahrenheit and Celsius and allowing the user to input a custom location.

## Improvements

There are multiple things that I would like to improve but the main things would be:

1. Tests
   Due to the time constraint I was only able to set up tests to check if the correct children exist in the component. For example I wasn't able to test all of the possible error codes when trying to get users location.

2. Accessibility
   The site is able to be naviagted with just the keyboard but I sadly don't have experience with writing code with accessibility in focus. Which probably lead to some accessibility issues that I may have missed.

3. User experience on the Details page
   Since I wanted to avoid headaches with the URL, because of the short time, I didn't parse the location as parameters to it. Which leads to a blank page because the state management system gets reset when reloading the Details page.
   There are multiple ways to deal with this. For example: Storing the data in the local store and using that. Or when no location is set, redirecting to the Dashboard.
   Another issue with that page is the current weather. Yr doesn't have the current weather in the response which lead me to using the the weather icon string as the current weather. This could be improved with a function that maps the icon string to a weather desciprtion or something in that direction.
