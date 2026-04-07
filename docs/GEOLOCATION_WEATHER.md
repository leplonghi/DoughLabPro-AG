# Geolocation & Weather Integration

## Overview

DoughLabPro now includes automatic location detection and weather-based temperature adjustment for dough calculations. This feature helps users get more accurate fermentation predictions by using their actual ambient temperature.

## Features

### 1. Automatic Location Detection
- Uses browser's Geolocation API
- No API keys required
- Privacy-focused (user must grant permission)

### 2. Weather Data Retrieval
- Fetches current temperature from Open-Meteo API (free, no key required)
- Includes additional weather data (humidity, wind, pressure)
- Provides weather descriptions and icons

### 3. Smart Caching
- Caches weather data for 30 minutes
- Reduces API calls
- Improves performance

### 4. Temperature Category Mapping
- Automatically maps detected temperature to ambient categories:
  - **COLD**: < 18°C
  - **MILD**: 18-26°C
  - **HOT**: > 26°C

## Components

### `WeatherWidget`
Full-featured weather display component with:
- Current temperature and location
- Weather conditions and icon
- Additional metrics (humidity, wind, pressure)
- Dough-specific tips based on temperature
- Auto-refresh capability

**Usage:**
```tsx
import { WeatherWidget } from '@/components/weather';

<WeatherWidget 
  onTemperatureDetected={(temp) => console.log(temp)}
  compact={false}
/>
```

### `TemperatureDetector`
Compact button for quick temperature detection:
- One-click detection
- Success/error tooltips
- Loading states
- Minimal UI footprint

**Usage:**
```tsx
import { TemperatureDetector } from '@/components/weather';

<TemperatureDetector 
  onTemperatureDetected={(temp) => setTemperature(temp)}
/>
```

## Hooks

### `useGeolocation(autoFetch?: boolean)`
Main hook for location and weather data:

```tsx
const { 
  weather,        // Current weather conditions
  location,       // User location data
  loading,        // Loading state
  error,          // Error state
  fetchWeather,   // Manual fetch function
  refresh,        // Force refresh (clears cache)
  reset,          // Reset state
  isStale,        // Is cache stale?
  lastUpdated     // Last update timestamp
} = useGeolocation(true); // autoFetch on mount
```

### `useCurrentTemperature(autoFetch?: boolean)`
Simplified hook for temperature only:

```tsx
const { 
  temperature,    // Current temperature in Celsius
  loading,
  error,
  fetchWeather
} = useCurrentTemperature();
```

## Services

### Geolocation Service
- `getCurrentPosition()`: Get user coordinates
- `reverseGeocode(coords)`: Convert coordinates to address
- `getLocationData()`: Get complete location info

### Weather Service
- `getCurrentWeather(coords)`: Fetch weather data
- `getWeatherConditions(location)`: Get complete weather info
- `getAmbientTemperatureCategory(temp)`: Map temp to category

## Integration

The feature is integrated into the calculator's Environment Section:

1. User clicks "Auto-detect Temperature"
2. Browser requests location permission
3. System fetches weather data
4. Temperature is automatically set
5. Yeast adjustments are applied based on temperature

## Privacy & Permissions

- Location permission is requested only when user clicks the button
- No location data is stored or transmitted to our servers
- Weather data is fetched from public APIs
- All data is cached locally in browser storage

## Error Handling

The system handles various error scenarios:
- Permission denied
- Location unavailable
- Network errors
- API failures

Each error shows a user-friendly message with guidance.

## Browser Compatibility

- Requires browser with Geolocation API support
- Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- Gracefully degrades if geolocation is unavailable

## Future Enhancements

Potential improvements:
- Historical weather data for fermentation planning
- Weather-based recipe suggestions
- Seasonal ingredient recommendations
- Climate-specific dough adjustments
