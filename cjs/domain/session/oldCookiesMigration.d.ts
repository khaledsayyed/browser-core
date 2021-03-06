import { CookieOptions } from '../../browser/cookie';
export declare const OLD_SESSION_COOKIE_NAME = "_dd";
export declare const OLD_RUM_COOKIE_NAME = "_dd_r";
export declare const OLD_LOGS_COOKIE_NAME = "_dd_l";
export declare const RUM_SESSION_KEY = "rum";
export declare const LOGS_SESSION_KEY = "logs";
/**
 * This migration should remain in the codebase as long as older versions are available/live
 * to allow older sdk versions to be upgraded to newer versions without compatibility issues.
 */
export declare function tryOldCookiesMigration(options: CookieOptions): void;
