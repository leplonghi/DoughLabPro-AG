/**
 * Weather Service
 * Fetches current weather data for a given location
 * Uses Open-Meteo API (free, no API key required)
 */

import { GeolocationCoordinates, WeatherData, WeatherConditions, LocationData } from './types';
import i18n from '@/i18n';
const t = i18n.t.bind(i18n);


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
            throw new Error(t('weather.weather_api_request_failed_0'));
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
        0: t('weather.clear_sky_1'),
        1: t('weather.mainly_clear_2'),
        2: t('weather.partly_cloudy_3'),
        3: t('weather.overcast_4'),
        45: t('weather.foggy_5'),
        48: t('weather.depositing_rime_fog_6'),
        51: t('weather.light_drizzle_7'),
        53: t('weather.moderate_drizzle_8'),
        55: t('weather.dense_drizzle_9'),
        61: t('weather.slight_rain_10'),
        63: t('weather.moderate_rain_11'),
        65: t('weather.heavy_rain_12'),
        71: t('weather.slight_snow_13'),
        73: t('weather.moderate_snow_14'),
        75: t('weather.heavy_snow_15'),
        77: t('weather.snow_grains_16'),
        80: t('weather.slight_rain_showers_17'),
        81: t('weather.moderate_rain_showers_18'),
        82: t('weather.violent_rain_showers_19'),
        85: t('weather.slight_snow_showers_20'),
        86: t('weather.heavy_snow_showers_21'),
        95: t('weather.thunderstorm_22'),
        96: t('weather.thunderstorm_with_slight_hail_23'),
        99: t('weather.thunderstorm_with_heavy_hail_24'),
    };

    return weatherCodes[code] || t('weather.unknown_25');
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
