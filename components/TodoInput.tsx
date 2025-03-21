interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const TodoInput = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <div>
        <input type={type} name={name} placeholder={placeholder} value={value} className="block w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
  )
}

export default TodoInput