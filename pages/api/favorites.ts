import { NextApiRequest, NextApiResponse } from 'next';

// Define the TypeScript interface
interface ReservableItemDto {
  itemId: string;
  title: string;
  location: string;
  description: string;
  image: string;
  itemType: string;
  contacts: Record<string, string>;
}

// Create static data
let reservableItems: ReservableItemDto[] = [
  {
    itemId: '5',
    title: 'Conference Room A',
    location: 'Building 1, Floor 2',
    description: 'A spacious conference room with a seating capacity of 20.',
    image: '/images/conference-room-a.jpg',
    itemType: 'Room',
    contacts: {
      manager: 'John Doe',
      email: 'johndoe@example.com',
    },
  },
  {
    itemId: '6',
    title: 'Projector X200',
    location: 'Storage Room B',
    description: 'High-resolution projector suitable for presentations.',
    image: '/images/projector-x200.jpg',
    itemType: 'Equipment',
    contacts: {
      technician: 'Jane Smith',
      email: 'janesmith@example.com',
    },
  },
];

// API endpoint handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET': {
      const { itemId } = req.query;
      if (itemId) {
        const item = reservableItems.find(item => item.itemId === itemId);
        if (item) {
          res.status(200).json(item);
        } else {
          res.status(404).json({ message: 'Item not found' });
        }
      } else {
        res.status(200).json(reservableItems);
      }
      break;
    }
    case 'POST': {
      const newItem: ReservableItemDto = req.body;
      reservableItems.push(newItem);
      res.status(201).json(newItem);
      break;
    }
    case 'PUT': {
      const updatedItem: ReservableItemDto = req.body;
      const index = reservableItems.findIndex(item => item.itemId === updatedItem.itemId);
      if (index !== -1) {
        reservableItems[index] = updatedItem;
        res.status(200).json(updatedItem);
      } else {
        res.status(404).json({ message: 'Item not found' });
      }
      break;
    }
    case 'DELETE': {
      const { itemId } = req.query;
      const index = reservableItems.findIndex(item => item.itemId === itemId);
      if (index !== -1) {
        const deletedItem = reservableItems.splice(index, 1);
        res.status(200).json(deletedItem[0]);
      } else {
        res.status(404).json({ message: 'Item not found' });
      }
      break;
    }
    default: {
      res.status(405).json({ message: 'Method Not Allowed' });
      break;
    }
  }
}