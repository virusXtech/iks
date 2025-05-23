import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import ContactFormClient from '@/components/ContactForm'
import { RESTAURANT_INFO as restaurantInfo } from '@/lib/constants'

export default async function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-serif font-bold text-primary mb-4">Get In Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We&apos;d love to hear from you. Whether it&apos;s a question, feedback, or a reservation inquiry, feel free
          to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
        <ContactFormClient />

        <div className="space-y-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-md">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 shrink-0" />
                <span>{restaurantInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href={`tel:${restaurantInfo.phone}`} className="hover:text-primary transition-colors">
                  {restaurantInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href={`mailto:${restaurantInfo.email}`} className="hover:text-primary transition-colors break-all">
                  {restaurantInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Clock className="h-5 w-5 text-accent mt-1 shrink-0" />
                <div>
                  <p className="font-medium">Opening Hours:</p>
                  {restaurantInfo.timings.map(timing => (
                    <p className="text-sm text-muted-foreground" key={timing.id}>
                      {timing.label} : {timing.opening_time} - {timing.closing_time}
                    </p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-primary">Find Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-[16/10] rounded-md overflow-hidden border">
                <iframe
                  src={restaurantInfo.mapURI}
                  width="600"
                  height="375"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
