import './global/js/polyfills';
import attachAccessibilityEvents from './global/js/accessibility';
import boot from './global/js/boot';

boot();
attachAccessibilityEvents();

export * from './components';
export { default as settings } from './global/js/settings';
