import Helmet from "react-helmet";

export default function HomePages() {
  return (
    <>
      <Helmet>
        <title>helo</title>
      </Helmet>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-8xl font-bold">Hello World</h1>
      </div>
    </>
  );
}
