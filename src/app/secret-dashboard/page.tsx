import BaseLayout from "@/components/BaseLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Content from "./content/Content";
import StoreTab from "./store/StoreTab";
import AnalyticsTab from "./analytics/AnalyticsTab";


const DashboardPage = () => {
  return (
    <BaseLayout renderRightPanel={false}>
      <Tabs defaultValue="content" className="w-full mx-auto px-2 my-10 md:px-10">
        <TabsList className="flex flex-col md:flex-row w-full md:w-3/4 mx-auto h-auto">
          <TabsTrigger className="w-full md:w-auto" value="content">Content</TabsTrigger>
          <TabsTrigger className="w-full md:w-auto" value="store">Store</TabsTrigger>
          <TabsTrigger className="w-full md:w-auto" value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="content"><Content /></TabsContent>
        <TabsContent value="store"><StoreTab /></TabsContent>
        <TabsContent value="analytics"><AnalyticsTab /></TabsContent>
      </Tabs>
    </BaseLayout>
  )
}

export default DashboardPage;