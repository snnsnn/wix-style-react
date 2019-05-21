const install = () => {
  if (!window.matchMedia) {
    window.matchMedia = function() {
      return {
        matches: false,
        addListener: function() {},
        removeListener: function() {},
      };
    };
  }
  global.matchMedia = global.matchMedia || window.matchMedia;
};

const uninstall = () => {
  delete global.matchMedia;
};

export default { install, uninstall };
