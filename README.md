# React Native Campus

## Overview

As part of the mini campus on native technologies we're going to create a rather simple and straightforward eCommerce app.

The main idea is to practice and improve our native application knowledge but we will potentially also involve some actual SFCC calls through OCAPI to acknowledge the skills earned during the development process.

The roadmap with the main concepts we'll go through as part of this initiative can be found here - [React Native Roadmap](https://wiki.isobarsystems.com/pages/viewpage.action?spaceKey=DEVTEAM&title=React+Native+Roadmap).

This repository has been setup with the idea of serving as a common place where people can add their React Native code so that it's used not only for practice but also for others' visibility, progress tracking and knowledge sharing.

It can also be used at a later point for reference or for further development if desired.

## Suggested Code Guidelines

* Use functional components and hooks
* Write components in TypeScript
* Use internal state management where possible
* Use arrow functions and other ES6+ standards where possible
* Extract logic in separate components where applicable
* Keep styles and components in separarate files but in the same folder
* Avoid writing inline styles
* Keep screens separate from components

## Process

In order to be able to have some more diverse and personalized projects, the suggested approach is to create your own folder when you clone the repository where your own native code / app would go. This would alleviate the process when it comes to checking if something does not work as expected or when you want to use others' work as a help tool.

In addition it would be a good idea to have your own branch created where you work on your folder and add your code. PRs for each of the tasks can then be created towards this branch. Branches will eventually be merged to master so that code is visible for everyone - conflicts shouldn't happen because of the unique folders created - code inside can always be updated at a later point.

To keep it simple it's suggested to use your username as a name for the folder where your code would go and where you would work your magic to create something truly unique. For the branch, the same could be used along with the JIRA epic number as a prefix to allow proper pushes to the repository.

E.g. create a branch called `RND-664-mduhovnikov` and then create a folder called `mduhovnikov` in it and follow the React Native CLI setup to initialize your logic within that folder.

## Resources

The development of the app will be split in tasks that are related to each other and it would be preferable if they were done in the order they've been prepared (as JIRA tickets). However, always feel free to go back and update something if desired or introduce some concepts / suggestions that others could benefit from.

This way, each folder's code could be used as their own unique resources.

Otherwise all other information can be found in the created JIRA epic - [React Native Upskill Epic](https://jira.isobarsystems.com/browse/RND-664).

For some further inspiration, check out what we currently have with some extra technologies involved - [Headless Native App](https://git.isobarsystems.com/projects/IRD/repos/headless-native-app/browse). Feel free to take a look and try it out locally. All suggestions for improvements and additions there are more than welcome!

## FAQ

Got any further questions which are not answered here? Drop us a message at `#react-native-upskill` in [Slack](https://isobarcommerce.slack.com/archives/C04B83SD1DE) and we'll be more than happy to support!

