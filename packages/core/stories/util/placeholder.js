const images = {
  '3x4': '/images/image_3x4.jpg',
  '4x3': '/images/image_4x3.jpg',
  '16x9': '/images/image_16x9.jpg'
};

const DEFAULT_RATIO = '4x3';

export default function getPlaceholderURL(dimensions = DEFAULT_RATIO) {
  return images[dimensions] || images[DEFAULT_RATIO];
}
