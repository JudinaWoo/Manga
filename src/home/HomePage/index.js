import React from "react";
// import { useQuery } from "react-query";

import BaseLayout from "../../ds/BaseLayout";

import MoviesList from "../MoviesList";

export default function HomePage() {
  return (
    <BaseLayout>
      <MoviesList />
    </BaseLayout>
  );
}
