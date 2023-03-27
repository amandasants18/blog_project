import styled from "styled-components";

export const TitlePost = styled.h1`
  color: black;
  padding-left: 10px;
`;

export const Description = styled.h3`
  color: rgb(97, 97, 97);
  font-size: 14px;
  font-family: arial;
  padding-left: 10px;
  width: 100%;
`;

export const Section = styled.section`
  padding: 2rem 0;

  .posts {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
    word-break: break-word;
    padding: 0 3rem;
  }

  .post {
    box-shadow: 0 5px 16px rgba(1, 2, 0, 0.9);
    background: white;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    align-items: center;
    flex-direction: column;

    @media (max-width: 200px) {
      flex-direction: column;
      word-breadk: break-word;
    }
  }
`;
