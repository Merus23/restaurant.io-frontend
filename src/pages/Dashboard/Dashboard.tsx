import OpenBox from "@/assets/icons/OpenBox";
import People from "@/assets/icons/People";
import Shop from "@/assets/icons/Shop";
import Utensils from "@/assets/icons/Utensils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type Props = {};

export default function Dashboard({}: Props) {
  const cards = [
    { name: "Pessoas", icon: <People />, href: "" },
    { name: "Produtos", icon: <OpenBox />, href: "" },
    { name: "Mesas", icon: <Utensils />, href: "" },
    { name: "Restaurante", icon: <Shop />, href: "" },
  ];

  return (
    <div className="bg-red-200 w-full h-full flex flex-col justify-center items-center p-4 md:p-0">
      <div className="hidden">
        <p>Segunda-feira, 22 de Janeiro</p>
        <p>Boa tarde, João!</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-14 md:gap-28">
        {cards.map((cardName, index) => {
          return (
            <a href={cardName.href} key={index} className="hover:scale-110">
              <Card className="p-0 pt-4 md:p-4">
                <CardContent className="">
                  <div className="w-fit mx-auto">{cardName.icon}</div>
                </CardContent>
                <CardFooter className="">
                  <div className="w-fit mx-auto">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
                      {cardName.name}
                    </h3>
                  </div>
                </CardFooter>
              </Card>
            </a>
          );
        })}
      </div>
    </div>
  );
}
