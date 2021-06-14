import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
    test('tests button style', () => {
        render(<Button btnType="Danger" disabled={true}>Danger</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
        expect(screen.getByRole('button')).toHaveClass('Danger');
    });
});
