function Button(props) {
  return (
    <button
      // onClick={props.onClick}
      // type={props.type}
      {...props}
      className="p-1 rounded-md bg-slate-400 text-white cursor-pointer"
    >
      {props.children}
    </button>
  );
}

export default Button;
