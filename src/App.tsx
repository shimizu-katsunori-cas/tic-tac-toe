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
      <Stack direction="row">
        <Box>
          <Stack direction="row" spacing={1}>
            <Button
              style={{ height: '50px', minWidth: '50px', backgroundColor: GRAY }}
              onClick={() => {
              if (board[0] === null) {
                const newBoard = [...board];
                newBoard[0] = player;
                setBoard(newBoard);
                setPlayer(player === 'X' ? 'O' : 'X');
              }
            }}>{board[0]}</Button>
            <Button
              style={{ height: '50px', minWidth: '50px', backgroundColor: GRAY }}
              onClick={() => {
              if (board[1] === null) {
                const newBoard = [...board];
                newBoard[1] = player;
                setBoard(newBoard);
                setPlayer(player === 'X' ? 'O' : 'X');
              }
            }}>{board[1]}</Button>
            <Button
              style={{ height: '50px', minWidth: '50px', backgroundColor: GRAY }}
              onClick={() => {
              if (board[2] === null) {
                const newBoard = [...board];
                newBoard[2] = player;
                setBoard(newBoard);
                setPlayer(player === 'X' ? 'O' : 'X');
              }
            }}>{board[2]}</Button>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Button
              style={{ height: '50px', minWidth: '50px', backgroundColor: GRAY }}
              onClick={() => {
              if (board[3] === null) {
                const newBoard = [...board];
                newBoard[3] = player;
                setBoard(newBoard);
                setPlayer(player === 'X' ? 'O' : 'X');
              }
            }}>{board[3]}</Button>
            <Button
              style={{ height: '50px', minWidth: '50px', backgroundColor: GRAY }}
              onClick={() => {
              if (board[4] === null) {
                const newBoard = [...board];
                newBoard[4] = player;
                setBoard(newBoard);
                setPlayer(player === 'X' ? 'O' : 'X');
              }
            }}>{board[4]}</Button>
            <Button
              style={{ height: '50px', minWidth: '50px', backgroundColor: GRAY }}
              onClick={() => {
              if (board[5] === null) {
                const newBoard = [...board];
                newBoard[5] = player;
                setBoard(newBoard);
                setPlayer(player === 'X' ? 'O' : 'X');
              }
            }}>{board[5]}</Button>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Button
              style={{ height: '50px', minWidth: '50px', backgroundColor: GRAY }}
              onClick={() => {
              if (board[6] === null) {
                const newBoard = [...board];
                newBoard[6] = player;
                setBoard(newBoard);
                setPlayer(player === 'X' ? 'O' : 'X');
              }
            }}>{board[6]}</Button>
            <Button
              style={{ height: '50px', minWidth: '50px', backgroundColor: GRAY }}
              onClick={() => {
              if (board[7] === null) {
                const newBoard = [...board];
                newBoard[7] = player;
                setBoard(newBoard);
                setPlayer(player === 'X' ? 'O' : 'X');
              }
            }}>{board[7]}</Button>
            <Button
              style={{ height: '50px', minWidth: '50px', backgroundColor: GRAY }}
              onClick={() => {
              if (board[8] === null) {
                const newBoard = [...board];
                newBoard[8] = player;
                setBoard(newBoard);
                setPlayer(player === 'X' ? 'O' : 'X');
              }
            }}>{board[8]}</Button>
          </Stack>
        </Box>
        <Box>
          <Typography variant="h5" component="h5">
            Next Player: {player}
          </Typography>
          <Button>reset</Button>
        </Box>
      </Stack>
    </div>
  );
};

export default App;
