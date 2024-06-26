import { FC, useState } from 'react'
import { Button, Stack, Box, Typography } from '@mui/material'

const App: FC = () => {
  const [player, setPlayer] = useState('X') // プレイヤー
  const [board, setBoard] = useState(Array(9).fill(null)) // 9マスのボード
  const [gameOver, setGameOver] = useState(false) // ゲームオーバーかどうか
  const GRAY = 'rgba(128, 128, 128, 0.5)'

  const handleClick = (index: number) => {
    if (board[index] === null && !gameOver) {
      const newBoard = [...board]
      newBoard[index] = player
      const winner = checkForWinner(newBoard)
      setBoard(newBoard)
      if (winner) {
        alert(`Winner: ${winner}`)
        setGameOver(true)
        return
      }
      setPlayer(player === 'X' ? 'O' : 'X')
    }
  }

  const checkForWinner = (board: (string | null)[]) => {
    const lines = [
      [0, 1, 2], // 横1
      [3, 4, 5], // 横2
      [6, 7, 8], // 横3
      [0, 3, 6], // 縦1
      [1, 4, 7], // 縦2
      [2, 5, 8], // 縦3
      [0, 4, 8], // 斜め1
      [2, 4, 6], // 斜め2
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }
    return null
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(null))
    setPlayer('X')
    setGameOver(false)
  }

  const renderButton = (index: number) => (
    <Button
      key={index}
      style={{ height: '50px', minWidth: '50px', backgroundColor: GRAY }}
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </Button>
  )

  return (
    <div>
      <p>
        <b>三目並べ</b>
        <br />
        以下の仕様を満たす機能を実装する。
        <ul>
          <li>3x3のボードを用意する</li>
          <li>XとOを交互に置く</li>
          <li>
            縦・横・斜めのいずれかが3つ並んだ時点で勝者をメッセージとして表示しこれ以上ボタンを押せなくする
          </li>
          <li>resetボタンを用意して、いつでも初期状態に戻せるようにする</li>
        </ul>
      </p>
      <hr />
      <Stack direction="row" spacing={2}>
        <Box>
          {[...Array(3)].map((_, i) => (
            <Stack key={i} direction="row" spacing={1}>
              {[...Array(3)].map((_, j) => renderButton(i * 3 + j))}
            </Stack>
          ))}
        </Box>
        <Box>
          <Typography variant="h5" component="h5">
            {gameOver ? `Winner: ${player}` : `Next Player: ${player}`}
          </Typography>
          <Button onClick={resetBoard}>reset</Button>
        </Box>
      </Stack>
    </div>
  )
}

export default App
