import { SlideUp } from "@/app/_animations";
import { ContactForm } from "../contact-form";

export default function SendMsg() {
  return (
    <section className="w-full xl:max-w-[1140px] mx-auto pb-4 grid place-items-center gap-[32px] text-neutral-100">
      <SlideUp delay={0.1} duration={0.4}>
        <h1 className="text-3xl sm:text-4xl xl:text-5xl">Send Us Message</h1>
      </SlideUp>
      <ContactForm />
    </section>
  );
}
