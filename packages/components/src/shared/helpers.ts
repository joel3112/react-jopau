export const cleanedProps = <P extends object>(props: P) => {
  const newProps = { ...props };
  (Object.keys(props) as Array<keyof P>).forEach((key) => {
    if (newProps[key] === undefined) {
      delete newProps[key];
    }
  });
  return newProps as P;
};

export const computedFlexPosition = (key: string): string => {
  return ({
    start: 'flex-start',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly'
  }[key] || key) as never;
};
