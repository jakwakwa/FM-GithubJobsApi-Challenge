# Frontend Mentor - GitHub Jobs API

![Design preview for the GitHub Jobs API coding challenge](./preview.jpg)

## Getting Started

run local dev host: `npm run dev`

## Welcome! 👋

This project was created as a solution from the [Frontend Mentor](https://www.frontendmentor.io) GITHUB API challenge. 

## Noteworthy Frontend Technology Used

ReactJS
Material UI
Styled Components

## Live Solution of completed challenge:

[view here - hosted with Netlify](https://loving-panini-64028a.netlify.app/)

## The challenge Brief I received

Your challenge is to build out this jobs board using the [GitHub Jobs API](https://jobs.github.com/api) data and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- View all jobs currently live on the GitHub Jobs API
- Be able to click a job from the index page so that they can read more information and apply for the job
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

⚠️ **IMPORTANT** ⚠️: The GitHub Jobs API will throw a CORS error when you try to pull data from it in your project. To avoid this, you need to use [CORS Anywhere](https://cors-anywhere.herokuapp.com/). This allows you to prefix your request URL with `https://cors-anywhere.herokuapp.com/` and the request will come back as expected. So, if you wanted to request all positions, your request would look something like this:

```javascript
fetch(
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
)
  .then((res) => res.json())
  .then((data) => console.log(data));
```

## Community Sponsors

A massive thank you to our community sponsors!

- [Hack for NF](https://bit.ly/fem-bemyapp) is a perfect opportunity to write code, contribute to an amazing cause, meet others, and have fun all at the same time! The hackathon starts October 2nd and runs through to November 13th. Datasets, mentor support, and input from patients are all provided. There's also \$40K USD in prizes and grants up for grabs!
- [Diversify Tech](https://bit.ly/fem-diversify-tech) is an amazing resource for underrepresented people in tech. The site features job listings for anyone seeking new opportunities. The resource section is also full of useful links to dive into!
- [Zero to Mastery](https://bit.ly/fem-ztm) is an incredible learning resource for all things web development. Led by Andrei Neagoie, the courses are really high-quality content and cover a wide range of in-demand skills.
