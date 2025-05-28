import { useState } from 'react';
import {Mail, MessageSquare, Phone, Send} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { GradientButton } from '@/components/ui/gradient-button';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message received",
        description: "Thank you for reaching out! I'll get back to you soon."
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return <section id="contact" className="section-container">
  <div className="max-w-5xl mx-auto">
    <div className="text-center animate-fade-in">
      <h2 className="section-title">Let's Connect</h2>
      <p className="section-description mx-auto">
        Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 animate-fade-in">
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-display font-bold mb-1">Email Me</h3>
            <p className="text-muted-foreground mb-2">For project inquiries or questions</p>
            <a href="mailto:granitkosumi77@gmail.com" className="text-primary hover:text-primary/70 transition-colors">
              granitkosumi77@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-display font-bold mb-1">Social Media</h3>
            <p className="text-muted-foreground mb-2">Follow me for updates and inspiration</p>
            <div className="space-x-4">
              <a href="https://www.facebook.com/granitkosumii" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors">Facebook</a>
              <a href="https://instagram.com/granitkosumi" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/in/granit-kosumi" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-display font-bold mb-1">Phone Number</h3>
            <p className="text-muted-foreground mb-2">Call or message me directly</p>
            <a href="tel:+38345566783" className="text-primary hover:text-primary/70 transition-colors">
              +383 45 566 783
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
};
export default Contact;