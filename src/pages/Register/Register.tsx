import Eye from "@/assets/icons/Eye";
import EyeSlash from "@/assets/icons/EyeSlash";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

type Props = {};

type PasswordStrength = "no-content" | "Fraca" | "Média" | "Forte";
type PasswordMatch = "no-content" | "match" | "no-match";

export default function Register({}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const [passwordMatch, setPasswordMatch] =
    useState<PasswordMatch>("no-content");

  const [passwordStrength, setPasswordStrength] =
    useState<PasswordStrength>("no-content");

  useEffect(() => {
    if (password.length === 0) {
      setPasswordStrength("no-content");
    } else if (password.length < 8) {
      setPasswordStrength("Fraca");
    } else if (password.length < 12) {
      setPasswordStrength("Média");
    } else {
      setPasswordStrength("Forte");
    }
  }, [password]);

  useEffect(() => {
    if (!passwordAgain) {
      setPasswordMatch("no-content");
    } else if (password === passwordAgain) {
      setPasswordMatch("match");
    } else {
      setPasswordMatch("no-match");
    }
  }, [password, passwordAgain]);

  return (
    <div className="bg-red-200 w-full h-screen flex justify-center items-center">
      <Tabs defaultValue="userRegisterTab" className="w-[400px]">
        <TabsList className="flex justify-between w-full h-14 mx-auto">
          <TabsTrigger
            id="userRegister"
            value="userRegisterTab"
            className="h-10 w-10 rounded-full shadow-blue-300 shadow-md"
          >
            1
          </TabsTrigger>
          <TabsTrigger
            id="restaurantRegister"
            value="password"
            className="h-10 w-10 rounded-full shadow-blue-300 shadow-md"
          >
            2
          </TabsTrigger>
          <TabsTrigger
            id="payment"
            value="password"
            className="h-10 w-10 rounded-full shadow-blue-300 shadow-md"
          >
            3
          </TabsTrigger>
        </TabsList>
        <TabsContent value="userRegisterTab">
          <Card>
            <CardHeader>
              <CardTitle>Criando sua credencial</CardTitle>
              <CardDescription>Insira suas informações abaixo.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <form onSubmit={() => {}}>
                <div className="space-y-1">
                  <Label htmlFor="fullname">Nome completo</Label>
                  <Input
                    id="fullname"
                    defaultValue=""
                    placeholder="João Mateus Silva"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    placeholder="JoaoMateus@examplo.com"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" placeholder="123.456.789-00" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="phonenumber">Número de telefone</Label>
                  <Input
                    id="phonenumber"
                    placeholder="(99) 99999-9999"
                    required
                    type="tel"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Senha
                  </label>
                  <p
                    className={`text-xs ${
                      passwordStrength === "Fraca"
                        ? "text-red-500"
                        : passwordStrength === "Média"
                        ? "text-yellow-500"
                        : passwordStrength === "Forte"
                        ? "text-green-500"
                        : "hidden"
                    }`}
                  >
                    {passwordStrength !== "no-content" && passwordStrength}
                  </p>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                    >
                      {showPassword ? <EyeSlash /> : <Eye />}
                    </button>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="passwordagain">Repita sua senha</Label>
                  <p
                    className={`text-xs ${
                      passwordMatch === "no-content"
                        ? "hidden"
                        : passwordMatch === "match"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {passwordMatch === "match"
                      ? "As senhas coincidem"
                      : "As senhas não coincidem"}
                  </p>
                  <div className="relative">
                    <Input
                      id="passwordagain"
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      required
                      value={passwordAgain}
                      onChange={(e) => setPasswordAgain(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                    >
                      {showPassword ? <EyeSlash /> : <Eye />}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="hidden"
                  id="userRegisterSubmitButton"
                ></button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="">Próximos passos</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
