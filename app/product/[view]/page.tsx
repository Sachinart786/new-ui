import { viewAlbum } from "@/services/albumServices";
import { PageContainer } from "./container";

const LoginPage = async ({ params }: any) => {
  const { view } = await params;
  const res = await viewAlbum(view);
  return <PageContainer album={res.data} />;
};

export default LoginPage;
