import React from 'react';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import NotFound from '../containers/NotFound';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialstate from '../hooks/useInitialSatate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const initialState = useInitialstate();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/checkout" element={<Checkout />} />{' '}
            <Route
              exact
              path="/checkout/information"
              element={<Information />}
            />{' '}
            <Route exact path="/checkout/payment" element={<Payment />} />
            <Route exact path="/checkout/success" element={<Success />} />{' '}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
