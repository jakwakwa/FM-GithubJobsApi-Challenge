# Frontend Mentor - GitHub Jobs API

![Design preview for the GitHub Jobs API coding challenge](./preview.jpg)

## Getting Started

run local dev host: `npm run dev`

## Welcome! 👋

This project is created as a solution from the [Frontend Mentor](https://www.frontendmentor.io) GITHUB API challenge.

**To do this challenge, you need a solid understanding of HTML, CSS, and JavaScript.**

## The challenge

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

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

## Where to find everything

All the required assets for this project are in the `/assets` folder. The assets are already exported for the correct screen size and optimized. Some images can be re-used at multiple screen sizes. So if you don't see an image in a specific folder, it will typically be in another folder for that page.

The design system in the Sketch file will give you more information about the various colors, fonts, and styles used in this project.

## Deploying your project

As mentioned above, there are a number of ways to host your project for free. We recommend using [Vercel](https://bit.ly/fem-vercel) as it's an amazing service and extremely simple to get set up with. If you'd like to use Vercel, here are some steps to follow to get started:

1. [Sign up to Vercel](https://bit.ly/fem-vercel-signup) and go through the onboarding flow, ensuring your GitHub account is connected by using their [Vercel for GitHub](https://vercel.com/docs/v2/git-integrations/vercel-for-github) integration.
2. Connect your project to Vercel from the ["Import project" page](https://vercel.com/import), using the "From Git Repository" button and selecting the project you want to deploy.
3. Once connected, every time you `git push`, Vercel will create a new [deployment](https://vercel.com/docs/v2/platform/deployments) and the deployment URL will be shown on your [Dashboard](https://vercel.com/dashboard). You will also receive an email for each deployment with the URL.

## Community Sponsors

A massive thank you to our community sponsors!

- [Hack for NF](https://bit.ly/fem-bemyapp) is a perfect opportunity to write code, contribute to an amazing cause, meet others, and have fun all at the same time! The hackathon starts October 2nd and runs through to November 13th. Datasets, mentor support, and input from patients are all provided. There's also \$40K USD in prizes and grants up for grabs!
- [Diversify Tech](https://bit.ly/fem-diversify-tech) is an amazing resource for underrepresented people in tech. The site features job listings for anyone seeking new opportunities. The resource section is also full of useful links to dive into!
- [Zero to Mastery](https://bit.ly/fem-ztm) is an incredible learning resource for all things web development. Led by Andrei Neagoie, the courses are really high-quality content and cover a wide range of in-demand skills.
