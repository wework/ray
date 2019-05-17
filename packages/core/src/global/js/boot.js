import * as components from '../../components';

export function initializeAllComponents() {
  Object.keys(components).forEach(componentKey => {
    const Component = components[componentKey];

    Component.createAll();
  });
}

export default function boot() {
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
}
