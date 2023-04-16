import { useEffect } from "react";
type TType = {
  elementId: string;
  behavior?: ScrollBehavior
};
type TF = ({ elementId, behavior }: TType) => void;
export function useScroll() {
  const scrollTo: TF = ({ elementId, behavior = "smooth" }: TType) => {
    if (typeof window !== "undefined") {
      const doc = document.getElementById(elementId);
      doc?.scrollIntoView({ behavior });
    }
  }
  useEffect(() => { }, [])
  return { scrollTo };
}