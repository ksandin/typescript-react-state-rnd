export const reaction = <
  TSelector extends (...args: any) => TSelection,
  TSelection
>(
  select: TSelector,
  handleChange: (newSelection: TSelection) => void,
  equalsFn: (a: TSelection, b: TSelection) => boolean = refEq
) => {
  let prevSelection: TSelection;
  let isFirstSelection = true;
  return (...args: Parameters<TSelector>) => {
    const newSelection = select(...args);
    if (isFirstSelection || !equalsFn(newSelection, prevSelection)) {
      handleChange(newSelection);
      prevSelection = newSelection;
      isFirstSelection = false;
    }
  };
};

const refEq = <T>(a: T, b: T) => a === b;
