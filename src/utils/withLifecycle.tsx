'use client';

import React, { useEffect, useRef } from 'react';

type LifecycleCallbacks = {
  onMount?: () => void | Promise<void>;
  onUnmount?: () => void | Promise<void>;
  onUpdate?: (prevProps: Record<string, unknown>) => void | Promise<void>;
  onHydrate?: () => void | Promise<void>;
};

type WithLifecycleOptions<P = Record<string, unknown>> = LifecycleCallbacks & {
  dependencies?: (keyof P)[];
};

export function withLifecycle<P extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<P>,
  optionsOrFn: WithLifecycleOptions<P> | ((props: P) => WithLifecycleOptions<P>)
) {
  const HOC = (props: P) => {
    const options = typeof optionsOrFn === 'function' ? optionsOrFn(props) : optionsOrFn;
    const {
      onMount: mount,
      onUnmount: unmount,
      onUpdate: update,
      onHydrate: hydrate,
      dependencies: deps = [],
    } = options;

    const prevPropsRef = useRef<P>(props);
    const isMountedRef = useRef(false);

    // 👇 Compute actual dependency values
    // const dependencyValues = deps.map((key) => props[key]);

    useEffect(() => {
      if (!isMountedRef.current) {
        // Initial hydration
        isMountedRef.current = true;
        hydrate?.();
        mount?.();
      } else {
        // Prop update check
        if (update) {
          const hasChanged = deps.some((key) => prevPropsRef.current[key] !== props[key]);
          if (hasChanged) update(prevPropsRef.current);
        }
      }

      prevPropsRef.current = props;
    }, [mount, deps, props, update, hydrate]);

    useEffect(() => {
      return () => {
        unmount?.();
      };
    }, [unmount]);

    return <WrappedComponent {...props} />;
  };

  HOC.displayName = `WithLifecycle(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return HOC;
}
