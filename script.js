// Define time zones
const timeZones = [
    { name: 'New York', zone: 'America/New_York', flag: '🗽' },
    { name: 'London', zone: 'Europe/London', flag: '🇬🇧' },
    { name: 'Tokyo', zone: 'Asia/Tokyo', flag: '🗾' },
    { name: 'Sydney', zone: 'Australia/Sydney', flag: '🦘' },
    { name: 'Dubai', zone: 'Asia/Dubai', flag: '🏜️' },
    { name: 'São Paulo', zone: 'America/Sao_Paulo', flag: '🇧🇷' },
    { name: 'Singapore', zone: 'Asia/Singapore', flag: '🇸🇬' },
    { name: 'Mumbai', zone: 'Asia/Kolkata', flag: '🇮🇳' }
];

function initializeClock() {
    const clocksGrid = document.getElementById('clocksGrid');
    clocksGrid.innerHTML = '';

    timeZones.forEach((tz, index) => {
        const clockCard = document.createElement('div');
        clockCard.className = 'clock-card';
        clockCard.innerHTML = `
            <h2>${tz.flag} ${tz.name}</h2>
            <p class="timezone">${tz.zone}</p>
            <div class="analog-clock" id="analog-${index}">
                <div class="clock-numbers" id="numbers-${index}"></div>
                <div class="hand hour-hand" id="hour-${index}"></div>
                <div class="hand minute-hand" id="minute-${index}"></div>
                <div class="hand second-hand" id="second-${index}"></div>
                <div class="clock-center"></div>
            </div>
            <div class="digital-time" id="digital-${index}">00:00:00</div>
            <div class="ampm" id="ampm-${index}">AM</div>
            <div class="date-info" id="date-${index}"></div>
        `;
        clocksGrid.appendChild(clockCard);
        
        // Initialize clock numbers
        initializeClockNumbers(index);
    });

    // Start updating clocks
    updateAllClocks();
    setInterval(updateAllClocks, 1000);
}

function initializeClockNumbers(index) {
    const numbersContainer = document.getElementById(`numbers-${index}`);
    for (let i = 1; i <= 12; i++) {
        const number = document.createElement('div');
        number.className = 'number';
        number.style.transform = `rotate(${i * 30}deg)`;
        
        const span = document.createElement('span');
        span.textContent = i;
        span.style.transform = `rotate(${-i * 30}deg) translateY(-80px)`;
        
        number.appendChild(span);
        numbersContainer.appendChild(number);
    }
}

function updateAllClocks() {
    timeZones.forEach((tz, index) => {
        updateClock(tz, index);
    });
}

function updateClock(timezone, index) {
    // Get current time in the specified timezone
    const now = new Date();
    const timeString = now.toLocaleString('en-US', { timeZone: timezone.zone });
    const time = new Date(timeString);

    // Extract hours, minutes, seconds
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    // Update digital time
    const digitalDisplay = document.getElementById(`digital-${index}`);
    digitalDisplay.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Update AM/PM
    const ampmDisplay = document.getElementById(`ampm-${index}`);
    ampmDisplay.textContent = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Update date info
    const dateDisplay = document.getElementById(`date-${index}`);
    const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    dateDisplay.textContent = time.toLocaleDateString('en-US', dateOptions);

    // Update analog clock hands
    const secondDegrees = (seconds / 60) * 360 + 90;
    const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

    document.getElementById(`second-${index}`).style.transform = `rotate(${secondDegrees}deg)`;
    document.getElementById(`minute-${index}`).style.transform = `rotate(${minuteDegrees}deg)`;
    document.getElementById(`hour-${index}`).style.transform = `rotate(${hourDegrees}deg)`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeClock);
