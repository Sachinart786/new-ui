import { viewAlbum } from "@/services/albumServices";
import { PageContainer } from "./container";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

const LoginPage = async ({ params }: any) => {
  const { view } = await params;
  const res = await viewAlbum(view);

  const  isToken: any = getCookie("token", {
    cookies,
  });
  return <PageContainer isToken={isToken} album={res.data} />;
};

export default LoginPage;
