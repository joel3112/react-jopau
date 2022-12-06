import { ReactNode } from 'react';
import { classes } from '../../../utils/system';
import type { ElementHTML } from '../../../../types';
import { Heading } from '../../typography';
import { HeaderContainer, HeaderLogo, HeaderWrapper } from './header.styled';

type HeaderProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children?: ReactNode;
  /**
   * Title of the header.
   */
  title?: string;
  /**
   * Defines the render of the logo.
   */
  logo?: ReactNode;
  /**
   * Maximum width of the container or breakpoint.
   */
  maxWidth?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
} & Partial<typeof defaultProps>;

const defaultProps = {};

/**
 * Header component with logo, title and actions area.
 *
 * @param   {HeaderProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Header } from '@react-jopau/components/ui/layout';
 * @example
 * <Header title="Title" logo={() => <img src="./images/logo.png" alt="Logo" />}>
 *    <div>Action 1</div>
 * </Header>
 */
export const Header = ({ className, style, children, logo, title, maxWidth }: HeaderProps) => {
  return (
    <HeaderWrapper
      className={classes('header-wrapper', className)}
      css={{
        ...style
      }}>
      <HeaderContainer maxWidth={maxWidth} centered>
        <HeaderLogo direction="row" align="center" gap={8}>
          {logo}
          {title && <Heading variant="h4">{title}</Heading>}
        </HeaderLogo>

        {children}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

Header.defaultProps = defaultProps;
