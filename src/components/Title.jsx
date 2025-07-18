function Title(props) {
  return (
    <h1 className="text-center text-3xl text-slate-100 mb-1.5 font-semibold">
      {props.children}
    </h1>
  );
}

export default Title;
