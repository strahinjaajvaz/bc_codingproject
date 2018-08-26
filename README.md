# Be Collective Coding Challenge

Fetch data representing a folder structure and display the total number of files and the accumulative size of the files.

## Getting started

1. Make sure that you have Node.js and npm installed.
2. Clone the repository and get into the root folder.
3. Install the packages using the command line with `npm install`.
4. To run the app, make sure you're in the root folder in the terminal type `npm start`.

## Project Solution description

Once the data has been fetched, recurssion is used to iterate through the "tree". If a file type is found, we then use React's Context Api to update the total files and the total files size.

## Assumptions

* The size for each file returned is in bytes.

## Issues faced
* The api that was used in the fetching of the folder structure would return `status 500` sporadically. If that happens, please refresh the page.

## Technologies used

* React for the front end


## Authors

* Strahinja Ajvaz

## License

This project is licensed under the MIT License