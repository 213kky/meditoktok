import DiseaseTable from "./DiseaseTable";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function SymptomSearch() {

  return (
    <section className="contents">
      <DiseaseTable />
      {/* ... */}
    </section>
  );
 }