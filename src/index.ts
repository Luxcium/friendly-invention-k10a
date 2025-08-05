/**
 * Entry point for friendly-invention-k10a TypeScript library
 *
 * This is where we begin building our unique TypeScript/Node.js application.
 * The project is initialized with modern tooling and ready for customization.
 */

// Core exports
export { default as App } from './app';

// Type exports
export type * from './types';

// Main function for demonstration
export function greet(name: string): string {
    return `Hello, ${name}! Welcome to friendly-invention-k10a.`;
}

// Version export
export const VERSION = '1.0.0';
