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
import classnames from 'classnames';

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
  AdditionalProps extends object = {},
  AsComponent extends As = As
> = RightJoinProps<ComponentProps, AdditionalProps> &
  RightJoinProps<AsProps, AdditionalProps> & {
    // as?: AsComponent;
  };
type ComponentWithAs<Component extends As, Props extends object = {}> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<ComponentProps<Component>, ComponentProps<AsComponent>, Props, AsComponent>
  ): JSX.Element;

  displayName?: string;
  propTypes?: WeakValidationMap<any>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<any>;
  id?: string;
};
/**
 * Extract the props of a React element or component
 */
type PropsOf<T extends As> = ComponentPropsWithoutRef<T> & {
  // Define custom global props
  // as?: As;
};

/**
 *
 * @param component
 */
export function forwardRef<Props extends object, Component extends As>(
  component: ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      // as?: As;
    }
  >
) {
  return baseForwardRef(component) as unknown as ComponentWithAs<Component, Props>;
}

export const withDefaults = <P, DP>(component: ComponentType<P>, defaultProps: DP) => {
  type Props = Partial<DP> & Omit<P, keyof DP>;
  (component as any).defaultProps = defaultProps;

  return component as ComponentType<Props>;
};

export const classes = classnames;
