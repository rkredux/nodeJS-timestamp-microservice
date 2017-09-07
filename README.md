# nodeJS-timestamp-microservice
This NodeJS based application is a microservice for generating unix and natural language timestamp for a string url parameter by the user

About This Project 
------------

API Basejump: Timestamp microservice

Here is what this application does. 

1) You can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)

2) If it does, it returns both the Unix timestamp and the natural language form of that date.

3) If it does not contain a date or Unix timestamp, it returns null for those properties.


Example usage:
https://timestamperftw.glitch.me/1450137600
https://timestamperftw.glitch.me/15Dec, 2015


Example output:
{ "unix": 1450137600, "natural": "December 15, 2015" }


If you want to do something further cool with this microservice go ahead and clone and cd into the app folder. 

On the front-end,
- edit `public/client.js`, `public/style.css` and `views/index.html`
- drag in `assets`, like images or music, to add them to your project

On the back-end,
- your app starts at `server.js`

Cheers,
