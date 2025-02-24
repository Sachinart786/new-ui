import { viewAlbum } from "@/services/albumServices";
import { PageContainer } from "./container";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { get } from "lodash";

const View = async ({ params }: any) => {
  const { view } = await params;
  const res = await viewAlbum(view);

  const isToken: any = getCookie("token", {
    cookies,
  });
  return <PageContainer isToken={isToken} album={get(res, "data", [])} />;
};

export default View;