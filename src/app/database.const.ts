import { InjectionToken } from '@angular/core';

export const DB_VERSION = new InjectionToken<number>('DB_TOKEN');
export const DB_NAME = new InjectionToken<string>('DB_NAME');