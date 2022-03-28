import React from 'react'
import { TutorialContainer, TutorialElement } from './styles'
import { IoMdClose } from 'react-icons/io'

function Tutorial({ setShowTutorial }) {
    return (
        <TutorialContainer>
            <TutorialElement>
                <div className='info'>
                    <h1>Como jogar</h1>

                    <p>Adivinhe a palavra em seis tentativas.</p>
                    <p>Cada tentativa deve ser uma palavra de cinco letras. Então aperte o botão para enviar!</p>
                    <p>Depois de cada tentativa, a cor dos blocos irão mudar para te mostar o quão perto a sua tentaiva foi da palavra.</p>

                    <button type='button' className='close-btn' onClick={() => setShowTutorial(false)}>
                        <IoMdClose />
                    </button>
                </div>

                <div className='examples'>
                    <h1>Exemplos</h1>

                    <div className='try'>
                        <div className='word'>
                            <span className='correct-letter'>f</span>
                            <span>e</span>
                            <span>l</span>
                            <span>i</span>
                            <span>z</span>
                        </div>

                        <p>A letra <strong>F</strong> está na palavra e na posição exata.</p>
                    </div>

                    <div className='try'>
                        <div className='word'>
                            <span>l</span>
                            <span className='wrong-position'>a</span>
                            <span>p</span>
                            <span>i</span>
                            <span>s</span>
                        </div>

                        <p>A letra <strong>A</strong> está na palavra porém na posição errada.</p>
                    </div>

                    <div className='try'>
                        <div className='word'>
                            <span>c</span>
                            <span>a</span>
                            <span>r</span>
                            <span className='wrong-letter'>g</span>
                            <span>o</span>
                        </div>

                        <p>A letra <strong>G</strong> não está na palavra e em nenhuma posição.</p>
                    </div>
                </div>
            </TutorialElement>
        </TutorialContainer>
    )
}

export default Tutorial