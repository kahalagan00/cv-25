// const Custom404: React.FC = () => {
//   return (
//     <div className="font-clashdisplayregular text-white">
//       <h1>404 - Page Not Found BRUV</h1>
//     </div>
//   );
// };

// export default Custom404;

// import { notFound } from "next/navigation";

const NotFound: React.FC = () => {
  // notFound();
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center text-4xl text-white">
      <h1>
        <b>404</b> - Page Not Found
      </h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
