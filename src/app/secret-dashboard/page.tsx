import BaseLayout from "@/components/BaseLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Content from "./content/Content";


const DashboardPage = () => {
  return (
    <BaseLayout renderRightPanel={false}>
      <Tabs defaultValue="content" className="w-full mx-auto px-2 my-10 md:px-10">
        <TabsList className="flex flex-col md:flex-row w-full md:w-3/4 mx-auto h-auto">
          <TabsTrigger className="w-full md:w-auto" value="content">Content</TabsTrigger>
          <TabsTrigger className="w-full md:w-auto" value="store">Store</TabsTrigger>
          <TabsTrigger className="w-full md:w-auto" value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="content">
          {/* content tab */}
          <Content />
        </TabsContent>
        <TabsContent value="store">store</TabsContent>
        <TabsContent value="analytics">analytics</TabsContent>
      </Tabs>
    </BaseLayout>
  )
}

export default DashboardPage;