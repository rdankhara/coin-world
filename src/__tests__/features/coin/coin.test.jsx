import React from 'react';
import { render, screen } from '@testing-library/react';
import {CoinView} from "../../../features/coin/coin";

describe('Coin Component', () => {
   it('creates component', () => {
       render(<CoinView />)
       const symbolSelector = screen.getByRole('select-coin-symbol');
       expect(symbolSelector).toBeInTheDocument();
   });

   //Todo place other tests injecting fake props and verify behaviour
});