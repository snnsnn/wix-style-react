export const carouselDriverFactory = ({ element }) => {
  return {
    exists: () => !!element,
    isLoading: () => {
      const loader = element.querySelector('[data-hook="loader"]');
      return !!loader;
    },
    getChildren: () => {
      // react-slick duplicates the children, so we ditch the cloned nodes
      return element.querySelectorAll('.slick-slide:not(.slick-cloned)');
    },
    getImages: () => {
      // Converting the result from NodeList to a real array
      return [...element.querySelectorAll('[data-hook="carousel-img"]')].map(
        img => img.src,
      );
    },
  };
};
