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
import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";

type PasswordStrength = "no-content" | "Fraca" | "Média" | "Forte";
type PasswordMatch = "no-content" | "match" | "no-match";

type Props = {
  handleNextStep: () => void;
};

export default function UserRegisterTabComponent({ handleNextStep }: Props) {
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
            <Input id="email" placeholder="JoaoMateus@examplo.com" required />
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
        <Button className="" onClick={handleNextStep}>
          Próximos passos
        </Button>
      </CardFooter>
    </Card>
  );
}
