# 🎮 Controller for BiteMe

## Runs on
node v18

## Start
```bash
npm start
```

## Basic design

## Tech stack
- React, Typescript

## Architecture

## Challenges
### Magic with env variables
Create React App has its own templating - in webpack.config.js (react-scripts/config), see `HtmlWebpackPlugin` which will fill in PUBLIC_URL should you have one. 
The problem is, that if custom variables wanted to be introduced, it will complain that these variables are not defined.

How to solve?
1. npm run eject
- and then manually add these variables into the template to result into the format that your own template will understand
``` 
templateParameters: {
   'nameOfParam': '<YOUR TEMPLATE SYNTAX>'
} 
```

2. hack around with env variables 
- the hierarchy is that the templating engine will look for env variables in `.env` file to populate the html. For local development then use `.env.local`
- careful, env variables need to have `REACT_APP` prefix!

## Resources



