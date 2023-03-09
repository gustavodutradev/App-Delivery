import { render } from '@testing-library/react';
import RegisterPage from '../pages/Register/RegisterPage';

describe('RegisterForm', () => {
  it('should render RegisterForm component', () => {
    const renderForm = render(<RegisterPage />);
    expect(renderForm).toHaveLength(1);
  });
});
