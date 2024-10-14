import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import clsx from "clsx";
export enum TicketVariant {
  SUCCESS = "success",
  DANGER = "danger",
}
export interface TicketProps {
  variant: TicketVariant;
  title: string;
}
export const Ticket = (props: TicketProps) => {
  const { variant, title } = props;
  return (
    <div className="mx-2 inline-block p-2 bg-[#373458] rounded-lg shadow-lg !h-[#52px] opacity-80">
      <div className="text-sm text-white flex">
        <p className="mr-2">{title}</p>
        <InfoCircleOutlined className="text-xs self-center" />
      </div>
      <div className="text-sm flex">
        <p className="mr-2 text-fontGrey">4.2M</p>
        <p
          className={clsx(
            variant === "success" ? "text-success" : "text-danger"
          )}
        >
          {variant === "success" && (
            <ArrowUpOutlined className="text-sm text-success" rotate={45} />
          )}
          {variant === "danger" && (
            <ArrowDownOutlined className="text-sm text-danger" rotate={45} />
          )}
          52%
        </p>
      </div>
    </div>
  );
};
