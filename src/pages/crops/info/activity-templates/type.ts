export type ActivityTemplatesData = {
  id: number;
  activity_type: {
    updatedAt: string;
    createdAt: string;
    description: string;
    id: number;
    is_deleted: boolean;
    name: string;
  };
  comment: string;
  createdAt: string;
  createdBy: string;
  crop: {};
  cycle: number;
  end_date: string;
  end_year: string;
  is_deleted: boolean;
  start_date: string;
  start_year: string;
  updatedAt: string;
  updatedBy: string;
  variety: string;
};

export type ActivityTemplatesQuery = {
  populate: string;
  sort: {};
  filters: {};
  pagination: {
    pageSize: number;
    page: number;
  };
};
