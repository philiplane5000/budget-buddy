# Budget Buddy

Hosted on Heroku: [Budget Buddy](https://budget-buddy-63236.herokuapp.com/)

## About

* `Budget Buddy` is a user-friendly web application designed to help people better manage their spending habits, set and stick to their budget and inspire financial responsibility.

* According to a 2016 GOBankingRates survey, *"35 percent of all adults in the U.S. have
only several hundred dollars in their savings accounts and 34 percent have zero. Only 15
percent have over $10,000 stashed away.”* 

* We created `Budget Buddy` to counteract this trend. Research shows that people often write a budget but don't often follow it due to the inconvenience of consulting an excel sheet saved on a computer or a pad of paper at home. With `Budget Buddy`, your budget is in your pocket, easy to customize or adapt to your actual spending habits and it comes with resources to help you stay motivated and on track. 

* Start using `Budget Buddy` today and never dip into your savings again! 

### Get Started

* `Step One:` Save [Budget Buddy](https://budget-buddy-63236.herokuapp.com/) as a bookmark in your cellphone's web browser. While accessible from any device connected to the internet, we designed `Budget Buddy` as a mobile-first application to more easily track spending while on the go! 

* `Step Two:` Navigate to the "BUDGET" page to setup your budget. Click any one of the six categories to set/adjust a spending limit for that category. Once you have set spending limits for each of the six categories, your setup is complete! Every purchase you make from here on out should be deducted from one of these six categories. 
    * NOTE: No timeline is provided or baked in to the application. According to [some](https://money.cnn.com/2018/01/19/pf/weekly-budget/index.html), "You'll gain greater control by budgeting weekly... monthly budgets are not setting you up for success"

* `Step Three:`Example, you just checked out at the grocery store and the clerk hands over your receipt for $49.95.  Navigate to the "PURCHASE" page, click "GROCERIES", enter "$49.95" as the transaction amount and click "COMPLETE PURCHASE". A prompt will indicate that your purchase has been accounted for!

* `OPTIONAL`: Visit our "LEARN" page to inspire better spending habits and financial responsibility. A wide variety of content from "CNBC", "USA Today", and "The Street" web publications are made available on click of a button. Each article appears with a headline, an image, a synopsis as well as a "SAVE" button. Users can save articles of special interest to revisit later by clicking the "Saved Articles" tab.

### Behind the Scenes

* `Budget Buddy` is a single page web application built on the MERN stack - `MongoDB`, `Express.js`, `React.js` and `Node.js`.

* We were able to leverage many of the key features of `React.js` to create a highly interactive UI. Routing or navigating between page components is handled by `React-Router`. Reuse of smaller components across pages helped to create a uniform design and layout - often using conditional rendering together with changing state values to achieve dynamic views and effects.

* On the frontend `react-motion` for subtle animations, the grid layout and other components from `Material-UI` in conjunction with custom components written in `react-emotion` or `CSS` to achieve a responsive, cohesive and minimalistic design.

* An `Express.js` server running on `Node.js` powers the backend. We leaned on `Mongoose.js` to more easily manage the relationships between our data, connect our app to and query the `MongoDB` holding budget and article data. `Express.js` serves API routes for the client-side `React.js` application. Unique queries unsupported by `Mongoose.js` are handled by custom methods written in `Javascript`. 

* User authenticaion is managed via `Firebase` together with the `React Context API`. A `firebase` oriented `ReactContext.Consumer` listens for a change in state of user authentication, i.e. whether a user is logged in or not, passing data down to any lower-level component wrapped in the `ReactContext.Consumer`. Managing user authentication with the `React Context API` made the currently logged in user's `Google ID` (necessary to access and create new budget data) as well as the current state of authentication easily accessible to lower level components without having to repeatedly pass the data down as props via intermediate elements/componenets in the tree.

* Currently, `Budget Buddy` supports user authentication via a `Google` account.

### Technologies Listed

* [MongoDB](https://www.mongodb.com)
* [mongoose.js](https://mongoosejs.com/)
* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [React-Router-DOM](https://www.npmjs.com/package/react-router-dom)
* [Node.js](https://nodejs.org/en/)
* [Material-UI](https://material-ui.com/)
* [Material Design](https://material.io/design/)
* [Firebase](https://firebase.google.com/)
* [react-motion](https://www.npmjs.com/package/react-motion)
* [react-emotion](https://www.npmjs.com/package/react-emotion)
* [sweetAlert2](https://sweetalert2.github.io/)

### Getting Started [A Visual Walkthrough]

* (Under Construction)
