import styled from 'styled-components';

export const TableTransaction = styled.table`
  background-color: #fff;
  width: 600px;
  text-align: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 50px;
  padding: 20px;
  table-layout: fixed;
`;

export const THeadTransaction = styled.thead`
  background-color: #0099cc;
  color: white;
  font-size: 20px;
`;

export const TBodyTransaction = styled.tbody`
  background-color: aqua;
  th,
  td {
    text-align: center;
    padding: 10px;
  }
`;
export const RawOfTransaction = styled.tr`
  color: #696969;
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 16px;
  padding: 10px;
  &:nth-child(odd) {
    background-color: white;
  }

  &:nth-child(even) {
    background-color: #dcdcdc;
  }
`;
