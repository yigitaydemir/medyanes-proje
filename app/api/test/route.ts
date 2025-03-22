import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Create a test todo
    const newTodo = await prisma.todo.create({
      data: {
        text: 'Test Todo',
        completed: false,
      },
    });

    // Fetch all todos
    const todos = await prisma.todo.findMany();

    return NextResponse.json({ 
      message: 'Connection test successful',
      newTodo,
      allTodos: todos 
    });
  } catch (error) {
    console.error('Database test failed:', error);
    return NextResponse.json(
      { error: 'Failed to test database connection' },
      { status: 500 }
    );
  }
} 