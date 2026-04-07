/**
 * Weather Service
 * Fetches current weather data for a given location
 * Uses Open-Meteo API (free, no API key required)
 */

import { GeolocationCoordinates, WeatherData, WeatherConditions, LocationData } from './types';

/**
 * Fetches current weather data from Open-Meteo API
 * https://open-meteo.com/
 */
export async function getCurrentWeather(
    coordinates: GeolocationCoordinates
): Promise<WeatherData> {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?` +
            `latitude=${coordinates.latitude}&` +
            `longitude=${coordinates.longitude}&` +
            `current=temperature_2m,relative_humidity_2m,apparent_temperature,` +
            `weather_code,wind_speed_10m,surface_pressure&` +
            `timezone=auto`
        );

        if (!response.ok) {
            throw new Error('Weather API request failed');
        }

        const data = await response.json();
        const current = data.current;

        return {
            temperature: Math.round(current.temperature_2m * 10) / 10,
            feelsLike: Math.round(current.apparent_temperature * 10) / 10,
            humidity: current.relative_humidity_2m,
            description: getWeatherDescription(current.weather_code),
            icon: getWeatherIcon(current.weather_code),
            windSpeed: current.wind_speed_10m,
            pressure: current.surface_pressure,
            timestamp: Date.now(),
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

/**
 * Gets complete weather conditions including location data
 */
export async function getWeatherConditions(
    location: LocationData
): Promise<WeatherConditions> {
    const weather = await getCurrentWeather(location.coordinates);

    return {
        current: weather,
        location,
    };
}

/**
 * Maps WMO Weather codes to human-readable descriptions
 * https://open-meteo.com/en/docs
 */
function getWeatherDescription(code: number): string {
    const weatherCodes: Record<number, string> = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Foggy',
        48: 'Depositing rime fog',
        51: 'Light drizzle',
        53: 'Moderate drizzle',
        55: 'Dense drizzle',
        61: 'Slight rain',
        63: 'Moderate rain',
        65: 'Heavy rain',
        71: 'Slight snow',
        73: 'Moderate snow',
        75: 'Heavy snow',
        77: 'Snow grains',
        80: 'Slight rain showers',
        81: 'Moderate rain showers',
        82: 'Violent rain showers',
        85: 'Slight snow showers',
        86: 'Heavy snow showers',
        95: 'Thunderstorm',
        96: 'Thunderstorm with slight hail',
        99: 'Thunderstorm with heavy hail',
    };

    return weatherCodes[code] || 'Unknown';
}

/**
 * Maps WMO Weather codes to icon identifiers
 */
function getWeatherIcon(code: number): string {
    if (code === 0) return '☀️';
    if (code <= 3) return '⛅';
    if (code <= 48) return '🌫️';
    if (code <= 55) return '🌦️';
    if (code <= 65) return '🌧️';
    if (code <= 77) return '🌨️';
    if (code <= 82) return '⛈️';
    if (code <= 86) return '❄️';
    if (code >= 95) return '⚡';
    return '🌡️';
}

/**
 * Determines ambient temperature category based on current temperature
 */
export function getAmbientTemperatureCategory(tempCelsius: number): 'COLD' | 'MILD' | 'HOT' {
    if (tempCelsius < 18) return 'COLD';
    if (tempCelsius > 26) return 'HOT';
    return 'MILD';
}
