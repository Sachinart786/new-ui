import { PageContainer } from "./container";

const SignUp = async ({ params }: any) => {
  const { plan } = await params;
  return <PageContainer price={plan} />;
};

export default SignUp;