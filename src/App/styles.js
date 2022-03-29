import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    padding: 0 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between
`

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #3a3a3c;

    h1 {
        font-size: 2.3rem;
    }

    div {
        display: flex;
        position: absolute;
        right: 12px;
    }

    .open-tutorial, .switch-word {
        margin-left: 10px;
        font-size: 1.7rem;
        font-weight: 600;
        color: #fff;
        background: transparent;
        border: none;
        cursor: pointer;
    }

    @media screen and (max-width: 500px) {
        h1 {
            font-size: 2.1rem;
        }

        .open-tutorial, .switch-word {
            margin-left: 5px;
            font-size: 1.4rem;
        }
    }
`

export const AttemptContainer = styled.div`
    width: 100%;
    max-width: 320px;
    height: 100%;
    margin: 10px 0;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    gap: 5px;
`

export const WordItem = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto-fit;
    gap: 5px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.1rem;
        font-weight: 600;
        text-transform: uppercase;
        border: 2px solid #3a3a3c;
    }

    .green-letter {
        background: #538d4e;
        border: none;
    }
    
    .gray-letter {
        background: #3a3a3c;
        border: none;
    }
    
    .yellow-letter {
        background: #b59f3b;
        border: none;
    }
`

export const KeyContainer = styled.div`
    width: 100%;
    max-width: 510px;
    margin-bottom: 8px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px 8px;

    button {
       min-width: 40px;
       padding: 18px 16px;
       background: #818384;
       color: #fff;
       font-size: .87rem;
       font-weight: 500;
       cursor: pointer;
       border-radius: 4px;
       border: none;
    }

    .A, .S, .D, .F, .G, .H, .J, .K, .L {
        transform: translateX(50%);
    }

    .ENTER {
        grid-column: 1 / 2 span;
    }

    .green-key {
        background: #538d4e;
    }
    
    .gray-key {
        background: #3a3a3c;
    }
    
    .yellow-key {
        background: #b59f3b;
    }

    @media screen and (max-width: 500px) {
        grid-gap: 7px 5px;

        button {
            min-width: 0;
            padding: 10px 6px;
            font-weight: 400;
        }
    }
`