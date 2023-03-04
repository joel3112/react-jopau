export const cleanedProps = <P extends object>(props: P) => {
  const newProps = { ...props };
  (Object.keys(props) as Array<keyof P>).forEach((key) => {
    if (newProps[key] === undefined) {
      delete newProps[key];
    }
  });
  return newProps as P;
};
