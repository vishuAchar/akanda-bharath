import React from "react";
import { Spinner } from "@nextui-org/spinner";

export default function loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner size="md" color="primary" />
    </div>
  );
}
