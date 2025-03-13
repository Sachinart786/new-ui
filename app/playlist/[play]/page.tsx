import { viewAlbum } from "@/services/albumServices";
import { PageContainer } from "./container";
import { get } from "lodash";

const Play = async ({ params }: any) => {
  const { play } = await params;
  const res = await viewAlbum(play);
  const album = get(res, "data", []);

  return <PageContainer album={album} />;
};

export default Play;
