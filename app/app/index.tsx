import { View } from "react-native";
import { Background} from "../components/Background";
import { InstagramIcon, FacebookIcon, DriveIcon } from "@/components/RedirectElements";
import { Zachos } from "@/components/Zachos";

export default function Index() {
  return (
      <Background Page={<div>
        <Zachos/>
        <InstagramIcon/>
        <FacebookIcon/>
        <DriveIcon/>
        </div>}>
      </Background>
  );
}
