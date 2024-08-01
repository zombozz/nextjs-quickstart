import Contact from "@/components/Contact/Contact";
import Navbar from "@/components/Navbar";

const ContactPage = () => {
  return (
    <main className="">
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="w-full max-w-md mx-4 sm:mx-0">
            <Contact />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
