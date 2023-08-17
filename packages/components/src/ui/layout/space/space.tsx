import { useCallback } from 'react';
import { classes } from '@react-jopau/utils';
import { prefixClass, withDefaults } from '@/components/shared';
import { defaultProps, SpaceProps } from './space.props';
import { StyledSpace } from './space.styled';

/**
 * Provide empty space.
 *
 * @param   {SpaceProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Space } from '@react-jopau/components';
 * @example
 * <Space y={1} />
 */
export const Space = withDefaults<SpaceProps>((props: SpaceProps) => {
  const { className, style, as, x, y, inline } = props;

  const getMargin = useCallback(
    (num: number): string => {
      return `calc(${num * 15.25}pt + 1px * ${num - 1})`;
    },
    [x, y]
  );

  return (
    <StyledSpace
      as={as}
      className={classes(prefixClass + '-space', className)}
      css={{
        marginLeft: `${getMargin(x || 1)} !important`,
        marginTop: `${getMargin(y || 1)} !important`,
        ...style
      }}
      inline={!!inline}
    />
  );
}, defaultProps);
