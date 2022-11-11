import { ReactNode } from 'react';
import classes from 'classnames';
import { ElementHTML } from '../../../../types';
import { Container, Space } from '../../layout';
import { HeaderWrapper } from './header.styled';

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
  renderLogo?: () => ReactNode;
  /**
   * Maximum width of the container or breakpoint.
   */
  maxWidth?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
} & typeof defaultProps;

const defaultProps = {};

/**
 * Header component with logo, title and actions area.
 *
 * @param   {HeaderProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Header } from '@react-jopau/components/ui/layout';
 * @example
 * <Header title="Title" renderLogo={() => <img src="./images/logo.png" alt="Logo" />}>
 *    <div>Action 1</div>
 * </Header>
 */
export const Header = ({
  className,
  style,
  children,
  title,
  maxWidth,
  renderLogo
}: HeaderProps) => {
  return (
    <HeaderWrapper
      className={classes('header-wrapper', className)}
      css={{
        ...style
      }}>
      <Container maxWidth={maxWidth} centered className="container">
        <div className="logo">
          {renderLogo && renderLogo()}
          {title && <h1 className="title">{title}</h1>}
        </div>

        {children && (
          <Space className="actions" gap={10}>
            {children}
          </Space>
        )}
      </Container>
    </HeaderWrapper>
  );
};

Header.defaultProps = defaultProps;
