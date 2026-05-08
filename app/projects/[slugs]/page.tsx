import { images } from "@/app/type/image";
import ProjectDetails from "../../components/ProjectDetails";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slugs: string }>;
};

export default async function Page({ params }: Props) {
  const { slugs } = await params;
  const project = images.find((item) => item.ID.toString() === slugs);

  if (!project) return notFound();

  return <ProjectDetails project={project} />;
}
