function attachAccessibilityEvents() {
  if (typeof document !== 'undefined') {
    const ENABLE_ACCESSIBILITY_CLASS = 'js-ray-enable-accessibility';

    document.addEventListener('keydown', function addAccessibilityClass() {
      document.body.classList.add(ENABLE_ACCESSIBILITY_CLASS);
    });

    document.addEventListener('mousedown', function removeAccessibilityClass() {
      document.body.classList.remove(ENABLE_ACCESSIBILITY_CLASS);
    });
  }
}

export default attachAccessibilityEvents;
