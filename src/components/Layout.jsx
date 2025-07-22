function Layout({ children }) {
  return (
    <div className="flex min-h-screen w-full justify-center">
      <main className="w-full max-w-[500px]">{children}</main>
    </div>
  );
}

export default Layout;
