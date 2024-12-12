import { User } from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
  image: string;
}

export const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      text: "I went in for an eye exam with Dr. Lee. Upon entering, I was warmly greeted by the manager, Monika, who was very friendly and professional. My appointment with Dr. Lee was excellent!",
      author: "Anna Rak",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    },
    {
      text: "I received an excellent eye exam - the doctor was very knowledgeable and spent time to explain various issues relating to my eyes and contacts.",
      author: "Danica You-Hamilton",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840"
    },
    {
      text: "My first visit with Dr. Sharma was fantastic. He is very professional and courteous. I have already recommended Revolution Eyes to my husband and several coworkers.",
      author: "Robert Hodgin",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764"
    },
    {
      text: "Another great visit and once again another great experience! I can't recommend them more. Great atmosphere and great people that know what they're doing!",
      author: "Raymond Mazzini",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">What Our Patients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <p className="font-semibold text-primary">{testimonial.author}</p>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};