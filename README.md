# Discerart

> Find your art online teacher

## Table of Contents
- [Description](#description)
- [Project Structure](#project-structure)
- [Author info](#author-info)

![Discerart](https://raw.githubusercontent.com/ceciCoding/discerart/master/discerart.png)

---

## Description

Discerart is a web application for finding art teachers that teach online. In this application the user can find teachers, contact them and register as teaachers themselves. <br>

---
## Project Structure
This application is developed with Vue.js using Vuex and the Vue Router. <br>
The src directory has a main.js file that starts the app, a router.js file that handles the routes that the Vue Router should use and its corresponding components, and an App.vue file holding the app itself. <br>
Apart from these files, inside this scr directory there are other directories such as 'store', which has modules for the Vuex store. These modules are divided in three: 'auth' for user authentication modules, 'messages' for the sent and received requests and 'teachers' for the teachers related modules. Each of them is has a separate module for getters, actions and mutations. <br>
Another directory inside src is 'components', which holds the definitions of all the components used throughout the app. <br>
Finally, the 'pages' directory is where each component used by the router lives.

---

## Author Info
[Twitter](https://twitter.com/cec1_c0d) <br>
[Dev](https://dev.to/cec1_c0d) <br>
[Linkedin](https://www.linkedin.com/in/cecilia-olivera-webdev/)