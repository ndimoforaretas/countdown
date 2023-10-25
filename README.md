# README: Event Countdown DOM Widget

## Description

An interactive event countdown timer that allows users to set a specific date and time, then displays the number of days, hours, minutes, and seconds remaining until that event. The project is built using HTML, CSS, and JavaScript.

The Event Countdown provides a visually appealing and user-friendly way to track the time remaining until important events. Whether you're counting down to a birthday, an anniversary, or any other significant event, this tool will keep you updated down to the second.

## Features

1. **Date-Time Input:** Users can select the date and time of their event using a date-time input field.
2. **Dynamic Countdown:** Once a date and time are set, the timer immediately starts counting down to the event, updating every second.
3. **Persistent State:** The chosen date and time are stored in local storage, allowing the countdown to persist across browser sessions. If a user revisits the page, the countdown will continue.
4. **Responsive Design:** The layout and design of the countdown timer adapt to different screen sizes, ensuring a consistent user experience across devices.

## JavaScript Techniques

1. **DOM Manipulation:** The code interacts extensively with the DOM to update the countdown display, read the date-time input, and more.
2. **Event Handling:** The code listens for changes to the date-time input field, starting or updating the countdown as needed.
3. **Interval Timing:** The `setInterval` function is used to update the countdown every second, ensuring real-time accuracy.
4. **Date-Time Calculations:** The script uses JavaScript's Date object to calculate the time difference between the current time and the set event time, then breaks this difference down into days, hours, minutes, and seconds.
5. **Local Storage:** The Web Storage API (specifically local storage) is employed to save and retrieve the user's chosen date and time, making the countdown persistent across browser sessions.

## The JavaScript functionality is as follows:

1. **DOM Selection:** The script starts by selecting various elements from the DOM such as the date input field and the spans where days, hours, minutes, and seconds will be displayed.
2. **Countdown Logic:**
   - `updateCountdown(eventDate)`: This function updates the countdown display. It calculates the time difference between the current time and the event date and then determines the number of days, hours, minutes, and seconds remaining. If the event date has already passed, the countdown stops and displays zeros for all values.
   - `startCountdown()`: This function initializes or restarts the countdown. It first stops any existing countdown, then triggers an immediate update and sets up a recurring update every second.
3. **Event Listener:** The script has an event listener on the date input field. When the user selects a date and time, the chosen value is stored in local storage, and the countdown starts.
4. **Initialization:** The script contains an `initializeCountdown()` function that runs when the page loads. This function checks if there's a date and time stored in local storage (from a previous session). If there is, it sets the input field to that value and starts the countdown.

5. **Local Storage:** The script uses the Web Storage API (specifically, local storage) to persist the user's chosen date and time across sessions. This way, if the user revisits the page, the countdown will continue from where it left off.
