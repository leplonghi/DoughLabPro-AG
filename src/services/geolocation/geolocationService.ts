/**
 * Geolocation Service
 * Handles browser geolocation API to detect user's position
 */

import { GeolocationCoordinates, GeolocationError, LocationData } from './types';

const GEOLOCATION_TIMEOUT = 10000; // 10 seconds
const GEOLOCATION_MAX_AGE = 300000; // 5 minutes

/**
 * Gets the user's current position using the browser's Geolocation API
 */
export async function getCurrentPosition(): Promise<GeolocationCoordinates> {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(GeolocationError.UNSUPPORTED);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                });
            },
            (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        reject(GeolocationError.PERMISSION_DENIED);
                        break;
                    case error.POSITION_UNAVAILABLE:
                        reject(GeolocationError.POSITION_UNAVAILABLE);
                        break;
                    case error.TIMEOUT:
                        reject(GeolocationError.TIMEOUT);
                        break;
                    default:
                        reject(GeolocationError.POSITION_UNAVAILABLE);
                }
            },
            {
                enableHighAccuracy: false,
                timeout: GEOLOCATION_TIMEOUT,
                maximumAge: GEOLOCATION_MAX_AGE,
            }
        );
    });
}

/**
 * Gets location details (city, country) from coordinates using reverse geocoding
 * Uses OpenStreetMap's Nominatim API (free, no API key required)
 */
export async function reverseGeocode(
    coordinates: GeolocationCoordinates
): Promise<LocationData> {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?` +
            `lat=${coordinates.latitude}&` +
            `lon=${coordinates.longitude}&` +
            `format=json&` +
            `accept-language=en`,
            {
                headers: {
                    'User-Agent': 'DoughLabPro/1.0',
                },
            }
        );

        if (!response.ok) {
            throw new Error('Reverse geocoding failed');
        }

        const data = await response.json();

        return {
            coordinates,
            city: data.address?.city || data.address?.town || data.address?.village,
            country: data.address?.country,
            region: data.address?.state || data.address?.region,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };
    } catch (error) {
        // Return basic location data even if reverse geocoding fails
        return {
            coordinates,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        };
    }
}

/**
 * Gets complete location data including coordinates and address
 */
export async function getLocationData(): Promise<LocationData> {
    const coordinates = await getCurrentPosition();
    return await reverseGeocode(coordinates);
}
