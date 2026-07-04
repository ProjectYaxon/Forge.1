# Global Time Zone Clock

A beautiful, interactive digital clock dashboard that displays the current time in 8 different major time zones around the world.

## Features

✨ **Real-time Updates** - Clocks update every second
🌍 **Multiple Time Zones** - View 8 major cities worldwide:
  - New York (EST/EDT)
  - London (GMT/BST)
  - Tokyo (JST)
  - Sydney (AEDT/AEST)
  - Dubai (GST)
  - São Paulo (BRT)
  - Singapore (SGT)
  - Mumbai (IST)

⏱️ **Dual Display**:
  - Digital time display (HH:MM:SS)
  - Analog clock with working hands
  - AM/PM indicator
  - Date information

📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
🎨 **Beautiful UI** - Modern gradient background with smooth animations

## How to Use

1. Open `index.html` in your web browser
2. View the current time in all major time zones simultaneously
3. Each card shows:
   - City name with flag emoji
   - Digital time (24-hour format)
   - Analog clock face with hour, minute, and second hands
   - AM/PM indicator
   - Current date

## Files

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - Clock logic and time zone handling

## Technologies

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (no dependencies)

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Customization

To add or modify time zones, edit the `timeZones` array in `script.js`:

```javascript
const timeZones = [
    { name: 'City Name', zone: 'Continent/City', flag: '🚩' },
    // Add more entries...
];
```

Supported time zone identifiers can be found in the [IANA Time Zone Database](https://www.iana.org/time-zones).

## License

MIT License
