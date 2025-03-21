import TodoInput from "@/components/TodoInput";

export default function Home() {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-4xl font-extrabold uppercase">Todo App</span>

      <div className="flex flex-col justify-center items-center">
        
        {/* input todo */}
        <TodoInput name="title" type="text" placeholder="Todo title" />
        
        {/* map todos */}
        
        <ul>
          <li>todo 1</li>
          <li>todo 2</li>
          <li>todo 3</li>
        </ul>
      </div>
    </div>
  );
}
