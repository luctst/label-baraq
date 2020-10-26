import styled from "styled-components";

export default styled.header`
  height: 12vh;

  nav {
    align-items: center;
    height: inherit;
  }

  @media (min-width: 300px) {
    .nav--desktop {
      display: none;
    }

    .nav--mobile {
      display: flex;

      div {
        width: 5%;

        img {
          object-fit: cover;
          height: inherit;
          width: 100%;
        }
      }

      div:last-child {
        margin: 0 auto;
        width: 22%;
      }
    }
  }

  @media (min-width: 450px) {
    .nav--mobile {
      div:last-child {
        width: 17%;
      }
    }
  }

  @media (min-width: 630px) {
    .nav--mobile {
      div {
        width: 4%;
      }

      div:last-child {
        width: 13%;
      }
    }
  }

  @media (min-width: 700px) {
    .nav--mobile {
      div {
        width: 3%;
      }

      div:last-child {
        width: 11%;
      }
    }
  }

  @media (min-width: 768px) {
    .nav--mobile {
      display: none;
    }

    .nav--desktop {
      align-items: center;
      display: flex;
      justify-content: space-between;

      p {
        a {
          color: #302a2a;
          font-family: "Viga";
          font-size: 11px;
          position: relative;
          text-decoration: none;
          text-transform: uppercase;

          span {
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            transform: translateY(8px);
            border-bottom: solid 1px black;

            ::before {
              content: "";
              position: absolute;
              left: 0;
              height: 8px;
              transform: translateY(-50%);
              border-left: solid 1px black;
            }

            ::after {
              content: "";
              position: absolute;
              right: 0;
              height: 8px;
              transform: translateY(-50%);
              border-right: solid 1px black;
            }
          }
        }
      }

      div {
        width: 11%;

        img {
          object-fit: cover;
          height: auto;
          width: 100%;
        }
      }
    }
  }

  @media (min-width: 920px) {
    .nav--desktop {
      div {
        width: 10%;
      }
    }
  }

  @media (min-width: 1200px) {
    margin-bottom: 2%;

    .nav--desktop {
      p {
        a {
          font-size: 0.9em;
        }
      }

      div {
        width: 8%;
      }
    }
  }
`;
