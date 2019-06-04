import './global/js/polyfills';
import setupAccessibility from './global/js/accessibility';
import boot from './global/js/boot';

boot();
setupAccessibility();

export * from './components';
export { default as settings } from './global/js/settings';
