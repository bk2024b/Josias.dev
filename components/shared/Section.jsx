import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({ className, containerClassName, children, id, ...props }) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
