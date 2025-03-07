export type DiseasesData = {
  id: number;
  biology_name: string;
  createdAt: string;
  crop: {
    name: string;
  };
  description: string;
  details: string;
  disease_category: string;
  image: {
    aws_path: string;
    id: number;
  };
  name: string;
  type: string;
  updatedAt: string;
};

export type DiseasesQuery = {
  populate: string;
  sort: string;
  filters: {};
  pagination: {
    pageSize: number;
    page: number;
  };
};
