export type AboutUsData = {
  id: number;
  title: string;
  type: string;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  socials: [];
};

export type AboutUsResponse = {
  data: [];
  meta: {
    pagination: {
      pageSize: number;
      pageCount: number;
      pageIndex: number;
      total: number;
    };
  };
};

export type AboutUsQuery = {
  pagination: {
    pageSize: number;
    page: number;
  };
};
