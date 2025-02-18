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
import { Checkbox } from "@radix-ui/react-checkbox";
import { Label } from "@radix-ui/react-label";

type Props = {
  handleNextStep: () => void;
};

export default function RestaurantRegisterTabComponent({
  handleNextStep,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Criando seu restaurante</CardTitle>
        <CardDescription>Insira suas informações abaixo.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <form onSubmit={() => {}}>
          <div className="space-y-1">
            <Label htmlFor="fullname">CPNJ</Label>
            <Input
              id="fullname"
              defaultValue=""
              placeholder="12.345.678/0001-00"
              required
            />

            <div className="space-x-2">
              <Checkbox id="informal_terms" />
              <Label htmlFor="informal_terms">
                Sou um empreendedor informal
              </Label>
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Nome do estabelecimento</Label>
            <Input id="text" placeholder="Restaurante do seu João" required />
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
