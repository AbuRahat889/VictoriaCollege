type Card = {
  icon: string;
  title: string;
  value: string;
};

type Tab = {
  id: string;
  label: string;
  heading: string;
  subheading: string;
  cards: readonly Card[];
};

export interface CourseInfoSectionProps {
  tabs: readonly Tab[];
}

export type TabKey = "overview" | "structure" | "admissions";

export const tabOrder: TabKey[] = ["overview", "structure", "admissions"];

export interface CourseStructureProps {
  title: string;
  modules: {
    code: string;
    title: string;
    description: string;
    credits: number;
  }[];
}
