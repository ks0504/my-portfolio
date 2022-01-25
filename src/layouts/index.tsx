type LayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
      <main className="mt-10">{children}</main>
  );
}

export default MainLayout;