import styled from "styled-components";

export default styled.section`
    background-color: #F7C0CA;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    header {
        align-items: center;
        display: flex;
        height: 12vh;

        div {
            img {
                height: auto;
                object-fit: cover;
                width: 100%;
            }
        }

        div:last-child {
            margin: 0 auto;
        }
    }

    main {
        ul {
            align-items: center;
            display: flex;
            flex-direction: column;

            li:first-child {
                margin-bottom: 6%;
            }

            li {
                a {
                    font-family: "Viga";
                    font-weight: 400;
                }

                a:hover {
                    cursor: pointer;
                }
            }
        }
    }

    @media (min-width: 300px) {
        header {
            div {
                width: 5%;
            }

            div:last-child {
                width: 22%;
            }
        }

        main {
            margin-top: 8%;

            ul {
                li {
                    font-size: 20px;
                }
            }
        }
    }

    @media (min-width: 540px) {
        header {
            div {
                width: 3%;
            }

            div:last-child {
                width: 16%;
            }
        }
    }
`;