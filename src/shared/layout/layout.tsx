import MyAppBar, { THeaderProps } from "../components/appBar/appBar";

export type TLayoutProps = {
  // footer?: boolean;
  header?: boolean;
  headerProps?: THeaderProps;
};

const Layout = ({
  header = true,
  headerProps,
  children,
}: React.PropsWithChildren<TLayoutProps>) => {
  return (
    <>
      {header && <MyAppBar {...headerProps} />}
      {children}
    </>
  );
};

export default Layout;
