import { NextResponse } from 'next/server';

export default function handler(req:any, res:any) {
    // Проверяем метод запроса (GET, POST и т.д.)
    if (req.method === 'GET') {
      res.status(200).json({ message: false});
    }
  }