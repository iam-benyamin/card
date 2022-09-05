import styled from "styled-components";

export const CardDiv = styled.div`
    position: absolute;
    width: 450px;
    height: 250px;    
    top: 50%; left: 50%;
    transform:  translate(-50%, -50%);
    background-color: #ffffff;
    background: linear-gradient(#f8f8f8, #fff);
    box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
    
    border-radius: 6px;
    margin: 1.5rem;
    // overflow: hidden;
    
    display: flex;

    h1 {
        text-align: center;
    }

    .additional {
        position: absolute;
        width: 150px;
        height: 100%;
        background: linear-gradient(#dE685E, #EE786E);
        transition: width 0.4s;
        overflow: hidden;
        z-index: 2;
        color: #fff;
        border-radius: 5px 0 0 5px;


        .additional__user {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            height: 100%;
            position: absolute;
            left: 15px;

            .level, .points {
                padding: 2px 10px;
                background-color: rgba(0, 0, 0, 0.15);
                border-radius: 15px;
                font-size: 12px;
            }

            svg {
                .skin {fill: #eab38f;}
                .eyes {fill: #1f1f1f;}
                .hair {fill: #2f1b0d;}
                .line {fill: none; stroke: #2f1b0d; stroke-width:2px;}
            }
        }

        .additional__info {
            width: 300px;
            position: absolute;
            left: 150px;
            height: 100%;
            
            .coords {
                display: flex;
                justify-content: space-between;
                margin-right: 15px;
            }

            .stats {
                display: flex;
                position: absolute;
                bottom: 1rem;
                color: #fff;
                right: 1rem;
                left: 1rem;
                justify-content: space-between;
                text-align: center;
                font-size: 2rem;
                
                .title {
                    font-size: 0.75rem;
                    font-weight: bold;
                    text-transform: uppercase;
                }
                .value {
                    font-size: 1.5rem;
                    font-weight: bold;
                    line-height: 1.5rem;
                }
            }
        }

        &::after {
            content: "";
            display: block;
            position: absolute;
            top: 10%;
            right: -2px;
            height: 80%;
            border-left: 2px solid rgba(0,0,0,0.025);
        }
    }

    .general {
        width: 300px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        box-sizing: border-box;
        padding: 1rem;
        padding-top: 0;

        .more {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            font-size: 0.9em;
        }
    }

    &:hover {
        .additional {
            width: 100%;
            border-radius: 5px;
        }
    }
`