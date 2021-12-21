import styled from 'styled-components';

export const NavigationWrapper = styled.header`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #292b2c;
  top: 0;
  position: sticky;

  .nav-wrap {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .logo-text {
    color: white;
    font-size: 2rem;
    text-decoration: none;
  }

  .nav-link {
    color: white;
    background-color: #0275d8;
    text-decoration: none;
    padding: 1rem;
    border-radius: 0.5rem;
  }
  .nav-link:active {
    background-color: white;
    color: black;
  }
`;
