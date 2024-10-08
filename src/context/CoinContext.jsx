import { createContext, useEffect, useState, useCallback } from "react";
import PropTypes from 'prop-types'; 

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    Symbol: "$",
  });

  
  const fetchAllCoin = useCallback(async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-pFZYrAyVgwxZMs6b56wFm55j",
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        options
      );
      const data = await response.json();
      setAllCoin(data);
    } catch (err) {
      console.error(err);
    }
  }, [currency.name]); 

  
  useEffect(() => {
    fetchAllCoin();
  }, [fetchAllCoin]);

  const contextValue = {
    allCoin,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children }
    </CoinContext.Provider>
  );
};


CoinContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CoinContextProvider;
