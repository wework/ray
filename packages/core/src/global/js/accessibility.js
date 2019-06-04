if (typeof document !== 'undefined') {
  document.addEventListener('mousedown', removeAccessibilityClass);
  document.addEventListener('keydown', addAccessibilityClass);
}

const ACCESSIBILITY_CLASS = 'js-ray-keyboard-nav';

// Let the document know when the mouse is being used,
// so accessibility styling can be removed.
function addAccessibilityClass() {
  document.body.classList.add(ACCESSIBILITY_CLASS);
}

function removeAccessibilityClass() {
  document.body.classList.remove(ACCESSIBILITY_CLASS);
}
