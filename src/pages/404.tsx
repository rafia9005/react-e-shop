import Helmet from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-8xl font-bold">Not Found</h1>
      </div>
    </>
  );
}
