export const opt = {
  behavior: 'smooth',
  block: 'start',
};

export const scrollIntoView = (ref, options = opt) => {
  if (ref) {
    ref.current.scrollIntoView(options);
  }
};
