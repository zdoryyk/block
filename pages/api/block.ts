import { NextApiRequest, NextApiResponse } from 'next';

interface ReservableItemDto {
  itemId: string;
  title: string;
  location: string;
  description: string;
  image: string;
  itemType: string;
  contacts: Record<string, string>;
}

const reservableItems: ReservableItemDto[] = [
  {
    itemId: '1',
    title: 'Conference Room A',
    location: 'Building 1, Floor 2',
    description: 'A spacious conference room with a seating capacity of 20.',
    image: 'https://t4.ftcdn.net/jpg/00/80/91/11/240_F_80911186_RoBCsyLrNTrG7Y1EOyCsaCJO5DyHgTox.jpg',
    itemType: 'Room',
    contacts: {
      manager: 'John Doe',
      email: 'johndoe@example.com',
    },
  },
  {
    itemId: '2',
    title: 'Projector X200',
    location: 'Storage Room B',
    description: 'High-resolution projector suitable for presentations.',
    image: 'https://as1.ftcdn.net/v2/jpg/05/72/84/68/1000_F_572846851_BIJvsCZpD8fxQRLAl6JeeIBDYQV5owm3.jpg',
    itemType: 'Equipment',
    contacts: {
      technician: 'Jane Smith',
      email: 'janesmith@example.com',
    },
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(reservableItems);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
