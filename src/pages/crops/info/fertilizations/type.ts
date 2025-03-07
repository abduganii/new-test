export type FertilizationsData = {
  id: number;
  createdAt: string;
  crop: {};
  dose: string;
  dose_max: number;
  dose_min: number;
  fertilizer: {
    name: string;
  };
  updatedAt: string;
  use_count: number;
};

export type FertilizationsQuery = {
  populate: string;
  sort: string;
  pagination: {
    pageSize: number;
    page: number;
  };
  filters: {};
};
