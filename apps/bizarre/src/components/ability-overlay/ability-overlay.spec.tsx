import { render } from '@testing-library/react';

import Index from './index';

describe('AbilityOverlay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
});
