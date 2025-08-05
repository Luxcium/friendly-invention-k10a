/**
 * Test suite for friendly-invention-k10a
 *
 * Comprehensive tests for the core application functionality.
 */

import App from '../app';
import { greet, VERSION } from '../index';
import type { AppConfig } from '../types';

describe('Core Functionality', () => {
    describe('greet function', () => {
        it('should return a greeting message', () => {
            const result = greet('World');
            expect(result).toBe('Hello, World! Welcome to friendly-invention-k10a.');
        });

        it('should handle different names correctly', () => {
            const result = greet('TypeScript');
            expect(result).toBe('Hello, TypeScript! Welcome to friendly-invention-k10a.');
        });
    });

    describe('VERSION constant', () => {
        it('should export the correct version', () => {
            expect(VERSION).toBe('1.0.0');
        });
    });
});

describe('App class', () => {
    let app: App;

    beforeEach(() => {
        app = new App();
    });

    afterEach(async () => {
        if (app.getStatus().initialized) {
            await app.shutdown();
        }
    });

    describe('constructor', () => {
        it('should create app with default config', () => {
            const config = app.getConfig();
            expect(config.debug).toBe(false);
            expect(config.environment).toBe('development');
        });

        it('should create app with custom config', () => {
            const customConfig: AppConfig = {
                debug: true,
                environment: 'test',
                name: 'test-app',
            };

            const customApp = new App(customConfig);
            const config = customApp.getConfig();

            expect(config.debug).toBe(true);
            expect(config.environment).toBe('test');
            expect(config.name).toBe('test-app');
        });
    });

    describe('initialization', () => {
        it('should initialize successfully', async () => {
            await app.initialize();
            const status = app.getStatus();

            expect(status.initialized).toBe(true);
            expect(status.startTime).toBeInstanceOf(Date);
        });

        it('should throw error if already initialized', async () => {
            await app.initialize();
            await expect(app.initialize()).rejects.toThrow('Application is already initialized');
        });
    });

    describe('shutdown', () => {
        it('should shutdown successfully after initialization', async () => {
            await app.initialize();
            await app.shutdown();

            const status = app.getStatus();
            expect(status.initialized).toBe(false);
            expect(status.startTime).toBeNull();
        });

        it('should throw error if not initialized', async () => {
            await expect(app.shutdown()).rejects.toThrow('Application is not initialized');
        });
    });
});
