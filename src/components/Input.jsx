function Input(props) {
  return (
    <input
      //   type={props.type}
      //   id="task-description"
      //   placeholder={props.placeholder}
      className="bg-white font-semibold text-gray-600 border-slate-300 border-2 p-2 block m-auto outline-none placeholder:text-left rounded-md shadow w-full"
      //   value={props.value}
      //   onChange={props.onChange}
      {...props}
    />
  );
}

export default Input;
