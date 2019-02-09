# Data Table App

Data Table App display payment log using Vue.js and Vuex to save data to FireBase. 

## Web App ScreenShot

![Web App ScreenShot](/image/screenshot.png)

## Link to the deployed version of your project.

https://payment-log.firebaseapp.com/ - [Data Table App](https://payment-log.firebaseapp.com/)

## Method and/or Approach

Using Vue.js the following components was built:

1. Filter: Used to filter the data table by Name, Description, ID, Amount and Name or Description. Displayed as a select input html element.
2. Footer: Used for the footer of the whole page
3. Navbar: Used for the header of the page.
4. Search: This is the text input component for searching for items by what is filtered by the filter component.
5. Sort: This component is displayed as Select input html element. It sorts the table by ID, Name, Description, Date and Amount (both ascending and descending)
6. Table: This is the main component with one nested component 'popup' explained below. This component dynamically gets data from the Firebase storage via vuex store using axios.
The data is arranged by the sorted value provided. The table component is divided into five parts namely:
    1. Popup:
    2. thead: This includes event listener header for when clicked the table is sorted by the heading.
    3. tbody: This displays the queried data and using getters in dynamically change its value when filtered.
    4. tfoot: This part serves as the summary and analysis of the table as a whole with minor features like display of highest and lowest Amount, newest and oldest payment and Total Amount. 
7. The popup component is used to edit the description of the each payment details. The component is hissed by default and displayed whenever an entry is clicked


## Building and Deployment
The project is deployed to Firebase


### How long did you spend on the test? Would you do anything differently if you had more time?

I spent five days on the test. I would have love to add more features particularly in the UX/UI. I also wish I could add more analytical features to the data to generate more insight about the data been displayed.


### In what ways would you adapt your component so that it could be used in many different scenarios where a data table is required?

It could be adapted in a table that needs to be sorted and/or filtered. Also it could also be reused where a data table needs to be dynamically displayed as in this app.

### What is your favorite CSS property? Why?

CSS Display: the effective use of the attributes static, sticky, absolute, fixed, block, inline... Can give a better user experience and feature with the excessive use of Javascript.

### What is your favorite modern Javascript feature? Why?

Spread (...) Function, it's used for destructing and copying array makes it my favourite for now.


### What is your favorite third-party Vue.js library? Why?

Vuex is a 'single source of truth' state management pattern and library. The ability to serve as a centralized store for all components in the application makes it my favorite. Using Vuex, there's easy for generating data (using getters) and re-generating data (using getters inside another getter) from generated data. An example is analyzing data generated from the store.