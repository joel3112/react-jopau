import { useMemo, useState } from 'react';
import { classes } from '@react-jopau/utils';
import { prefixClass, withDefaults } from '@/components/shared';
import { defaultProps, InputPasswordProps } from './input-password.props';
import { Input } from '../input';

/**
 * Input component is a component that is used to get user password input in a text field.
 *
 * @param   {InputPasswordProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Input } from '@react-jopau/components';
 * @example
 * <Input.Password label="Password" placeholder="Your password" />
 */
export const InputPassword = withDefaults<InputPasswordProps>((props: InputPasswordProps) => {
  const { hideToggle, visibleIcon, hiddenIcon, ...inputProps } = props;

  const [visible, setVisible] = useState<boolean>(false);

  const icon = useMemo(() => {
    if (hideToggle) return false;

    return visible ? visibleIcon : hiddenIcon;
  }, [hideToggle, visible, visibleIcon, hiddenIcon]);

  return (
    <Input
      {...inputProps}
      className={classes(prefixClass + '-input-password', props.className)}
      type={visible ? 'text' : 'password'}
      icon={icon}
      iconPosition="right"
      onIconClick={() => setVisible((v) => !v)}
    />
  );
}, defaultProps);
