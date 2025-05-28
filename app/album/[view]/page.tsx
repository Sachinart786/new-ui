import { viewAlbum } from "@/services/albumServices";
import { PageContainer } from "./container";
import { get } from "lodash";

const View = async ({ params }: any) => {
  const { view } = await params;
  const res = await viewAlbum(view);
  const album = get(res, "data", []);

  return <PageContainer album={album} />;
};

export default View;
