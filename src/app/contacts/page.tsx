import { CreateButton } from "@/components/button";
import ContactTable from "@/components/contact-table";
import Pagination from "@/components/pagination";
import Search from "@/components/search";
import { getContactPages } from "@/lib/data";
import React from "react";

export default async function Contacts({
  searchParams,
}: {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const resolvedParams = await searchParams; // Tunggu nilai searchParams
  const query = resolvedParams?.query || "";
  const currentPage = Number(resolvedParams?.page || 1);

  const totalPages = await getContactPages(query);

  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>
      <ContactTable query={query} currentPage={currentPage} />
      <div className="flex justify-center mt-4">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
