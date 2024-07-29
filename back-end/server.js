const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/events', async (req, res) => {
  const events = await prisma.event.findMany();
  res.json(events);
});

app.get('/articles', async (req, res) => {
  const articles = await prisma.article.findMany({
    include: { paragraphs: true },
  });
  res.json(articles);
});

app.get('/executives', async (req, res) => {
  const executives = await prisma.executive.findMany();
  res.json(executives);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
