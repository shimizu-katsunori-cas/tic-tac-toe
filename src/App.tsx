import { FC, useState } from 'react';
import { Button, Stack, Box, Typography } from '@mui/material';

/**
 * 三目並べのボタンを押す
 * 順番が入れ替わる
 * 勝利かどうかの判定を行う
 *
 */
const App: FC = () => {
  const [player, setPlayer] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(null));
  const GRAY = 'rgba(128, 128, 128, 0.5)';

  const handleClick = (index: number) => {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer(player === 'X' ? 'O' : 'X');
    }
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setPlayer('X');
  };

  const renderButton = (index: number) => (
    <Button
      key={index}
      style={{ height: '50px', minWidth: '50px', backgroundColor: GRAY }}
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </Button>
  );

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
      {/** gridも検討する */}
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
            Next Player: {player}
          </Typography>
          <Button onClick={resetBoard}>reset</Button>
        </Box>
      </Stack>
    </div>
  );
};

export default App;
