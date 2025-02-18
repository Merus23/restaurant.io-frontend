import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {};

export default function PaymentTabComponent({}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pagamento</CardTitle>
        <CardDescription>
          Você será redirecionado para uma página de pagamento
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <h1 className="mx-auto text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Caso não tenha sido redirecionado para o pagamento, clique o botão a
            baixo:
          </h1>
          <a className="mx-auto text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            <Button>Pagamento</Button>
          </a>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
