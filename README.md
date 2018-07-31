# FSA-Alerts Alexa Skill

## Setup

Install serverless framework locally
```bash
npm install -g serverless
```

In order to deploy the endpoint simply run
```bash
serverless deploy
```

Next we need to setup an Alexa skill. Once you've signed up for the Amazon Developer Platform visit `https://developer.amazon.com/edw/home.html`. There you should see the following screen:

![Welcome](https://cloud.githubusercontent.com/assets/223045/21183285/8403b37c-c207-11e6-89c0-d36582010af8.png)

Next click on `Add a new Skill`:

![Add Skill](https://cloud.githubusercontent.com/assets/223045/21183286/84051262-c207-11e6-8422-945b6b45e83b.png)

At the bottom select json editor and paste the value of json-skill.json

add the arn value of the lambda to endpoints and hit test to try it out
