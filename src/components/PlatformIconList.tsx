import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

export const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation4: FaPlaystation,
    xbox360: FaXbox,
    linux: FaLinux,
    android: FaAndroid,
    macos: FaApple,
    "nintendo-switch": SiNintendo,
    web: BsGlobe,
    iphone: MdPhoneIphone,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) =>
        platform.slug in iconMap ? <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' /> : <></>
      )}
    </HStack>
  );
};
