# Angular
## Node.js NPM
- Node.js/Node is a java script run time environment that allow you to run server side applications
- NPM is node package manager used for dependency managment and version managment

## Commands
- ng version  => tells the version of angular 
- ng new project-name => used to create new project
- ng serve => used to run the project

## Files and Folder Structure
- Package.json => details about project, commands, dependencies are mentioned <=> POM.xml
- node_modules => all the libraries required for project <=> Maven Dependencies
- src folder => we write code here
 - app => basic component
 - assets => public folder for images and assets for the component
 - environments => different environments prod, dev
 - index.html => first file that is going to run
 - main.js => bridge between angular and html
 - style.css => global css styles
- package.lock.js => parent of package.json, contains full details of dependencies
- angular.json => here you write angular configuration
- tsconfig files =>type script configuration
- karma.config.js => test configuration
- polyfills.ts 
 
## Questions
1. Difference between CLient-Side and Server-Side Application
2. How to change to specific version of Angular
3. Can we use two Node.js Versions at same time
4. what happens if you delete package.json
5. What is the differnce between package.json and package-lock.json
6. What if the package-lock.json is deleted, will this impact?
