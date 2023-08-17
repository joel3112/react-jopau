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
  ForwardRefExoticComponent,
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

export const withDefaults = <P, DP extends object = object>(
  Component: ComponentType<P>,
  defaultProps: DP
) => {
  Component.defaultProps = defaultProps;

  return Component as ForwardRefExoticComponent<P>;
};

export const withCompoundComponents = <P, CC extends object, DP extends object = object>(
  Component: ComponentType<P>,
  defaultProps: DP,
  compoundComponents: CC
) => {
  Component.defaultProps = defaultProps;
  Component.displayName = Component.displayName;
  Object.entries(compoundComponents).forEach(([key, value]) => {
    (Component as any)[key] = value;
  });

  return Component as ForwardRefExoticComponent<P> & CC;
};

export const isForwardRef = (Component: any) => Component.$$typeof === ReactIs.ForwardRef;
