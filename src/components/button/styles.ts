import styled from "styled-components";
import { obj } from "../../global/styles/variables";

interface IButtonProps {
  color: 'primary' | 'secondary';
  margin?: string;
  padding?: string;
}

const Button = styled.button`
  @media screen and (max-width: 413px) {
    margin: 0 1rem 1rem 0;
  }

  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: ${(props: IButtonProps) => props.padding ?? `.75rem 2rem`};
  background-color: ${(props: IButtonProps) => props.color === 'primary' ? obj.colors.mainColor : 'transparent'};
  color: #fff;
  border: 2px solid ${obj.colors.mainColor};
  border-radius: .5rem;
  cursor: pointer;
  transition: .3s;
  margin: ${(props: IButtonProps) => `0 ${props.margin} 0 0`};
  

  &:hover {
    background-color: ${(props: IButtonProps) => props.color === 'primary' ? obj.colors.mainColorLighter : obj.colors.mainColor};
    border-color: ${(props: IButtonProps) => props.color === 'primary' ? obj.colors.mainColorLighter : ''};

    svg {
      transform: translateX(.5rem);
    }
  }

  svg {
    transition: .3s;
    margin-left: .5rem;
  }
`;

const IconButton = styled.button`
  background-color: transparent;
  color: #FFF;
  border: none;
  display: inline-flex;
  align-items: center;
  font-size: 1.75rem;
  cursor: pointer;

  &:hover {
    color: ${obj.colors.mainColor};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export { Button, IconButton };