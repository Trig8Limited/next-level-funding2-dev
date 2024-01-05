import ResponsiveNavbar from "./ResponsiveNavbar";


export default function Layout({ children }) {
  return (
    <>
      <ResponsiveNavbar />
      <>{children}</>
    </>
  );
}
