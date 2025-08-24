import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComponentData } from "@/data/components";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { CodeTab } from "./CodeTab";
import { PreviewComponent } from "./Preview";

interface ComponentPreviewProps {
  component: ComponentData;
  showTabs?: boolean;
  className?: string;
}

export const ComponentPreview = ({
  component,
  showTabs = true,
  className,
}: ComponentPreviewProps) => {
  const navigate = useNavigate();

  if (!showTabs) {
    return (
      <Card
        onClick={() => navigate(`/components/${component.id}`)}
        className={cn(className, "cursor-pointer")}
      >
        <div className="flex items-center justify-center h-[48vh] p-6 overflow-hidden">
          <PreviewComponent componentId={component.id} isDetailedPage={false} />
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn(className, "w-[60vw]")}>
      <Tabs defaultValue="preview" className="w-full">
        <div className="px-6 pt-3">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="preview">
          <span className="flex items-center justify-center pt-8 pb-12 px-6">
            <PreviewComponent componentId={component.id} />
          </span>
        </TabsContent>

        <TabsContent value="code" className="p-0">
          <CodeTab componentId={component.id} />
        </TabsContent>
      </Tabs>
    </Card>
  );
};
