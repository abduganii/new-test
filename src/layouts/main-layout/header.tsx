import {
  DotsIcons,
  NoteIcons,
  RingIcons,
  RinigIcons,
} from "../../components/icons";

export default function Header() {
  return (
    <div className="flex items-center gap-5 w-full h-[64px] px-[51px] py-[23px] bg-sidebar border-b border-border">
      <p className="flex mr-[auto]  items-center gap-4 text-[14px] leading-[16px] text-foreground">
        <span> Главная </span> | <span>Войти в кабинет</span>
      </p>
      <div>
        <NoteIcons />
      </div>
      <div>
        <RingIcons />
      </div>
      <div>
        <DotsIcons />
      </div>
      <div className="flex items-center gap-[5px]">
        <RinigIcons />
        <p className="text-[25px] leading-[30px] text-foreground relative">
          13
          <span className="text-[8px] leading-[12px] text-foreground absolute -top-[2px] -right-[2px]">
            ° C
          </span>
        </p>
      </div>
      <div>
        <p className="text-[14px] leading-[17px] text-foreground">11:58</p>
        <p className="text-[14px] leading-[17px] text-foreground">Ташкент</p>
      </div>
    </div>
  );
}
