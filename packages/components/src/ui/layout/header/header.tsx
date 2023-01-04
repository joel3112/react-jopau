import { classes } from '@react-jopau/shared/utils';
import { Heading } from '../../typography';
import { defaultProps, HeaderProps } from './header-props';
import { StyledHeaderContent, StyledHeaderLogo, StyledHeader } from './header.styled';

/**
 * Header component with logo, title and actions area.
 *
 * @param   {HeaderProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Header } from '@react-jopau/components/ui';
 * @example
 * <Header title="Title" logo={() => <img src="./images/logo.png" alt="Logo" />}>
 *    <div>Action 1</div>
 * </Header>
 */
export const Header = ({ className, style, children, logo, title, maxWidth }: HeaderProps) => {
  return (
    <StyledHeader
      className={classes('header', className)}
      css={{
        ...style
      }}>
      <StyledHeaderContent maxWidth={maxWidth} centered>
        <StyledHeaderLogo direction="row" align="center" gap={8}>
          {logo}
          {title && <Heading as="h4">{title}</Heading>}
        </StyledHeaderLogo>

        {children}
      </StyledHeaderContent>
    </StyledHeader>
  );
};

Header.defaultProps = defaultProps;
