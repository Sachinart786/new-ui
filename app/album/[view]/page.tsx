import { viewAlbum } from "@/services/albumServices";
import { PageContainer } from "./container";
import { get } from "lodash";

type ViewProps = {
  params: {
    view: string;
  };
};

const View = async ({ params }: ViewProps) => {
  const { view } = params;
  const res = await viewAlbum(view);
  const album = get(res, "data", []);

  return <PageContainer album={album} />;
};

export default View;
