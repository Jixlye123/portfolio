import { render, screen, fireEvent } from '@testing-library/react';
import { NavBar } from './NavBar';
import '@testing-library/jest-dom';

// Mock images
jest.mock('../assets/img/nav-icon1.svg', () => 'nav-icon1.svg');
jest.mock('../assets/img/nav-icon2.svg', () => 'nav-icon2.svg');
jest.mock('../assets/img/nav-icon3.svg', () => 'nav-icon3.svg');
jest.mock('../assets/img/logo1.png', () => 'logo1.png');

describe("NavBar Component", () => {
  test('renders logo and navigation links', () => {
    render(<NavBar />);

    // Logo
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();

    // Nav Links
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/skills/i)).toBeInTheDocument();
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
  });

  test('activates nav link on click', () => {
    render(<NavBar />);
    
    const skillsLink = screen.getByText(/skills/i);
    fireEvent.click(skillsLink);
    expect(skillsLink).toHaveClass('active navbar-link');
  });

  test('renders social icons and connect button', () => {
    render(<NavBar />);
    
    const socialIcons = screen.getAllByRole('link');
    expect(socialIcons.length).toBeGreaterThanOrEqual(3); // logo + 3 icons

    const connectBtn = screen.getByText(/let’s connect/i);
    expect(connectBtn).toBeInTheDocument();
  });
});
