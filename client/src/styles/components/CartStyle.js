import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.8rem 0;

  h2 {
    padding: 2rem 0;
    border-bottom: 1px solid black;
    text-align: center;
  }
  h3 {
    text-align: center;
  }
  @media (min-width: 576px) {
    width: 80%;
    margin: 3px auto;
    border: 1px solid black;
  }
  @media (min-width: 992px) {
    width: 60%;
    margin: 3px auto;
    border: 1px solid black;
  }
`;

export const Item = styled.div`
  padding: 18px 0;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;

  img {
    width: 12rem;
  }
`;
export const ItemDetails = styled.div`
  padding: 0 1rem;

  h3 {
    margin-bottom: 10px;
    text-align: left;
  }
`;
export const QuantityContainer = styled.div`
  margin-top: 30px;
  display: inline-flex;
  align-items: center;
  button {
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
  }
`;

export const Summary = styled.div`
  text-align: center;
  div {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    border-bottom: 1px solid black;
  }
  button {
    margin-top: 10px;
    width: 50%;
    padding: 0.7rem;
    cursor: pointer;
    background-color: #212121;
    color: white;
    border: none;
    outline: none;
  }
`;
