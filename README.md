
# Senbird - ionic - scrolling issue

## To run the application

  - Edit the variables inside `src/constants.js`
  - Run `npm install`
  - Run `npm run start`

## To reproduce the issue
- Enter the channel url at the home page, you will get redirected to the conversation panel
- While at the conversation panel, refresh the page multiple times, you will notice a random strange scrolling behavior
## Implementation explanation
- Source file `src/Chat.tsx`
When there is a bot message with the `customType` of certain text e.g: `INPUT_ETA` in our use case, we render a custom component. Source of the issue comes from this specific area.
## Issue explanation
When there is a button introduced in the custom message component, the scrolling part behaves strangely, if we remove a button from the custom message and we refresh multiple times, we don't see the issue anymore.

