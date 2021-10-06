import { Nav, TabPane } from 'reactstrap';
import styled from 'styled-components/macro';

//tabs borrow sub
export const TabborrowSub = styled(Nav)`
  color: red;
  font-weight: 500;
  font-size: 16px;
  border: none;
  background: #282c37;
  border-radius: 27px;
  padding: 4px;
  display: inline-flexbox;
  height: 54px;
  align-items: center;
  margin-bottom: 10px;
  span {
    cursor: pointer;
    padding: 13px 24px;
    border-radius: 172px;
    color: #fff;
  }
  .activeSub {
    color: #282c37;
    background-color: violet;
    background: linear-gradient(
      221.15deg,
      #bd8727 0%,
      #ffd574 49.02%,
      #feca50 62.02%,
      #bd8727 101.47%
    );
  }
`;
////-tab borrow Cryptocurrency
export const TabborrowCryptocurrency = styled(TabPane)`
  form {
    p {
      font-weight: 500;
      font-size: 14px;
      color: #fff;
      text-align: left;
      padding: 0px;
      margin-top: 20px;
      margin-bottom: 5px;
    }
    & > div {
      display: flex;
      justify-content: space-between;
    }
  }
`;
/////-wrapper input
interface wrapperInput {
  height: string;
  width: string;
  colorFont: string;
  colorBr: string;
}
export const WrapperInput = styled.div`
  height: ${(props: wrapperInput) => (props.height ? props.height : '0px')};
  width: ${(props: wrapperInput) => (props.width ? props.width : '0px')};
  input {
    width: 100%;
    height: 100%;
    border: 1px solid
      ${(props: wrapperInput) => (props.colorBr ? props.colorBr : '#74767b')};
    box-sizing: border-box;
    border-radius: 22px;
    padding: 0px 16px;
    background-color: transparent;
    color: ${(props: wrapperInput) =>
      props.colorFont ? props.colorFont : '#fff'};
    font-size: 16px;
    &:focus {
      outline: none;
      border: 1px solid #dba83d;
    }
    ::placeholder {
      font-weight: 500;
      font-size: 16px;
      color: #a2a3a7;
    }
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
  select {
    width: 100%;
    height: 100%;
    border: 1px solid #74767b;
    border-radius: 22px;
    color: #fff;
    font-size: 16px;
    background-color: transparent;
    padding: 0px 10px;
    &:focus {
      outline: none;
      border: 1px solid #dba83d;
    }
    option {
      background-color: #232732;
      border: none;
    }
  }
`;
////Tooltip
export const TooltipTabs = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #c9cacd !important;
  padding: 0;
  margin-top: 5px !important;
  margin-bottom: 60px !important;
  position: relative;
  span {
    display: none;
    position: absolute;
    top: 20px;
    left: 0;
    background-color: #232732;
    border-radius: 8px;
    padding: 5px;
  }
  &:hover span {
    display: block;
  }
`;
////-tab borrow NFT
export const TabborrowNFT = styled(TabPane)``;