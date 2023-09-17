import styled from 'styled-components';

const TableTransaction = styled.table`
  background-color: #fff;
  width: 600px;
  text-align: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 50px;
  padding: 20px;
  table-layout: fixed;
`;

const THeadTransaction = styled.thead`
  background-color: #0099cc;
  color: white;
  font-size: 20px;
`;

const TBodyTransaction = styled.tbody`
  background-color: aqua;
  th,
  td {
    text-align: center;
    padding: 10px;
  }
`;
const RawOfTransaction = styled.tr`
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

export const Transactions = ({ items }) => {
  return (
    <TableTransaction className="item-history">
      <THeadTransaction>
        <tr>
          <th>{'Type'.toUpperCase()}</th>
          <th>{'Amount'.toUpperCase()}</th>
          <th>{'Currency'.toUpperCase()}</th>
        </tr>
      </THeadTransaction>
      <TBodyTransaction>
        {items.map(item => {
          return (
            <RawOfTransaction key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </RawOfTransaction>
          );
        })}
      </TBodyTransaction>
    </TableTransaction>
  );
};
