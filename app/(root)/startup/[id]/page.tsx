import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  return <div>Hello bro i am {id}</div>;
};

export default page;
