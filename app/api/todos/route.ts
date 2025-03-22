import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET all todos
export async function GET() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(todos);
  } catch (error) {
    console.error('Failed to fetch todos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch todos' },
      { status: 500 }
    );
  }
}

// POST new todo
export async function POST(request: Request) {
  try {
    const { text } = await request.json();
    
    if (!text?.trim()) {
      return NextResponse.json(
        { error: 'Todo text is required' },
        { status: 400 }
      );
    }

    const todo = await prisma.todo.create({
      data: {
        text,
        completed: false,
      },
    });

    return NextResponse.json(todo);
  } catch (error) {
    console.error('Failed to create todo:', error);
    return NextResponse.json(
      { error: 'Failed to create todo' },
      { status: 500 }
    );
  }
} 