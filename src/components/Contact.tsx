import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="flex text-gray-500 flex-col w-full py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Get in Touch</h2>
      <form className="max-w-md mx-auto w-80 space-y-6">
        <div>
          <Input type="text" placeholder="Your Name" required />
        </div>
        <div>
          <Input type="email" placeholder="Your Email" required />
        </div>
        <div>
          <Textarea placeholder="Your Message" required />
        </div>
        <Button type="submit" className="w-full bg-purple-700 font-bold text-white">Send Message</Button>
      </form>
    </section>
  )
}

