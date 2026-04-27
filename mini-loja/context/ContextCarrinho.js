import { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  function adicionar(produto) {
    setCarrinho(prev => [...prev, produto]);
  }

  function limparCarrinho() {
    setCarrinho([]);
  }

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionar, limparCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = () => useContext(CarrinhoContext);