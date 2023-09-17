import styled from 'styled-components';

export const Card = styled.div`
  width: 600px;
  margin: auto;
  margin-bottom: 50px;
  text-align: center;

  border-radius: 8px;
  box-shadow: 2px;
`;
export const Description = styled.div`
  background-color: #fff;
  padding: 50px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border: 3px solid black;
  border-bottom: none;
`;
export const Photo = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 5px solid purple;
  padding: 10px;
`;
export const Name = styled.p`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 36px;
  color: rgba(149, 137, 137, 0.803);
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const Statlist = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border: 3px solid black;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  /* border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-right: 3px solid black;
  border-left: 3px solid black; */
  background-color: gray;
  padding: 5px;
`;
export const Quantity = styled.span`
  font-weight: bold;
`;
