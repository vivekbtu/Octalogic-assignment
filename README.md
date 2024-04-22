# Vehicle Rental System

## Introduction
This project aims to provide users with a form that collects user information and vehicle rental details, including rental dates. The system allows users to book vehicles based on their preferences and availability.

## Project Type
Fullstack

## Deplolyed App
Frontend: [https://octalogic-vivek.netlify.app/]

Backend: [https://octa-bac.onrender.com/bookings]


<!--- ## Video Walkthrough of the project
[Attach a very short video walkthrough of all of the features [1 - 3 minutes]]

## Video Walkthrough of the codebase
[Attach a very short video walkthrough of codebase [1 - 5 minutes]]
-->

## Features
- Dynamic form interface with one question per screen
- Validation checks for user inputs
- Integration with a SQL-based database for storing vehicle and booking information
- Seamless booking experience with error handling

## Design Decisions or Assumptions
- Used Node.js with Express.js for the backend
- Utilized a SQL-based database with an ORM for data storage
- Chose React.js for the frontend
- Implemented form-based user interface with dynamic question display
- Used normal CSS for styling

## Installation & Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Start the frontend: `npm start` (for frontend setup)
4. Start the backend: `npm start` (for backend setup)
5. Access the application at `http://localhost:3000`

## Usage
1. Open the application in your web browser
2. Fill in the form details as per the questions displayed
3. Click "Next" to proceed to the next question
4. Click "Prev" to proceed to the previous question
5. Complete all questions and click "Submit" to book the vehicle
6. Optionally, navigate to the "All Bookings" page to view all bookings by clicking the "Show All Bookings" button


## APIs Used
- Node.js
- Express.js
- Other libraries/modules

## API Endpoints
- GET /api/bookings - retrieve all items
- POST /api/bookings - create a new item
- GET /api/veh/wheels/${wheels}
    [2, 4]
- GET /api/veh/types/${types}
    ["sports", 'cruiser', 'sedan', 'suv', 'hatchback']


## Technology Stack
- Node.js
- Express.js
- SQL-based database
- React.js
- CSS (for styling)
- Other libraries/modules
