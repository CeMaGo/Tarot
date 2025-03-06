<!-- Here Goes the scribbles  -->

page.tsx Changes:

Background Image:
bg-[url('/tarot-background1.jpg')] bg-cover
Title Styles:
text-4xl font-serif font-bold mb-8 text-orange-200
Card Container Opacity:
opacity-75
Button Styles:
bg-cyan-900 hover:bg-cyan-800 opacity-75 (Draw Card)
bg-purple-950 hover:bg-purple-900 opacity-85 (Draw Three Cards)
CardComponent.tsx Changes:

Reversed Card Background:
bg-gray-700 (Reversed)
bg-gray-800 (Upright)
Upright/Reversed Text Color:
text-pink-500 (Reversed)
text-emerald-500 (Upright)
Card Name Font:
font-bold font-serif text-xl mb-2
Show/Hide Meanings Button:
text-sky-400 hover:text-sky-300 mt-2
Meaning Text Color:
text-gray-300 text-base mt-2

<!-- Next Steps:  -->

**Next** Steps:

Now that we have the base styling in place, what would you like to work on next? Here are some suggested improvements:

**Card** Images:

- Add actual card images to the CardComponent.
- More Card Spreads:
- Implement more complex card spreads, such as the Celtic Cross spread.

**Animations**:

- Add animations to the card drawing or card revealing process.

  **Accessibility**:

- Ensure the app is accessible to users with disabilities.
  **Responsive** Design Refinements:
- Fine-tune the responsive behavior of the app for different screen sizes.
- **Add** a card back image:
- Add a card back image, and only show the card front image once the card is drawn.
  **Add** a shuffle animation:
- Add a shuffle button, and a shuffle animation.
  **Add** a way to save readings:
- Add a way to save the readings.
