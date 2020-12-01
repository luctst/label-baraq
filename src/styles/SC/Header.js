import styled from "styled-components";

export default styled.header`
  height: 10vh;

  nav {
    height: inherit;
  }

  @media (min-width: 300px) {
    .nav--desktop {
      display: none;
    }

    .nav--mobile {
      display: flex;
      padding-top: 1%;

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
        width: 26%;
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
      display: flex;
      justify-content: space-between;
      padding-top: 1%;
      padding-left: 55px;
      padding-right: 55px;

      div:first-child {
        align-self: flex-start;
        width: 3%;
        transform: rotate(90deg);
      }

      p {
        a {
          color: #302a2a;
          font-family: "Viga";
          font-size: 11px;
          position: relative;
          text-decoration: none;
          text-transform: uppercase;

          &:hover {
            span {
              width: 100%;
              opacity: 1;
            }
          }

          span {
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            opacity: 0;
            width: 0%;
            transform: translateY(8px);
            border-bottom: solid 1px black;
            transition: all 0.3s;

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
        width: 16%;

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
      div:first-child {
        width: 1.3%;
      }

      div {
        width: 14%;
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
        width: 8.5%;
      }
    }
  }
`;
