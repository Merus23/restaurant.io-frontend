import Logout from "@/assets/icons/Logout";
import Perfil from "@/assets/icons/Perfil";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { useEffect, useRef, useState } from "react";

type Props = {};

export default function Navbar({}: Props) {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node) &&
        avatarRef.current &&
        !avatarRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: "Seu Perfil", icon: <Perfil />, href: "" },
    { name: "Sair", icon: <Logout />, href: "" },
  ];

  return (
    <nav className="w-full h-14 flex justify-end p-1 relative ">
      <div
        ref={avatarRef}
        className="cursor-pointer"
        onClick={() => setShowOptions(!showOptions)}
      >
        <Avatar>
          <AvatarImage
            className="rounded-full"
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback className="rounded-full border-4 border-black w-12 h-12">
            CN
          </AvatarFallback>
        </Avatar>
      </div>

      {showOptions && (
        <Card
          ref={optionsRef}
          className="absolute flex flex-col top-16 w-52 bg-white pb-0"
        >
          <CardContent className="">
            <nav className="mx-auto pb-0 pt-4">
              {navItems.map((item, index) => {
                return (
                  <a
                    href={item.href}
                    key={index}
                    className="flex justify-start items-center gap-4 hover:bg-red-200 p-4 rounded-xl"
                  >
                    {item.icon}
                    <p className="scroll-m-20 text-xl font-semibold tracking-tight text-black flex-1">
                      {item.name}
                    </p>
                  </a>
                );
              })}
            </nav>
          </CardContent>
        </Card>
      )}
    </nav>
  );
}
