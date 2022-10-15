import { CSSProperties, ReactNode } from 'react';
import { UrlObject } from 'url';

declare global {
  type ElementHTML = {
    className?: string;
    style?: CSSProperties;
  };

  type ElementChildren<T = ReactNode> = {
    children?: T;
  };

  type ElementSkeleton = {
    skeleton?: boolean;
  };

  type ElementLink = {
    href?: string | UrlObject;
  };
}
