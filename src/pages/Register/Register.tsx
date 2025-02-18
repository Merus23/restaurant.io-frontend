import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import UserRegisterTabComponent from "./components/UserRegisterTabComponent";
import RestaurantRegisterTabComponent from "./components/RestaurantRegisterTabComponent";
import PaymentTabComponent from "./components/PaymentTabComponent";

type Props = {};

export default function Register({}: Props) {
  const [activeTab, setActiveTab] = useState("userRegisterTab");

  const handleNextStep = () => {
    if (activeTab === "userRegisterTab") setActiveTab("restaurantRegisterTab");

    if (activeTab === "restaurantRegisterTab") setActiveTab("paymentTab");
  };

  return (
    <div className="bg-red-200 w-full h-screen flex justify-center pt-24 md:pt-60">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-[400px]"
      >
        <TabsList className="flex justify-between w-full h-14 mx-auto">
          <TabsTrigger
            disabled
            id="userRegister"
            value="userRegisterTab"
            className="h-10 w-10 rounded-full shadow-blue-300 shadow-md text-gray-900"
          >
            1
          </TabsTrigger>
          <TabsTrigger
            disabled
            id="restaurantRegister"
            value="restaurantRegisterTab"
            className="h-10 w-10 rounded-full shadow-blue-300 shadow-md text-gray-900"
          >
            2
          </TabsTrigger>
          <TabsTrigger
            disabled
            id="payment"
            value="paymentTab"
            className="h-10 w-10 rounded-full shadow-blue-300 shadow-md text-gray-900"
          >
            3
          </TabsTrigger>
        </TabsList>
        <TabsContent value="userRegisterTab">
          <UserRegisterTabComponent handleNextStep={handleNextStep} />
        </TabsContent>
        <TabsContent value="restaurantRegisterTab">
          <RestaurantRegisterTabComponent handleNextStep={handleNextStep} />
        </TabsContent>
        <TabsContent value="paymentTab">
          <PaymentTabComponent />
        </TabsContent>
      </Tabs>
    </div>
  );
}
