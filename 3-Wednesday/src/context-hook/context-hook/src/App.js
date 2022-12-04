import React from 'react';
import { CurrencyContext } from './currency-context';

const DATA = [
  {
    id: '1',
    title: 'The Road to React',
    price: 19.99,
  },
  {
    id: '2',
    title: 'The Road to GraphQL',
    price: 29.99,
  },
  {
    id: '3',
    title: 'islam dreams',
    price: 1000.99,
  },
];


const Book = ({ item }) => {
    return (
      <CurrencyContext.Consumer>
        {(currency) => (
          <li>
            {item.title} - {item.price} {currency}
          </li>
        )}
      </CurrencyContext.Consumer>
    );
  };

const Books = ({ list }) => {
    return (
      <ul>
        {list.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </ul>
    );
  };

const App = () => {
    return (
      <div>
    <CurrencyContext.Provider value="€">
      <Books list={DATA} />
    </CurrencyContext.Provider>
      </div>
    );
  };

export default App;