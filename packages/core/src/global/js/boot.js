import * as components from '../../components';

function initializeAllComponents() {
  Object.keys(components).forEach(componentKey => {
    const Component = components[componentKey];
    if (Component.createAll) {
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
