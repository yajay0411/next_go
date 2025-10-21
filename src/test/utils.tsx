import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import Provider from '@/core/Provider/Provider';

// Custom render function if you need to wrap components with providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
