import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom'
import store from '../../redux/configureStore';
import Navbar from '../../components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

test('Navbar Items', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
  const linkElement = screen.getByText(/COVID/i);
  expect(linkElement).toBeInTheDocument();
});


test('Navbar Tree', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});