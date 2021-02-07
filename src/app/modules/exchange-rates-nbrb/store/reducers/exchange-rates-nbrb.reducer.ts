
import { ExchangeRatesNbrbActions, ExchangeRatesNbrbActionTypes } from '../actions/exchange-rates-nbrb.actions';

export const exchangeRatesNbrbFeatureKey = 'exchangeRatesNbrb';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: ExchangeRatesNbrbActions): State {
  switch (action.type) {

    case ExchangeRatesNbrbActionTypes.LoadExchangeRatesNbrbs:
      return state;

    default:
      return state;
  }
}
