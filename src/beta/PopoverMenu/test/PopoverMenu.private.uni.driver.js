import { PopoverMenuDriver as publicDriverFactory } from '../PopoverMenu.uni.driver';

export const PopoverMenuPrivateDriver = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
