import { useLocation, useParams } from "react-router-dom";

const TestComponent = () => {
  const { xyz } = useParams();

  console.log(xyz);
  return (
    <>
      <h1>{`Test NewComponent`}</h1>
    </>
  );
};

export default TestComponent;
