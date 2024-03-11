import {
  address_icon,
  help_center_icon,
  invite_friend_icon,
  order_reorder_icon,
  profile_icon,
  settings_icon,
  voucher_icon,
} from "../index.icon";

import { Profile } from "../../screens/Profile";
import { Offer } from "../../screens/Offer";
import { Orders } from "../../screens/Orders";
import { Address } from "../../screens/Address";
import { Help } from "../../screens/Help";
import { InviteFriend } from "../../screens/InviteFriend";
import { Settings } from "../../screens/Settings";

export const DrawerNavData = [
  {
    id: 3,
    name: "View Profile",
    title: "My Profile",
    icon: profile_icon,
    children: Profile,
  },
  {
    id: 1,
    name: "Vouchers & offers",
    title: "Vouchers & offers",
    icon: voucher_icon,
    children: Offer,
  },
  {
    id: 2,
    name: "Orders & reordering",
    title: "My Orders",
    icon: order_reorder_icon,
    children: Orders,
  },

  {
    id: 4,
    name: "Addresses",
    title: "Addresses Book",
    icon: address_icon,
    children: Address,
  },
  {
    id: 5,
    name: "Help center",
    title: "Help center",
    icon: help_center_icon,
    children: Help,
  },
  {
    id: 6,
    name: "Invite friends",
    title: "Invite friends",
    icon: invite_friend_icon,
    children: InviteFriend,
  },
  {
    id: 7,
    name: "Settings",
    title: "Settings",
    icon: settings_icon,
    children: Settings,
  },
];
