export type ReelsData = {
  id: number;
  createdAt: string;
  createdBy: string;
  description: string;
  media: { aws_path: string };
  title: string;
  updatedAt: string;
  updatedBy: string;
};

export type ReelsQuery = {
  populate: string;
  sort: string;
  filters: {};
  pagination: {
    pageSize: number;
    page: number;
  };
};
