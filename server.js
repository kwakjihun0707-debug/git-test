const app = require('./app');

const PORT = process.env.PORT || 3425;

// 7. PUT 라우트 처리 (할 일 수정)
app.put('/todos/:id', (req, res) => {
  const id = req.params.id;
  const updatedContent = req.body;
  // TODO: 데이터베이스나 배열에서 해당 id의 할 일을 수정하는 로직
  res.json({ success: true, message: "수정되었습니다.", id, updatedContent });
});

// 8. DELETE 라우트 처리 (할 일 삭제)
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  // TODO: 데이터베이스나 배열에서 해당 id의 할 일을 삭제하는 로직
  res.json({ success: true, message: "삭제되었습니다.", id });
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});