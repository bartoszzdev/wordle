import styled from 'styled-components'

export const TutorialContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(18,18,19, 1);
    overflow: hidden;
    z-index: 1;
`

export const TutorialElement = styled.article`
    width: 100%;
    max-width: 570px;
    margin: 0 auto;
    padding: 0 10px;
    position: relative;
    animation: slideUp 2s ease;

    @keyframes slideUp {
        from {
            transform: translateY(90px);
        }

        to {
            transform: translateY(0)
        }
    }

    .info {
        border-bottom: 1px solid #3a3a3c;
    }

    .info h1 {
        padding: 10px 0 14px 0;
        font-size: 1.2rem;
        font-weight: 400;
        text-transform: uppercase;
        text-align: center;
    }

    p {
        font-size: 0.92rem;
        font-weight: 100;
        margin-bottom: 1rem;
    }

    .close-btn {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 22px;
        background: transparent;
        color: #fff;
        border: none;
        cursor: pointer;
    }

    .examples {
        border-bottom: 1px solid #3a3a3c;
    }

    .examples h1 {
        font-size: 1rem;
        font-weight: 500;
        margin: 10px 0 14px 0;
    }

    .try {
        margin-bottom: 29px;
    }

    .word {
        display: flex;
        margin-bottom: 20px;
    }

    .word span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        margin-right: 4px;
        border: 2px solid #3a3a3c;
        font-size: 2.1rem;
        font-weight: 600;
        text-transform: uppercase
    }

    .try p {
        font-size: .9rem
    }

    .word .correct-letter {
        background: #538d4e;
        border: none;
    }

    .word .wrong-position {
        background: #b59f3b;
        border: none; 
    }

    .word .wrong-letter {
        background: #3a3a3c;
        border: none;
    }

    @media screen and (max-width: 500px) {
        .word {
            margin-bottom: 12px;
        }

        .word span {
            width: 40px;
            height: 40px;
            font-size: 2rem;
        }
    }
`