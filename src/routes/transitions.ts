export const transitions = {
  initial: (diff: number) => {
    if (diff < 0) {
      return { x: 0 };
    }

    if (diff === 0) {
      return { opacity: 0 };
    }

    return { x: '100%' };
  },
  animate: (diff: number) => {
    if (diff === 0) {
      return { opacity: 1 };
    }

    return { x: 0 };
  },
  // Value of this function parameter comes from the Router AnimatePresence custom prop
  exit: (diff: number) => {
    console.log('diff', diff);
    if (diff < 0) {
      return { x: '100%' };
    }

    if (diff === 0) {
      return { opacity: 0 };
    }

    return { x: 0 };
  }
};
