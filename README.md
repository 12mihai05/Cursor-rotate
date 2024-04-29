# Cursor-Rotate Web App

Welcome to Cursor-Rotate, where the cursor always knows what it wants: Yes! This playful and light-hearted web app challenges users with a simple decision—Yes or No—but with a comedic twist: the cursor is irresistibly drawn to the "Yes" button, rotating to point at it no matter where it is moved.

## Features

- **Rotating Cursor:** A constantly rotating cursor that humorously points only to the "Yes" option.
- **Simplified Decision-Making:** Two options, but the cursor has already chosen for you.
- **Built with JavaScript:** A pure JavaScript implementation that keeps the setup light and fun.

## How It Works

- The custom cursor's position and rotation are dynamically updated based on the user's mouse movement.
- Using the `mousemove` event, the script calculates the angle between the cursor and the center of the "Yes" button. It then adjusts the cursor's CSS transform property to rotate it towards this button.

### Event Handling
- **Mouse Over and Out Events:** When the mouse hovers over the "No" button (`button2`), the custom cursor's image is temporarily changed with not-allowed cursor. It reappears when the mouse leaves this button.
- **Click Events on Buttons:** Both buttons have click events that trigger animations and visual changes. For example, clicking the "Yes" button shows SVG animations and changes the page's content after a slight delay, emphasizing the app's playful theme.
- **Dynamic Content Changes:** Depending on which button is clicked, the text and visible elements on the page are adjusted. This includes showing error messages or confirming the user's agreement with humorous feedback.

## Usage

Start the web app and watch the cursor make a beeline for "Yes." It’s a perfect showcase of playful JavaScript and is ideal for a quick laugh or as a quirky demonstration of dynamic cursor manipulation.
