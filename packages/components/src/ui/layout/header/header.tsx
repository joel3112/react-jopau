import { classes } from '@react-jopau/utils';
import { prefixClass } from '@/components/shared';
import { Heading } from '../../typography';
import { defaultProps, HeaderProps } from './header-props';
import { StyledHeaderContent, StyledHeaderLogo, StyledHeader } from './header.styled';

/**
 * Header component with logo, title and actions area.
 *
 * @param   {HeaderProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Header } from '@react-jopau/components';
 * @example
 * <Header title="Title" logo={() => <img src="./images/logo.png" alt="Logo" />}>
 *    <div>Action 1</div>
 * </Header>
 */
export const Header = ({ className, style, children, logo, title, maxWidth }: HeaderProps) => {
  return (
    <StyledHeader
      className={classes(prefixClass + '-header', className)}
      css={{
        ...style
      }}>
      <StyledHeaderContent maxWidth={maxWidth} centered>
        <StyledHeaderLogo>
          {logo}
          {title && <Heading as="h4">{title}</Heading>}
        </StyledHeaderLogo>

        {children}
      </StyledHeaderContent>
    </StyledHeader>
  );
};

Header.defaultProps = defaultProps;
