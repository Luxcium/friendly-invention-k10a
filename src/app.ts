/**
 * Main application class for friendly-invention-k10a
 *
 * This class serves as the primary entry point for our application logic.
 * It demonstrates TypeScript patterns and provides a foundation for expansion.
 */

import type { AppConfig, AppState } from '@/types';

export default class App {
    private config: AppConfig;
    private state: AppState;

    constructor(config: AppConfig = {}) {
        this.config = {
            debug: false,
            environment: 'development',
            ...config,
        };

        this.state = {
            initialized: false,
            startTime: null,
        };
    }

    /**
     * Initialize the application
     */
    public async initialize(): Promise<void> {
        if (this.state.initialized) {
            throw new Error('Application is already initialized');
        }

        this.state.startTime = new Date();
        this.state.initialized = true;

        if (this.config.debug) {
            console.log(`App initialized at ${this.state.startTime.toISOString()}`);
        }
    }

    /**
     * Get application status
     */
    public getStatus(): AppState {
        return { ...this.state };
    }

    /**
     * Get application configuration
     */
    public getConfig(): AppConfig {
        return { ...this.config };
    }

    /**
     * Shutdown the application
     */
    public async shutdown(): Promise<void> {
        if (!this.state.initialized) {
            throw new Error('Application is not initialized');
        }

        this.state.initialized = false;
        this.state.startTime = null;

        if (this.config.debug) {
            console.log('App shutting down');
        }
    }
}
