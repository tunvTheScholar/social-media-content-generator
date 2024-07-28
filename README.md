# Build a Social Media Content Generator Application

## Project Overview

This project is a web application designed to help users generate social media content ideas and post captions using AI. The application includes a front-end built with React, TypeScript, and Vite, and a back-end built with Node.js, Express, and Firebase for database management. The app also integrates Twilio (or another SMS API) for sending text messages.

## Features

- User authentication via phone number and access code.
- Dashboard with navigation tabs for "Services" and "Profile".
- Generate social media captions from scratch.
- Get post ideas and generate captions for any topic.
- Save and share generated captions.
- Manage user-generated content in the profile.

## Technology Stack

- **Frontend**: React, TypeScript, Vite
- **Backend**: Node.js, Express
- **Database**: Firebase
- **SMS Service**: Twilio (or another SMS API)

## Design

[Figma](https://www.figma.com/design/yEfUImu37E1v5JmZ6xxsY5/Skipli---Coding-Challenge?node-id=8121-2&t=OAcMKkiFIrt4UVBE-0)

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- A code editor (VS Code, Sublime Text, etc.)

Additionally, sign up for free accounts on these services:

- [Firebase](https://firebase.google.com) (for database)
- [Twilio](https://www.twilio.com) or another SMS API of your choice (e.g., sms.to)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/social-media-content-generator.git
cd social-media-content-generator
```

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAb8aNz9z8oGYUhuyVB9KfaFhdzaiViEKY",
authDomain: "social-media-content-gen-e83ef.firebaseapp.com",
projectId: "social-media-content-gen-e83ef",
storageBucket: "social-media-content-gen-e83ef.appspot.com",
messagingSenderId: "358667069315",
appId: "1:358667069315:web:a1e8b65391cde8a684f8b6",
measurementId: "G-770CH03N7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
