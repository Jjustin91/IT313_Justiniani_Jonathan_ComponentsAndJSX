# IT313 - Laboratory 4: Student Roster Card Renderer

## Problem Description
This project implements a mobile class roster interface for the IT313 registrar using React Native and Expo. The application displays a list of enrolled students as individual, styled cards, showing each student's name, course, and enrolled units, with a dynamic "Full Load" badge indicating students carrying 18 or more units (isFullLoad === true). The screen header dynamically displays the total enrolled student count computed from the data array.

## Component Architecture
- `StudentCard` (Presentational Component):
  - Receives `name`, `course`, `units`, and `isFullLoad` via destructuring in its function signature.
  - Utilizes conditional rendering (`{isFullLoad && <Text>Full Load</Text>}`) to display load status badges.
- `StudentRoster` (Container Component):
  - Manages the roster dataset.
  - Computes array metrics dynamically using inline JSX template literals (`${students.length} students enrolled`).
  - Iterates over the data array using `.map()` and supplies a persistent, unique `key={student.id}` to each rendered card.
  - Contains a toggle function to reverse list ordering for virtual DOM diffing verification.

## How to Run the App
1. Install project dependencies:
   ```bash
   npm install