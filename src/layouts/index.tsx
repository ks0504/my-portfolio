type LayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
      <main>{children}</main>
  );
}

export default MainLayout;