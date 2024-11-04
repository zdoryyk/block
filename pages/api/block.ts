import { NextResponse } from 'next/server';

let isBLocked = true;

export default function handler(req:any, res:any) {
    // Проверяем метод запроса (GET, POST и т.д.)
    if (req.method === 'GET') {
      res.status(200).json({ message: isBLocked});
    }
    if(req.method === 'POST'){
      isBLocked = !isBLocked;
      res.status(200).json({ message: 'Is blocked = ' + isBLocked});
    }
    
  }