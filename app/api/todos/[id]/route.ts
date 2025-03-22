import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// DELETE todo by ID
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const deletedTodo = await prisma.todo.delete({
      where: {
        id: id
      }
    });

    return NextResponse.json(deletedTodo);
  } catch (error) {
    console.error('Failed to delete todo:', error);
    return NextResponse.json(
      { error: 'Failed to delete todo' },
      { status: 500 }
    );
  }
}

// PATCH todo by ID (update completion status)
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { completed } = await request.json();

    const updatedTodo = await prisma.todo.update({
      where: {
        id: id
      },
      data: {
        completed
      }
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    console.error('Failed to update todo:', error);
    return NextResponse.json(
      { error: 'Failed to update todo' },
      { status: 500 }
    );
  }
} 