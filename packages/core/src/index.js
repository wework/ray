import './global/js/polyfills';
import './global/js/accessibility';
import boot from './global/js/boot';

boot();

export * from './components';
export { default as settings } from './global/js/settings';
