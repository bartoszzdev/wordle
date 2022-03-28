import React, { useState, useEffect } from 'react'
import { Container, Header, AttemptContainer, WordItem, KeyContainer } from './styles.js'
import { keyValues, words } from './keys'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import MessageElement from '../Message/Message'
import Tutorial from '../Tutorial/Tutorial'

const randomWord = Math.floor(Math.random() * words.length)

function App() {
  const [keyWord, setKeyWord] = useState(words[randomWord])
  const [keys, setKeys] = useState(keyValues)
  const [keyColor, setKeyColor] = useState([])
  const [index, setIndex] = useState(0)
  const [row, setRow] = useState(0)
  const [attempts, setAttempts] = useState([
    {
      word: [],
      letterColor: []
    },
    {
      word: [],
      letterColor: ['','','','','']
    },
    {
      word: [],
      letterColor: ['','','','','']
    },
    {
      word: [],
      letterColor: ['','','','','']
    },
    {
      word: [],
      letterColor: ['','','','','']
    },
    {
      word: [],
      letterColor: ['','','','','']
    }
  ])
  const [isEnterPress, setIsEnterPress] = useState(false)
  const [message, setMessage] = useState('')
  const [showTutorial, setShowTutorial] = useState(false)

  const handleClick = (key) => {
    if (key === 'ENTER') {
      checkWord()
    } else if (key === '⌫') {
      deleteLetter()
    } else {
      addLetter(key)
    }
  }

  const addLetter = (letter) => {
    if (index < 5 && row < 6) {
      setAttempts(currentAttempt => {
        currentAttempt[row].word[index] = letter
        return [...currentAttempt]
      })
      setIndex(currentIndex => currentIndex + 1)
    }
  }

  const deleteLetter = () => {
    if (index > 0) {

      const lastIndex = attempts[row].word.length - 1
  
      setIndex(currentIndex => currentIndex - 1)
      setAttempts(currentAttempt => {
        currentAttempt[row].word.splice(lastIndex, 1)
        return [...currentAttempt]
      }) 
    }
  }

  const checkWord = () => {
    if (attempts[row].word.length == 5) {
      const wordGuess = attempts[row].word.join('')

      setIndex(currentIndex => currentIndex = 0)
      flipColor()
      flipKeyColor()

      if (keyWord === wordGuess) {
        setMessage('Parabéns você acertou!!!')
        setIsEnterPress(true)
        setRow(6)
      } else {
        if (row >= 5) {
          setMessage('Game over')
          setIsEnterPress(true)
          setRow(6)
        } else if (row <= 5) {
          setRow(currentRow => currentRow + 1)
        }
      }
    } else {
      setMessage('Número de letras insufuciente')
      setIsEnterPress(true)
    }
  }

  const flipColor = () => {
    const currentGuess = attempts[row].word

    for (let i = 0; i < currentGuess.length; i++) {
      setAttempts(currentAttemptList => {
        if (currentGuess[i] === keyWord[i]) {
          currentAttemptList[row].letterColor[i] = 'green-letter'
        } else if (keyWord.includes(currentGuess[i])) {
          currentAttemptList[row].letterColor[i] = 'yellow-letter'
        } else {
          currentAttemptList[row].letterColor[i] = 'gray-letter'
        }

        return [...currentAttemptList]
      })
    }
  }

  const flipKeyColor = () => {
    const currentGuess = attempts[row].word

    for (let i = 0; i < currentGuess.length; i++) {
      setKeyColor(currentKeyList => {
        for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
          if (keys[keyIndex] === currentGuess[i]) {
            if (currentGuess[i] === keyWord[i]) {
              currentKeyList[keyIndex] = 'green-key'
            } else if (keyWord.includes(currentGuess[i])) {
              currentKeyList[keyIndex] = 'yellow-key'
            } else {
              currentKeyList[keyIndex] = 'gray-key'
            }
          }
        }

        return [...currentKeyList]
      })
    }
  }

  return (
    <Container>
      <Header>
        <h1>Wordle</h1>

        <button type='button' className='open-tutorial' onClick={() => setShowTutorial(true)}>
          <AiOutlineQuestionCircle />
        </button>
      </Header>

      {showTutorial && <Tutorial setShowTutorial={setShowTutorial} />}
      {isEnterPress && <MessageElement setIsEnterPress={setIsEnterPress} message={message} />}

      <AttemptContainer>
        {attempts.map((attempt, index) => {
          const { word, letterColor } = attempt

          return (
            <WordItem key={index}>
              <div className={letterColor[0]}>{word[0]}</div>
              <div className={letterColor[1]}>{word[1]}</div>
              <div className={letterColor[2]}>{word[2]}</div>
              <div className={letterColor[3]}>{word[3]}</div>
              <div className={letterColor[4]}>{word[4]}</div>
          </WordItem>
          )
        })}
      </AttemptContainer>

      <KeyContainer>
        {keys.map((key, index) => {
          return (
            <button type='button' key={index} className={keyColor[index]} onClick={() => handleClick(key)}>
              {key}
            </button>
          )
        })}
      </KeyContainer>
    </Container>
  )
}

export default App
