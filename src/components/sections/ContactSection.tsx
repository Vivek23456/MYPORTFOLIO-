import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Mail, MapPin, MessageSquare, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      // Success
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you within 24-48 hours.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        project: '',
        message: ''
      });
      
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again or contact me directly at vivekatkari910@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section className="py-20 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20" />

      <div className="container px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <Badge variant="cyber" className="mb-6">
            Let's Connect
          </Badge>
          
          <h2 className="text-4xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-slate-100 md:text-6xl">
            Start Your Next
            <br />
            <span className="glow-text text-slate-50">Blockchain Project</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-50">
            Ready to bring your Web3 vision to life? Let's discuss how we can build something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-8">
            <div className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-base text-gray-50">vivekatkari910@gmail.com
                </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-zinc-50">Mumbai/India</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Response Time</h3>
                  <p className="text-zinc-50">Within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name *
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" required className="bg-background/50 border-border/50 focus:border-primary" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required className="bg-background/50 border-border/50 focus:border-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="project" className="text-sm font-medium text-foreground">
                  Project Type
                </label>
                <select id="project" name="project" value={formData.project} onChange={handleInputChange} className="w-full h-10 px-3 py-2 rounded-md border border-border/50 bg-background/50 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  <option value="">Select project type</option>
                  <option value="defi">DeFi Protocol</option>
                  <option value="nft">NFT Marketplace</option>
                  <option value="dao">DAO Development</option>
                  <option value="dapp">Custom dApp</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project, timeline, and any specific requirements..." rows={6} required className="bg-background/50 border-border/50 focus:border-primary resize-none" />
              </div>

              {/* Submit Status Messages */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-start gap-3 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm leading-relaxed">{submitStatus.message}</p>
                </motion.div>
              )}

              <motion.div animate={{
                x: [0, -0.3, 0.3, -0.3, 0],
                y: [0, -0.3, 0.3, -0.3, 0]
              }} transition={{
                duration: 0.9,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }} whileHover={{
                scale: 1.05,
                x: [0, -0.8, 0.8, -0.8, 0],
                y: [0, -0.8, 0.8, -0.8, 0],
                transition: {
                  duration: 0.2,
                  repeat: Infinity
                }
              }}>
                <Button 
                  type="submit" 
                  variant="cyber" 
                  size="lg" 
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};