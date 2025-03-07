import { CiCreditCard1, CiDollar } from "react-icons/ci";
import { SlPaypal } from "react-icons/sl";

export const chip = "/assets/Chip_Card.svg";
export const chip_2 = "/assets/Chip_Card_2.svg";
export const BASE_URL = "http://inertia-pos.manirul.xyz/api/";
export const BASE_IMAGE_URL = "http://inertia-pos.manirul.xyz/";

export const transactions_icons = [
  {
    icon: "<CiCreditCard1 />",
    color: "#DCFAF8",
    type: "withdraw",
  },
  {
    icon: "<SlPaypal />",
    color: "#E7EDFF",
    type: "deposit",
  },
  {
    icon: "<CiDollar />",
    color: "#E7EDFF",
    type: "deposit",
  },
];
