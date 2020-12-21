# Tech

Endless scroll
3rd party payment

# operations

Step 1

- set up local state: models, stores, actions
- move hard coded values to fixtures populating stores
  Step 2 (optional)
- proof of concept by adding a local storage adapter
  Step 3
- clear all user stories in todo
- implement apis
- populate local fixtures with data from apis

# stories

General

- [ ] user gets prompted to accept cookie policy on first visit

Home

- [ ] user can get one movie recommendation as a hero banner
- [ ] user can get categorized movie recommendations
- [ ] user can select and go to movie page (to read more and book tickets)
- [ ] user can view movie trailer

Movies

- [ ] user can view a list of all movies available right now
- [ ] user can view a list of all upcoming movies
- [ ] user can select and view movie trailer
- [ ] user can select and go to movie page (to read more and book tickets)
- [ ] user can decide on a wide range of filters to limit what movies to view

Tickets

- [ ] user can specify a query: day, cinema or movies
- [ ] user can specify filters
- [ ] user can view a list of shows for the specified query and filters
- [ ] user can decide to view the list either alphabetically or as a timeline
- [ ] user can toggle to display the shows for each movie
- [ ] user can select a show and proceed to booking

Movie page

- [ ] user can read all information about the movie
- [ ] user can see photos from the movie
- [ ] user can view movie trailer
- [ ] user can view a list of all shows for the specified day and cinema
- [ ] user can select a show and proceed to booking

Booking - ticket selection

- [ ] user cannot select more tickets than available
- [ ] user can select ticket types and count
- [ ] user can decide to proceed to seat selection

Booking - seat selection

- [ ] user can choose among the available seats
- [ ] user can return to ticket selection
- [ ] user can proceed to confirmation

Booking - Confirmation

- [ ] user can review show, movie and ticket details
- [ ] user can add email for purchase confirmation email
- [ ] user can finish booking and get redirected back to app booking success page
- [ ] user can fail booking and get error message

# Stretch Goals

Home

- [ ] user can choose to show all movies in a category
      Booking - general
- [ ] user booking session can time out and redirect user to a new session
- [ ] user can start a session by visiting a deep link to the booking page
- [ ] user can start a session by visiting a regular link to the booking page

Booking - Confirmation

- [ ] user can add gift/discount cards
- [ ] user can proceed to 3rd party payment system
- [ ] user can finish booking and get confirmation sent to email

Admin - ...
TODO: define admin user stories
