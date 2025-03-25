
import { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message received",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container">
      <div className="max-w-5xl mx-auto">
        <div className="text-center animate-fade-in">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-description mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mt-12">
          <div className="md:col-span-2 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold mb-1">Email Me</h3>
                  <p className="text-muted-foreground mb-2">For project inquiries or questions</p>
                  <a href="mailto:hello@example.com" className="text-primary hover:text-primary/70 transition-colors">
                    hello@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold mb-1">Social Media</h3>
                  <p className="text-muted-foreground mb-2">Follow me for updates and inspiration</p>
                  <div className="space-x-4">
                    <a href="#" className="text-primary hover:text-primary/70 transition-colors">Twitter</a>
                    <a href="#" className="text-primary hover:text-primary/70 transition-colors">Instagram</a>
                    <a href="#" className="text-primary hover:text-primary/70 transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 animate-fade-in animate-delay-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-white/50 focus:ring-2 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-white/50 focus:ring-2 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all"
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-white/50 focus:ring-2 focus:ring-primary/10 focus:border-primary/30 outline-none transition-all"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="filled-button flex items-center justify-center w-full md:w-auto disabled:opacity-70"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
