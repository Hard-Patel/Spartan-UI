export interface ITemplateData {
  id: string;
  name: string;
  description: string;
  link: string;
  previewImage?: string;
}

// 3. Raw components data (same as you already have)
export const templates: ITemplateData[] = [
  {
    id: "1234",
    name: "Zuro",
    link: "https://zuro.netlify.app",
    description: "AI Workflow Automation",
    previewImage:
      "https://spartan-ui-lib.s3.ap-south-1.amazonaws.com/zuro-preview",
  },
];
