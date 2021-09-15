Ravenous: Create Project & Components
Welcome to the first installment of the Ravenous project! Over the next couple of weeks, you’ll build a website called “Ravenous”, a Yelp-like clone.

In total, there will be four parts to this project:

Creating Static Components
Passing Information to Components
Setting the State of Ravenous Components
Interacting with the Yelp API
Today, you will start by building the first part of Ravenous: Creating Static Components.

Here’s a quick overview of how Ravenous should function:

As a user, I should be able to search for restaurants
As a user, I should be able to view a list of restaurants returned by the Yelp API
As a user, I should be able to sort through restaurants using a filter
The four projects will test your knowledge of JavaScript and React, all with the goal of building a Yelp-like clone. If you want to get a feel for what Ravenous can be, visit the Yelp website and search for restaurants in your area.

Finally, a few notes before getting started:

In each project, you’ll be presented with the intended, final outcome (of that project) in the Codecademy browser component.
You should expect to spend more than 1 day on this specific project. It’s the base of the entire app, and it will likely take a few days to complete this project. It’s OK if it is not all finished in one day.
If you don’t understand how to implement a certain part of the project, we’ll provide guidance as needed. However, you should expect to search Codecademy for the exercises that will provide you with the relevant information.
You should expect to complete all four Ravenous projects on your personal computer using your preferred tools (terminal, text editors, etc.).
Let’s get started!

The purpose of the <Business /> component is to represent how a business (a restaurant) in Ravenous will be formatted and styled. For now, we’ll hard code a single business listing. Later, you’ll update it dynamically using the Yelp API.

The point of the <BusinessList /> component is to simulate what a returned list of businesses would look like in Ravenous (after querying the Yelp API, for example). To help this simulation, <BusinessList /> will make use of the <Business /> component repeatedly. To use the <Business /> component, you’ll have to import it. On the next line, import the <Business /> component.

To search for businesses (restaurants) in Ravenous, you’ll need a search bar.


The search bar will communicate with the Yelp API, but you’ll build the functionality to communicate with the API in a later project. Today, you’ll build part of the structure that’s needed to communicate with the Yelp API. Specifically, requests to the Yelp API must follow formatting and naming conventions set by the API. For example, the search bar should allow users to search businesses by:

Best Match
Highest Rated
Most Reviewed
To achieve this, you’ll create an object with keys and values that conform to what the API expects to receive (as shown in the documentation provided above). Let’s see what this looks like.


The purpose of renderSortByOptions() is to dynamically create the list items needed to display the sort options (Best Match, Highest Rated, Most Reviewed). This is to help future proof against potential changes to the Yelp API.

Since fetch() is a browser API, older browsers may not support it. To increase the accessibilty of Ravenous to a wider audience of users, we’ll need to add a fetch() polyfill to support older browsers.

Within the Ravenous directory in your terminal, run npm install whatwg-fetch --save to install the whatwg-fetch polyfill and add it to your package.json file.


Your fetch() will currently not function correctly due to CORS restrictions.
We can bypass this restriction with an API called CORS Anywhere. CORS Anywhere will take requests sent to its API endpoint, make them for the requesting app with the proper CORS permissions, and then return the response back to the requesting app.
https://cors-anywhere.herokuapp.com/corsdemo