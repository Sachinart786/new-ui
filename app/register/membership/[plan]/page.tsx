import { get } from "lodash";
import { PageContainer } from "./container";

const SignUp = ({ params }: any) => {
  const price = get(params, "plan", 0);
  return <PageContainer price={price} />;
};

export default SignUp;
