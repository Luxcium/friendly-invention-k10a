/**
 * Core type definitions for friendly-invention-k10a
 *
 * This file exports all types used throughout the application.
 */

/**
 * Application configuration interface
 */
export interface AppConfig {
    debug?: boolean;
    environment?: 'development' | 'production' | 'test';
    name?: string;
    version?: string;
}

/**
 * Application state interface
 */
export interface AppState {
    initialized: boolean;
    startTime: Date | null;
    errors?: Error[];
}

/**
 * Common result type for operations that can succeed or fail
 */
export type Result<T, E = Error> =
    | { success: true; data: T }
    | { success: false; error: E };

/**
 * Utility type for making all properties optional recursively
 */
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Utility type for making specific properties required
 */
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Event handler type
 */
export type EventHandler<T = unknown> = (event: T) => void | Promise<void>;
