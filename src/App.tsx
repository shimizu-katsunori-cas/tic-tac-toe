import { FC, useState } from 'react';
import { Button, Stack, Box, Typography } from '@mui/material';

/**
 * 三目並べのボタンを押す
 * 順番が入れ替わる
 * 勝利かどうかの判定を行う
 *
 */
const App: FC = () => {
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
            <Button>A</Button>
            <Button>B</Button>
            <Button>C</Button>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Button>D</Button>
            <Button>E</Button>
            <Button>F</Button>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Button>G</Button>
            <Button>H</Button>
            <Button>I</Button>
          </Stack>
        </Box>
        <Box>
          <Typography variant="h5" component="h5">
            hello
          </Typography>
          <Button>reset</Button>
        </Box>
      </Stack>
    </div>
  );
};

export default App;
