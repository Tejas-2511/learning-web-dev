import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// SVG Icons as functional components to keep JSX extremely clean and dependency-free
const SunIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const PauseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

const ResetIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
  </svg>
);

const LapIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

function App() {
  const [activeTab, setActiveTab] = useState('clock');
  const [theme, setTheme] = useState('dark');
  const [accent, setAccent] = useState('purple');

  // Sync Theme & Accent with HTML attributes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
  }, [accent]);

  // ==========================================
  // CLOCK LOGIC
  // ==========================================
  const [currentTime, setCurrentTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 50); // High frequency tick for smooth sub-second SVG progress
    return () => clearInterval(timer);
  }, []);

  // Format Time elements
  const formatClockTime = () => {
    let hours = currentTime.getHours();
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    let amPm = '';

    if (!is24Hour) {
      amPm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
    }
    const formattedHours = String(hours).padStart(2, '0');

    return { hours: formattedHours, minutes, seconds, amPm };
  };

  const { hours, minutes, seconds, amPm } = formatClockTime();
  const dateString = currentTime.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  // Smooth sweeping SVG circular ring configuration (Clock)
  const clockCircleRadius = 90;
  const clockCircumference = 2 * Math.PI * clockCircleRadius;
  const clockMs = currentTime.getMilliseconds();
  const clockSecsFloat = currentTime.getSeconds() + clockMs / 1000;
  const clockProgress = clockSecsFloat / 60;
  const clockDashoffset = clockCircumference - clockProgress * clockCircumference;

  // ==========================================
  // STOPWATCH LOGIC
  // ==========================================
  const [stopwatchTime, setStopwatchTime] = useState(0); // in ms
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const startTimeRef = useRef(0);
  const requestRef = useRef(null);

  const tickStopwatch = () => {
    setStopwatchTime(Date.now() - startTimeRef.current);
    requestRef.current = requestAnimationFrame(tickStopwatch);
  };

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - stopwatchTime;
      requestRef.current = requestAnimationFrame(tickStopwatch);
    } else {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setStopwatchTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    const lapTime = laps.length === 0 ? stopwatchTime : stopwatchTime - laps[0].cumulativeTime;
    const newLap = {
      id: Date.now(),
      lapNumber: laps.length + 1,
      lapTime,
      cumulativeTime: stopwatchTime
    };
    setLaps([newLap, ...laps]);
  };

  // Format Stopwatch Time
  const formatStopwatchTime = (timeInMs) => {
    const min = Math.floor(timeInMs / 60000);
    const sec = Math.floor((timeInMs % 60000) / 1000);
    const centis = Math.floor((timeInMs % 1000) / 10);

    return {
      minutes: String(min).padStart(2, '0'),
      seconds: String(sec).padStart(2, '0'),
      centiseconds: String(centis).padStart(2, '0')
    };
  };

  const sw = formatStopwatchTime(stopwatchTime);

  // Analyze Laps to highlight fastest and slowest
  const getLapHighlight = (lapId) => {
    if (laps.length < 2) return '';
    let minLap = laps[0];
    let maxLap = laps[0];

    laps.forEach(lap => {
      if (lap.lapTime < minLap.lapTime) minLap = lap;
      if (lap.lapTime > maxLap.lapTime) maxLap = lap;
    });

    if (lapId === minLap.id) return 'fastest';
    if (lapId === maxLap.id) return 'slowest';
    return '';
  };

  // SVG circular progress for Stopwatch (loops every 60s)
  const swCircleRadius = 90;
  const swCircumference = 2 * Math.PI * swCircleRadius;
  const swSecsFloat = (stopwatchTime % 60000) / 1000;
  const swProgress = swSecsFloat / 60;
  const swDashoffset = swCircumference - swProgress * swCircumference;

  return (
    <div className="app-container">
      {/* Moving organic background blobs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>

      <div className="glass-card">
        {/* Header Tabs */}
        <header className="card-header">
          <div className="tabs-pill-container">
            <div className={`tab-indicator ${activeTab}`}></div>
            <button
              className={`tab-btn ${activeTab === 'clock' ? 'active' : ''}`}
              onClick={() => setActiveTab('clock')}
            >
              Clock
            </button>
            <button
              className={`tab-btn ${activeTab === 'stopwatch' ? 'active' : ''}`}
              onClick={() => setActiveTab('stopwatch')}
            >
              Stopwatch
            </button>
          </div>
        </header>

        {/* Card Body */}
        <main className="card-body">
          {activeTab === 'clock' ? (
            <div className="view-clock">
              {/* Radial Progress Ring */}
              <div className="progress-ring-wrapper">
                <svg className="progress-ring" viewBox="0 0 200 200">
                  <circle
                    className="ring-track"
                    cx="100"
                    cy="100"
                    r={clockCircleRadius}
                  />
                  <circle
                    className="ring-fill animated-glow"
                    cx="100"
                    cy="100"
                    r={clockCircleRadius}
                    strokeDasharray={clockCircumference}
                    strokeDashoffset={clockDashoffset}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="time-display-container">
                  <div className="time-digits">
                    <span className="digit-group">{hours}</span>
                    <span className="digit-separator">:</span>
                    <span className="digit-group">{minutes}</span>
                    <span className="digit-separator seconds-sep">:</span>
                    <span className="digit-group seconds-digit">{seconds}</span>
                    {!is24Hour && <span className="am-pm">{amPm}</span>}
                  </div>
                  <div className="date-display">{dateString}</div>
                </div>
              </div>

              {/* Toggle 12h/24h Format */}
              <div className="clock-controls">
                <button
                  className="control-btn-secondary format-toggle"
                  onClick={() => setIs24Hour(!is24Hour)}
                >
                  {is24Hour ? '24 Hour Format' : '12 Hour Format'}
                </button>
              </div>
            </div>
          ) : (
            <div className="view-stopwatch">
              {/* Radial Progress Ring */}
              <div className="progress-ring-wrapper">
                <svg className="progress-ring" viewBox="0 0 200 200">
                  <circle
                    className="ring-track"
                    cx="100"
                    cy="100"
                    r={swCircleRadius}
                  />
                  <circle
                    className="ring-fill animated-glow"
                    cx="100"
                    cy="100"
                    r={swCircleRadius}
                    strokeDasharray={swCircumference}
                    strokeDashoffset={swDashoffset}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="time-display-container">
                  <div className="stopwatch-digits">
                    <span className="digit-group">{sw.minutes}</span>
                    <span className="digit-separator">:</span>
                    <span className="digit-group">{sw.seconds}</span>
                    <span className="digit-separator">.</span>
                    <span className="digit-group centiseconds-digit">{sw.centiseconds}</span>
                  </div>
                  <div className="stopwatch-subtitle">
                    {laps.length} {laps.length === 1 ? 'Lap' : 'Laps'} recorded
                  </div>
                </div>
              </div>

              {/* Stopwatch Action Controls */}
              <div className="stopwatch-controls">
                <button
                  className={`btn-icon-round secondary-btn ${!isRunning && stopwatchTime === 0 ? 'disabled' : ''}`}
                  onClick={handleReset}
                  disabled={!isRunning && stopwatchTime === 0}
                  title="Reset"
                >
                  <ResetIcon />
                </button>

                <button
                  className={`btn-icon-round primary-btn ${isRunning ? 'running' : ''}`}
                  onClick={handleStartPause}
                  title={isRunning ? 'Pause' : 'Start'}
                >
                  {isRunning ? <PauseIcon /> : <PlayIcon />}
                </button>

                <button
                  className={`btn-icon-round secondary-btn ${!isRunning ? 'disabled' : ''}`}
                  onClick={handleLap}
                  disabled={!isRunning}
                  title="Record Lap"
                >
                  <LapIcon />
                </button>
              </div>

              {/* Lap Lists */}
              {laps.length > 0 && (
                <div className="laps-list-container">
                  <table className="laps-table">
                    <thead>
                      <tr>
                        <th>Lap</th>
                        <th>Lap Time</th>
                        <th>Cumulative</th>
                      </tr>
                    </thead>
                    <tbody>
                      {laps.map((lap) => {
                        const highlight = getLapHighlight(lap.id);
                        const { minutes: lm, seconds: ls, centiseconds: lc } = formatStopwatchTime(lap.lapTime);
                        const { minutes: cm, seconds: cs, centiseconds: cc } = formatStopwatchTime(lap.cumulativeTime);

                        return (
                          <tr key={lap.id} className={`lap-row ${highlight}`}>
                            <td>
                              Lap {lap.lapNumber}
                              {highlight === 'fastest' && <span className="lap-tag fast-tag">Fastest</span>}
                              {highlight === 'slowest' && <span className="lap-tag slow-tag">Slowest</span>}
                            </td>
                            <td className="mono-text">{lm}:{ls}.{lc}</td>
                            <td className="mono-text">{cm}:{cs}.{cc}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </main>

        {/* Footer controls: theme & colors */}
        <footer className="card-footer">
          {/* Accent picker */}
          <div className="accent-picker">
            <button
              className={`accent-dot dot-purple ${accent === 'purple' ? 'active' : ''}`}
              onClick={() => setAccent('purple')}
              title="Purple theme"
            ></button>
            <button
              className={`accent-dot dot-cyan ${accent === 'cyan' ? 'active' : ''}`}
              onClick={() => setAccent('cyan')}
              title="Cyan theme"
            ></button>
            <button
              className={`accent-dot dot-rose ${accent === 'rose' ? 'active' : ''}`}
              onClick={() => setAccent('rose')}
              title="Rose theme"
            ></button>
            <button
              className={`accent-dot dot-emerald ${accent === 'emerald' ? 'active' : ''}`}
              onClick={() => setAccent('emerald')}
              title="Emerald theme"
            ></button>
          </div>

          {/* Light/Dark toggle */}
          <button
            className="theme-toggle-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </footer>
      </div>
    </div>
  );
}

export default App;
