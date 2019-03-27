import * as components from '../../components';
import logger from './logger';

function initializeAllComponents() {
  logger.log('booting');

  Object.keys(components).forEach(componentKey => {
    const Component = components[componentKey];
    if (Component.createAll) {
      logger.log(`instantiating ${componentKey}`);
      Component.createAll();
    }
  });
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (
    document.readyState === 'complete' ||
    document.readyState === 'loaded' ||
    document.readyState === 'interactive'
  ) {
    initializeAllComponents();
  } else {
    window.addEventListener('DOMContentLoaded', initializeAllComponents);
  }
}
