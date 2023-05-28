import data from "../../../../public/db/data.json";

import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");

  // Pagination logic
  const pageSize = 20;
  const totalPosts = data.length;
  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  const paginatedData = data.slice(startIndex, endIndex);

  return NextResponse.json({
    paginatedData,
    totalPosts,
    totalPages,
  });
}
