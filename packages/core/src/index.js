import './global/js/polyfills';
import boot from './global/js/boot';
import settingsObj from './global/js/settings';

boot();

export * from './components';
export const settings = settingsObj;
