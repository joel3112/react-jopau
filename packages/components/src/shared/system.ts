/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Part of this code is taken from @nextui-org/react
 * https://github.com/nextui-org/nextui/blob/main/packages/react/src/utils/system.ts
 */
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  forwardRef as baseForwardRef,
  ForwardRefRenderFunction,
  ValidationMap,
  WeakValidationMap
} from 'react';
import * as ReactIs from 'react-is';

type As<Props = any> = ElementType<Props>;

type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<
  Target,
  OmitAdditionalProps
>;

type RightJoinProps<
  SourceProps extends object = {},
  OverrideProps extends object = {}
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = {}
> = RightJoinProps<ComponentProps, AdditionalProps> & RightJoinProps<AsProps, AdditionalProps>;

type ComponentWithAs<Component extends As, Props extends object = {}> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<ComponentProps<Component>, ComponentProps<AsComponent>, Props>
  ): JSX.Element;

  displayName?: string;
  propTypes?: WeakValidationMap<any>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<any>;
  id?: string;
};

type PropsOf<T extends As> = ComponentPropsWithoutRef<T>;

export const forwardRef = <Props extends object, Component extends As>(
  component: ForwardRefRenderFunction<any, RightJoinProps<PropsOf<Component>, Props>>
) => {
  return baseForwardRef(component) as unknown as ComponentWithAs<Component, Props>;
};

export const withDefaults = <P, DP>(component: ComponentType<P>, defaultProps: DP) => {
  type Props = Partial<DP> & Omit<P, keyof DP>;
  (component as any).defaultProps = defaultProps;

  return component as ComponentType<Props>;
};

export const cleanedProps = <P extends object>(props: P) => {
  const newProps = { ...props };
  (Object.keys(props) as Array<keyof P>).forEach((key) => {
    if (newProps[key] === undefined) {
      delete newProps[key];
    }
  });
  return newProps as P;
};

export const isForwardRef = (Component: any) => Component.$$typeof === ReactIs.ForwardRef;
