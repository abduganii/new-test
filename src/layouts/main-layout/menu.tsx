import { useNavigate } from "react-router-dom";

import {
  BasketIcons,
  BuildingIcons,
  HomeIcons,
  OpenAIIcons,
  PersonalDetailsIcons,
  PriceIcons,
  QrcodeIcons,
  SaleIcons,
  SettingsIcons,
  TimeSheetIcons,
  WareHouseIcons,
} from "../../components/icons";

const menu = [
  {
    id: 1,
    icons: <HomeIcons />,
    link: "/dashboard",
  },
  {
    id: 2,
    icons: <BuildingIcons />,
    link: "/product",
  },
  {
    id: 3,
    icons: <BasketIcons />,
    link: "/order",
  },
  {
    id: 4,
    link: "/publish-product",
    icons: <WareHouseIcons />,
  },
  {
    id: 5,
    icons: <TimeSheetIcons />,
  },
  {
    id: 6,
    icons: <PersonalDetailsIcons />,
  },
  {
    id: 7,
    icons: <PriceIcons />,
  },
  {
    id: 8,
    icons: <SaleIcons />,
  },
  {
    id: 9,
    icons: <QrcodeIcons />,
  },
];
export default function Menu() {
  const navigate = useNavigate();
  return (
    <div className="w-[104px] h-screen flex justify-between flex-col  border-r bg-[#E0DFD6]  border-[#C3C3BB]">
      <div>
        <img
          src="/logo1.svg"
          className="border-b inline-block w-full h-[64px]  border-[#C3C3BB]"
        />
        {menu?.map((e) => (
          <div
            onClick={() => {
              if (e?.link) {
                navigate(e?.link);
              }
            }}
            className={` hover:bg-[#D6D6CD] border-transparent cursor-pointer border-b hover:border-[#E0DFD6] text-center flex items-center justify-center p-[20px]`}
            key={e?.id}
          >
            {e?.icons}
          </div>
        ))}
      </div>
      <div>
        <div
          className={` hover:bg-[#D6D6CD] border-transparent cursor-pointer border-b hover:border-[#E0DFD6] text-center flex items-center justify-center p-[20px]`}
        >
          {" "}
          <SettingsIcons />
        </div>
        <div
          className={`bg-[#272727] border-transparent cursor-pointer text-center flex items-center justify-center p-[20px]`}
        >
          {" "}
          <OpenAIIcons />
        </div>
      </div>
    </div>
  );
}
