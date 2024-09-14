import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Kachapat Puntong",
    studentId: "660612137",
  });
};
