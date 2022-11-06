import { ReactNode } from 'react';
import classes from 'classnames';
import { ElementHTML } from '../../types';
import { HeaderWrapper } from './header.styled';
import { Container } from '../container';
import { Space } from '../space';

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
   * Defines the logo href of the header.
   */
  href?: string;
} & typeof defaultProps;

const defaultProps = {
  href: '/'
};

/**
 * Header component with logo, title and actions area.
 */
export const Header = ({ className, style, children, title, renderLogo, href }: HeaderProps) => {
  return (
    <HeaderWrapper
      className={classes('header-wrapper', className)}
      css={{
        ...style
      }}>
      <Container className="container">
        <a className="link" href={href}>
          {renderLogo && renderLogo()}
          {title && <h1 className="title">{title}</h1>}
        </a>

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
