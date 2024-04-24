import db from "@/db/db";
import { ProductForm } from "../../_components/ProductForm";
import { PageHeader } from "./../../../_components/PageHeader";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await db.product.findUnique({ where: { id } });
  return (
    <>
      <PageHeader>Edit Product</PageHeader>
      <ProductForm product={product} />
    </>
  );
}
