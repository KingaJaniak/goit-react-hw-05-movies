import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MovieLink = styled(Link)`
  font-size: 15px;
  text-decoration: none;
  font-weight: 600;
  color: inherit;
  cursor:pointer;


  &:hover {
    text-decoration: underline pink;
    color: pink ;

  }
`;
export const Header = styled.header`
margin:0 auto;`

export const H1 = styled.h1`
color: pink;
display: flex;
justify-content: center;
`
export const MovieDetailsBtn = styled.button`
  padding: 5px;
  margin-bottom: 5px;
  height: 30px;
  width: 100px;  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-width: 0px;
  background-color: pink;
  color: white;
  font-size: 15px;
  column-gap: 5px;
  text-decoration: none;
  cursor:pointer;

  &:hover {
    background-color: #770737;
  }
`;

export const MoviesForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const HomeWrapper = styled.div`
margin:0 auto;`

export const MoviesInput = styled.input`
  width: 250px;
  height: 30px;
  font-size: 15px;
  border-radius: 5px;
  border-width: 2px;
`;
export const DetailWrapper = styled.div`
display:flex;
flex-direction: column;
`;

export const MoviesSearchBtn = styled.button`
  height: 30px;
  border-radius: 5px;
  border-width: 0px;
  background-color: 	#AA336A;
  color: white;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #FF69B4;
  }

  &:active {
    background-color: #770737;
  }
`;

export const AppWrapper = styled.div`
  background-color: white;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  padding: 50px;
  border-radius: 15px;
  display: flex;
  gap: 10px;
  margin: auto;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const HeaderLink = styled(NavLink)`
  padding: 5px;
  margin-right: 10px;
  height: 50px;
  border-radius: 5px;
  border-width: 0px;
  background-color: pink;
  color: white;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    background-color: #FF69B4;
  }

  &.active {
    background-color: #770737;
  }
`;