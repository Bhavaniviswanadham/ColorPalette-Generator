# Color Palette Generator

## Introduction

In this task, you will build a simple React-based application that focuses on managing user inputs and displaying dynamic data. The Color Palette Generator allows users to generate random color palettes, save their favorite palettes, and interact with them in different ways. This project demonstrates handling user interactions, state management, and basic styling in React.

## Assignment Description

Create a "Color Palette Generator" application where users can generate random color palettes and save their favorite palettes. The task will allow you to demonstrate handling user interactions, state management, and basic styling.

### Features:

1. **Random Color Generation:**
   - Create a button that, when clicked, generates a random color palette consisting of 5 colors.
   - Display the colors as horizontal blocks or squares in a row, showing both the color and its hex code.

2. **Save Favorite Palette:**
   - Allow users to save a generated color palette by clicking a "Save Palette" button.
   - Saved palettes should be displayed in a list below the generator.

3. **Palette List:**
   - Display saved color palettes, showing the color blocks and their corresponding hex codes.
   - Persist the list of saved palettes in the browser using **local storage**, so that the saved palettes remain even after refreshing the page.

4. **Styling:**
   - Use basic styling to ensure the color blocks and the overall interface look clean and appealing.
   - Ensure the app is responsive on both **mobile** and **desktop**.

### Bonus Features (Optional):

- **Copy to Clipboard:** Allow users to click on a color’s hex code to copy it to the clipboard.
- **Delete Palette:** Add functionality for users to delete a saved palette from the list.
- **Name the Palette:** Allow users to name each saved color palette.
- **Lock Colors:** Allow users to lock specific colors in the palette so that only the unlocked ones change during random generation.

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Bhavaniviswanadham/color-palette-generator.git
    ```

2. **Navigate to the project folder:**
    ```bash
    cd color-palette-generator
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Start the development server:**
    ```bash
    npm start
    ```

    The app will run on [http://localhost:3000](http://localhost:3000).

## Usage

- **Generate Palette**: Click the "Generate Palette" button to create a new random color palette.
- **Save Palette**: After generating a palette, provide a name for it and click the "Save Palette" button to save it.
- **View Saved Palettes**: Saved palettes will be listed below the generator, showing the color blocks and their hex codes.
- **Delete Palette**: Click on the "Delete" button next to a saved palette to remove it from the list.
- **Copy Color Hex Code**: Click on any color's hex code to copy it to the clipboard.

## Technologies Used

- **Frontend**: React.js
- **State Management**: React `useState` hook
- **Storage**: Local Storage for persistent palette saving
- **Styling**: CSS

## Contributing

Feel free to fork this project, make your changes, and submit a pull request. Contributions are welcome!

## License

This project is open-source and available under the MIT License.

